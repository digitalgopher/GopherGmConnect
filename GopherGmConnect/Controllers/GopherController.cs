﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using System.Collections.Specialized;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using GopherGmConnect.Models;
using System.Web.Configuration;
using System.Threading.Tasks;
using System.Collections.Concurrent;

namespace GopherGmConnect.Controllers
{
    public class GopherController : ApiController
    {


        private string DownloadFromServer(string url)
        {
            bool isValidToken = false;
            string token = (string)System.Web.HttpContext.Current.Cache["Token"];

            using (var wb = new WebClient())
            {
                ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
                if (string.IsNullOrEmpty(token))
                {
                    token = GetEASWToken();
                    System.Web.HttpContext.Current.Cache.Insert("Token", token);
                    System.Web.HttpContext.Current.Cache.Insert("LastUpdated", DateTime.UtcNow);
                    isValidToken = true;
                }
                else
                {
                    var lastUpdated = (DateTime)System.Web.HttpContext.Current.Cache["LastUpdated"];
                    DateTime now = DateTime.UtcNow;
                    TimeSpan span = now - lastUpdated;
                    if (span.TotalMinutes > 30)
                    {
                        token = GetEASWToken();
                        System.Web.HttpContext.Current.Cache.Insert("Token", token);
                        System.Web.HttpContext.Current.Cache.Insert("LastUpdated", DateTime.UtcNow);
                        isValidToken = true;
                    }
                    else
                    {
                        isValidToken = true;
                    }
                }

                if (isValidToken)
                {
                    wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
                    return wb.DownloadString(url);
                }
                else
                {
                    throw new Exception("Cant get a valid token for some reason!");
                }

            }
        }

        private Player FetchPlayer(string id, bool fullInfo)
        {
            var leagueID = WebConfigurationManager.AppSettings["leagueid"];
            var playerID = id;
            var mobilePlayerUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/player/" + playerID + "/info/mobile";
            //var mobileRawJson = wb.DownloadString(mobilePlayerUrl);
            var mobileRawJson = DownloadFromServer(mobilePlayerUrl);
            JObject mobileJson = JObject.Parse(mobileRawJson);
            var aPlayer = new Player();
            if (fullInfo)
            {
                var playerfullinfoUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/player/" + playerID + "/info";
                var fullplayerrawjson = DownloadFromServer(playerfullinfoUrl);
                JObject fullinfojson = JObject.Parse(fullplayerrawjson);
                JObject bioJson = fullinfojson.GetValue("bio") as JObject;
                aPlayer = new Player(mobileJson, bioJson);

            }
            else
            {
                aPlayer = new Player(mobileJson);
            }

            aPlayer.id = playerID;
            return aPlayer;
        }

        private string GetTeamCaptain(JArray playerList, JArray isCaptainList)
        {
            int captainIndex = 0;
            for (int cntr = 0; cntr < isCaptainList.Count; cntr++)
            {
                if (isCaptainList[cntr].Value<int>() == 1)
                {
                    captainIndex = cntr;
                    break;
                }
            }
            if (captainIndex == 0)
            {
                return "No Captain";
            }
            else
            {
                return playerList[captainIndex].Value<string>();
            }
        }

        [HttpGet]
        public object Players(string id)
        {
            //var token = GetEASWToken();
            return FetchPlayer(id, true);
        }

        [HttpGet]
        public object GetLines(string id)
        {
            var leagueID = WebConfigurationManager.AppSettings["leagueid"];
            var teamId = id;
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + teamId + "/roster";
            string dlJson = DownloadFromServer(url);
            JObject roster = JObject.Parse(dlJson);

            //            g1: 435,
            //g2: 639,


            //pk4_1c: 564,
            //pk4_1ld: 3897,
            //pk4_1lw: 2485,
            //pk4_1rd: 2034,
            //pk4_2c: 1593,
            //pk4_2ld: 1360,
            //pk4_2lw: 1741,
            //pk4_2rd: 1373,
            //pp1c: 564,
            //pp1ld: 972,
            //pp1lw: 2485,
            //pp1rd: 3897,
            //pp1rw: 5417,
            //pp2c: 251,
            //pp2ld: 1360,
            //pp2lw: 34,
            //pp2rd: 1373,
            //pp2rw: 2991,
            //pp4_1c: 564,
            //pp4_1ld: 1373,
            //pp4_1lw: 2485,
            //pp4_1rd: 972,
            //pp4_2c: 251,
            //pp4_2ld: 3897,
            //pp4_2lw: 5417,
            //pp4_2rd: 1360,
            //s1: 564,
            //s2: 2485,
            //s3: 5417,
            //s4: 972,
            //s5: 1373,
            //x1: 564,
            //x2: 972,
            //ot_1c: 564,
            //ot_1ld: 3897,
            //ot_1lw: 2485,
            //ot_1rd: 2034,
            //ot_2c: 5417,
            //ot_2ld: 1360,
            //ot_2lw: 972,
            //ot_2rd: 1373,
            //ot_3c: 251,
            //ot_3ld: 5528,
            //ot_3lw: 34,
            //ot_3rd: 2981

            var lineList = new List<JObject>();

            //FORWARD LINES
            var fwdLine1 = new JObject(
                    new JProperty("name", "Top Line"),
                    new JProperty("lw", roster.Value<string>("l1lw")),
                    new JProperty("rw", roster.Value<string>("l1rw")),
                    new JProperty("c", roster.Value<string>("l1c"))
                );
            var fwdLine2 = new JObject(
                   new JProperty("name", "Second Line"),
                   new JProperty("lw", roster.Value<string>("l2lw")),
                   new JProperty("rw", roster.Value<string>("l2rw")),
                   new JProperty("c", roster.Value<string>("l2c"))
               );
            var fwdLine3 = new JObject(
                   new JProperty("name", "Third Line"),
                   new JProperty("lw", roster.Value<string>("l3lw")),
                   new JProperty("rw", roster.Value<string>("l3rw")),
                   new JProperty("c", roster.Value<string>("l3c"))
               );
            var fwdLine4 = new JObject(
                   new JProperty("name", "Fourth Line"),
                   new JProperty("lw", roster.Value<string>("l4lw")),
                   new JProperty("rw", roster.Value<string>("l4rw")),
                   new JProperty("c", roster.Value<string>("l4c"))
               );
            var fwdArray = new JArray(fwdLine1, fwdLine2, fwdLine3, fwdLine4);

            //D PAIRS
            var dPair1 = new JObject(
                   new JProperty("name", "Top Pair"),
                   new JProperty("ld", roster.Value<string>("l1ld")),
                   new JProperty("rd", roster.Value<string>("l1rd"))
               );

            var dPair2 = new JObject(
                   new JProperty("name", "Second Pair"),
                   new JProperty("ld", roster.Value<string>("l2ld")),
                   new JProperty("rd", roster.Value<string>("l2rd"))
               );

            var dPair3 = new JObject(
                   new JProperty("name", "Third Pair"),
                   new JProperty("ld", roster.Value<string>("l3ld")),
                   new JProperty("rd", roster.Value<string>("l3rd"))
               );

            var dArray = new JArray(dPair1, dPair2, dPair3);

            //PK 3 Man
            var pk31 = new JObject(
                   new JProperty("name", "3Man PK 1"),
                   new JProperty("c", roster.Value<string>("pk3_1c")),
                   new JProperty("ld", roster.Value<string>("pk3_1ld")),
                   new JProperty("rd", roster.Value<string>("pk3_1rd"))
               );

            var pk32 = new JObject(
                   new JProperty("name", "3Man PK 2"),
                   new JProperty("c", roster.Value<string>("pk3_2c")),
                   new JProperty("ld", roster.Value<string>("pk3_2ld")),
                   new JProperty("rd", roster.Value<string>("pk3_2rd"))
               );

            var pk3Array = new JArray(pk31, pk32);


            //PK 4 Man
            var pk41 = new JObject(
                   new JProperty("name", "4Man PK 1"),
                   new JProperty("c", roster.Value<string>("pk4_1c")),
                   new JProperty("lw", roster.Value<string>("pk4_1lw")),
                   new JProperty("ld", roster.Value<string>("pk4_1ld")),
                   new JProperty("rd", roster.Value<string>("pk4_1rd"))
               );

            var pk42 = new JObject(
                   new JProperty("name", "4Man PK 2"),
                   new JProperty("c", roster.Value<string>("pk4_2c")),
                   new JProperty("lw", roster.Value<string>("pk4_2lw")),
                   new JProperty("ld", roster.Value<string>("pk4_2ld")),
                   new JProperty("rd", roster.Value<string>("pk4_2rd"))
               );
            var pk4Array = new JArray(pk41, pk42);


            //PP 5

            var pp51 = new JObject(
                   new JProperty("name", "First Unit PP"),
                   new JProperty("c", roster.Value<string>("pp1c")),
                   new JProperty("rw", roster.Value<string>("pp1rw")),
                   new JProperty("lw", roster.Value<string>("pp1lw")),
                   new JProperty("ld", roster.Value<string>("pp1ld")),
                   new JProperty("rd", roster.Value<string>("pp1rd"))
               );

            var pp52 = new JObject(
                   new JProperty("name", "Second Unit PP"),
                   new JProperty("c", roster.Value<string>("pp2c")),
                   new JProperty("rw", roster.Value<string>("pp2rw")),
                   new JProperty("lw", roster.Value<string>("pp2lw")),
                   new JProperty("ld", roster.Value<string>("pp2ld")),
                   new JProperty("rd", roster.Value<string>("pp2rd"))
               );

            var pp5Array = new JArray(pp51, pp52);


            var pp41 = new JObject(
                   new JProperty("name", "4Man PP 1"),
                   new JProperty("c", roster.Value<string>("pp4_1c")),
                   new JProperty("lw", roster.Value<string>("pp4_1lw")),
                   new JProperty("ld", roster.Value<string>("pp4_1ld")),
                   new JProperty("rd", roster.Value<string>("pp4_1rd"))
               );

            var pp42 = new JObject(
                   new JProperty("name", "4Man PP 1"),
                   new JProperty("c", roster.Value<string>("pp4_2c")),
                   new JProperty("lw", roster.Value<string>("pp_2lw")),
                   new JProperty("ld", roster.Value<string>("pp4_2ld")),
                   new JProperty("rd", roster.Value<string>("pp4_2rd"))
               );

            var pp4Array = new JArray(pp41, pp42);

            var realLines = new JObject(
                new JProperty("fwd", fwdArray),
                new JProperty("dpair", dArray),
                new JProperty("pk3", pk3Array),
                new JProperty("pk", pk4Array),
                new JProperty("pp", pp5Array),
                new JProperty("pp4", pp4Array));
            return realLines;
        }


        private int TeamSalary(int id)
        {
            var leagueID = WebConfigurationManager.AppSettings["leagueid"];
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + id + "/roster/mobile";
            var rosterUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + id + "/roster";

            string rawJson = DownloadFromServer(url);
            string fullRosterJson = DownloadFromServer(rosterUrl);

            JObject rosterJson = JObject.Parse(fullRosterJson);
            var mainRosterIds = rosterJson.Value<JArray>("playerID").ToObject<List<string>>();

            JObject fullJson = JObject.Parse(rawJson);
            var jsonPlayers = fullJson.GetValue("v");
            var players = jsonPlayers as JArray;

            var team = new Team();
            var cPlayers = new ConcurrentBag<Player>();
            Parallel.ForEach(players, p =>
            {
                var player = new Player();
                player.id = p[0].ToString();
                player.Salary = Convert.ToInt32(p[5].ToString());
                player.IsOnMainRoster = mainRosterIds.Contains(player.id);
                cPlayers.Add(player);
            });

            team.Players = cPlayers.ToList();
            return doSomeMath(team);
        }

        [HttpGet]
        public List<Player> Roster(string id)
        {
            var leagueID = WebConfigurationManager.AppSettings["leagueid"];
            var rosterUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + id + "/roster";
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + id + "/roster/mobile";
            //var injUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/team/" + id + "/injuries/mobile";
            var statsUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/stats/team/" + id + "/player/periodType/season/mobile";


            string rawJson = DownloadFromServer(url);
            string fullRosterJson = DownloadFromServer(rosterUrl);
            //string rawInjJson = DownloadFromServer(injUrl);
            string rawStatsJson = DownloadFromServer(statsUrl);

            JObject rosterJson = JObject.Parse(fullRosterJson);
            JObject fullJson = JObject.Parse(rawJson);
            //JObject injuryJson = JObject.Parse(rawInjJson);
            JObject statsJson = JObject.Parse(rawStatsJson);

            //var jsonRosterArray = rosterJson.Value<JArray>("playerID");
            var jsonRosterArray = rosterJson.Value<JArray>("playerID").ToObject<List<string>>();
            //var mainRosterList = jsonRosterArray.ToObject<List<string>>();

            var jsonIsCaptianArray = rosterJson.Value<JArray>("isCaptain");

            var playerStatsArray = statsJson.GetValue("s").ToObject<JObject>().GetValue("v");
            var goalieStatsArray = statsJson.GetValue("g").ToObject<JObject>().GetValue("v");

            var jsonPlayers = fullJson.GetValue("v");
            //var injuredPlayersJson = injuryJson.GetValue("v");
            //var injuredPlayers = injuredPlayersJson as JArray;
            var players = jsonPlayers as JArray;
            //var pStats = playerStatsArray as JArray;

            var roster = new ConcurrentBag<Models.Player>();
            var httpContext = System.Web.HttpContext.Current;
            Parallel.ForEach(players, p =>
            {
                System.Web.HttpContext.Current = httpContext;
                
                

                var player = FetchPlayer(p[0].ToString(), false);

                //if ContractStatus(? labeled as 'cs') is false... skip
                if (p[9].ToString() != "0")
                {
                    player.IsSigned = false;
                    //return;
                }
                else
                {
                    player.IsSigned = true;
                }

                if (playerStatsArray.Any(x => x[2].ToString() == p[0].ToString()))
                {
                    var correctStatArray = playerStatsArray.First(x => x[2].ToString() == p[0].ToString());
                    player.GetFullPlayerSeasonStats(correctStatArray as JArray, true);
                }
                else if (goalieStatsArray.Any(x => x[2].ToString() == p[0].ToString()))
                {
                    var correctStatArray = goalieStatsArray.First(x => x[2].ToString() == p[0].ToString());
                    player.GetFullPlayerSeasonStats(correctStatArray as JArray, false);
                }

                player.Potential = Convert.ToInt32(p[10].ToString());
                player.PotentialColor = Convert.ToInt32(p[13].ToString());
                player.YearsLeft = Convert.ToInt32(p[6].ToString());
                player.IsTwoWay = Convert.ToInt32(p[7].ToString()) == 0 ? false : true;

                player.Salary = Convert.ToInt32(p[5].ToString());
                player.TradeValue = Convert.ToInt32(p[8].ToString());
                player.Position = p[3].ToString();

                player.IsOnMainRoster = jsonRosterArray.Contains(player.id);
                roster.Add(player);
            });
            var rosterList = roster.ToList();
            //if (injuredPlayers != null)
            //{
            //    if (injuredPlayers.Count > 0)
            //    {
            //        foreach (var ip in injuredPlayers)
            //        {
            //            var fixedLastName = ip[1].ToString().ToLower();
            //            fixedLastName = char.ToUpper(fixedLastName[0]) + fixedLastName.Substring(1);

            //            var p = rosterList.Find(x => x.LastName == fixedLastName && x.FirstName[0] == ip[0].ToString()[0]);
            //            if (p != null)
            //            {
            //                p.IsInjured = true;
            //                p.InjuryLength = Convert.ToInt32(ip[3].ToString());
            //            }
            //        }
            //    }
            //}
            //var captainid = GetTeamCaptain(jsonRosterArray, jsonIsCaptianArray);

            //int r = 0;
            //if (Int32.TryParse(captainid, out r))
            //{
            //    var captain = (from p in rosterList
            //                   where p.id == captainid
            //                   select p).First();
            //    captain.IsCaptain = true;
            //}

            //Parallel.ForEach(jsonRosterArray, playerId =>
            //{
            //    rosterList.First(p => p.id == playerId.ToString()).IsOnMainRoster = true;
            //});
            return rosterList;
        }

        [HttpGet]
        public object Teams()
        {
            
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/standings/periodType/season/mobile";
            string rawJson = DownloadFromServer(url);
            var fullJson = JObject.Parse(rawJson);
            var teams = fullJson.GetValue("v");
            var teamsArray = teams as JArray;
            //var teamList = new ConcurrentBag<Team>();
            //Parallel.ForEach(teamsArray, team =>
            //    {
            //        var t = new Team();
            //        t.GetTeamStats(team as JArray);
            //        teamList.Add(t);
            //    });
            //return teamList.ToList();

            var teamList = new List<Team>();
            foreach (var team in teamsArray)
            {
                var t = new Team();
                t.GetTeamStats(team as JArray);
                int id = int.Parse(t.id);
                //t.SalaryCapSpent = TeamSalary(id);
                teamList.Add(t);
            }
            return teamList;

        }




        [HttpGet]
        public object TopPlayers(string token)
        {
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/stats/team/topranked/20/player/periodType/season/mobile";
            //var token = GetEASWToken();
            var topplayers = new ConcurrentBag<Player>();

            using (var wb = new WebClient())
            {
                wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
                string rawJson = wb.DownloadString(url);
                var fullJson = JObject.Parse(rawJson);
                var skaters = fullJson.GetValue("s").ToObject<JObject>().GetValue("v");
                var goalies = fullJson.GetValue("g").ToObject<JObject>().GetValue("v");
                var skaterArray = skaters as JArray;
                var goalieArray = goalies as JArray;
                Parallel.ForEach(skaterArray, skater =>
                {
                    //                    "fn", 
                    //"ln",
                    //"pid",
                    //"p",
                    //"gp",
                    //"g", 5
                    //"a",
                    //"pts",
                    //"pim",
                    //"pm",
                    //"ppg", 10
                    //"shg",
                    //"gwg",
                    //"gtg",
                    //"s",
                    //"sp", 15
                    //"fow",
                    //"fot",
                    //"fop",
                    //"h",
                    //"ga", 20
                    //"ta",
                    //"m"
                    //],
                    var player = FetchPlayer(skater[2].ToString(), true);
                    var stats = new PlayerStats();
                    stats.GamesPlayed = skater[4].Value<int>();
                    stats.Goals = skater[5].Value<int>();
                    stats.Assists = skater[6].Value<int>();
                    stats.Minutes = skater[22].Value<int>();
                    stats.Shots = skater[14].Value<int>();
                    stats.GameWinningGoals = skater[12].Value<int>();
                    stats.PlusMinus = skater[9].Value<int>();
                    stats.FaceoffPercentage = Math.Round(skater[18].Value<double>() * 100, 0);
                    stats.FaceoffsTaken = skater[17].Value<int>();
                    stats.FaceoffsWon = skater[16].Value<int>();
                    stats.Hits = skater[19].Value<int>();
                    stats.ShootingPercentage = Math.Round(skater[15].Value<double>() * 100, 0);

                    player.SingleYearStats = stats;

                    topplayers.Add(player);
                });
            }
            return topplayers.ToList();
        }

        [HttpGet]
        public object Teams(string id)
        {
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/standings/periodType/season/mobile";
            string rawJson = DownloadFromServer(url);
            var fullJson = JObject.Parse(rawJson);
            var teams = fullJson.GetValue("v");
            var teamsArray = teams as JArray;
            var correctTeam = new JArray();
            foreach (var team in teamsArray)
            {
                if (team[2].ToString() == id)
                {
                    correctTeam = team as JArray;
                    break;
                }
            }
            var returnTeam = new Team();
            returnTeam.GetTeamStats(correctTeam);

            //var MobileUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/team/" + id + "/info/mobile";
            //string mobileRawJson = DownloadFromServer(MobileUrl);
            //var mobileFullJson = JObject.Parse(mobileRawJson);

            //int[] capnums = GetSalary(mobileFullJson);
            //returnTeam.SalaryCapSpent = capnums[0];
            //returnTeam.SalaryCapTotal = capnums[1];
            //returnTeam.SalaryCapRemaining = capnums[1] - capnums[0];
            returnTeam.Players = Roster(id);
            //returnTeam.CalculateFutureSalaryCap();
            //doSomeMath(returnTeam);

            returnTeam.SalaryCapSpent = doSomeMath(returnTeam);
            return returnTeam;
        }


        private int doSomeMath(Team x)
        {
            int leagueMin = 1500000;
            int totalSalary = 0;
            foreach (var p in x.Players)
            {
                if (!p.IsOnMainRoster)
                {
                    if (p.SalaryReadable >= leagueMin)
                    {
                        totalSalary += p.SalaryReadable;
                    }
                }
                else
                {
                    totalSalary += p.SalaryReadable;
                }
            }

            return totalSalary;
        }


        [HttpGet]
        public object TeamSalaries()
        {
            var teams = new List<Team>();
            for (int i = 0; i < 30; i++)
            {
                var team = new Team();
                team.id = i.ToString();
                var MobileUrl = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/team/" + i + "/info/mobile";

                string mobileRawJson = DownloadFromServer(MobileUrl);
                var mobileFullJson = JObject.Parse(mobileRawJson);

                int[] capnums = GetSalary(mobileFullJson);
                team.SalaryCapSpent = capnums[0];
                team.SalaryCapTotal = capnums[1];
                team.SalaryCapRemaining = capnums[1] - capnums[0];
                teams.Add(team);
            }
            return teams;
        }



        [HttpGet]
        public object GetCurrentPushDate()
        {
            DateTime pushStart = new DateTime();
            DateTime pushEnd = new DateTime();
            bool getPushDate = false;
            bool pushHasBeenSet = (bool?)System.Web.HttpContext.Current.Cache["pushDateSet"] ?? false;
            if (pushHasBeenSet)
            {
                var lastUpdated = (DateTime)System.Web.HttpContext.Current.Cache["pushDateLastUpdated"];
                DateTime now = DateTime.UtcNow;
                TimeSpan span = now - lastUpdated;
                getPushDate = span.TotalHours > 12;
            }
            else
            {
                getPushDate = true;
            }

            if (getPushDate)
            {
                var leagueID = WebConfigurationManager.AppSettings["leagueid"];
                var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + leagueID + "/info";
                string rawJson = DownloadFromServer(url);
                var fullJson = JObject.Parse(rawJson);

                int pushStartYear = fullJson.Value<int>("tickStartYear");
                int pushStartMonth = fullJson.Value<int>("tickStartMonth");
                int pushStartDay = fullJson.Value<int>("tickStartDay");

                int pushEndYear = fullJson.Value<int>("tickEndYear");
                int pushEndMonth = fullJson.Value<int>("tickEndMonth");
                int pushEndDay = fullJson.Value<int>("tickEndDay");

                pushEndMonth++;
                pushEndDay++;
                pushStartMonth++;
                pushStartDay++;

                pushStart = new DateTime(pushStartYear, pushStartMonth, pushStartDay);
                pushEnd = new DateTime(pushEndYear, pushEndMonth, pushEndDay);

                //pushStart = new DateTime(fullJson.Value<int>("tickStartYear"),
                //                         fullJson.Value<int>("tickStartMonth"),
                //                         fullJson.Value<int>("tickStartDay"));

                //pushEnd = new DateTime(fullJson.Value<int>("tickEndYear"),
                //                           fullJson.Value<int>("tickEndMonth"),
                //                           fullJson.Value<int>("tickEndDay"));
                //because ea dates are 0 indexed
                //pushEnd = pushEnd.AddDays(1);
                //pushEnd = pushEnd.AddMonths(1);

                //pushStart = pushStart.AddMonths(1);
                //pushStart = pushStart.AddDays(1);

                System.Web.HttpContext.Current.Cache.Insert("pushDateStart", pushStart);
                System.Web.HttpContext.Current.Cache.Insert("pushDateEnd", pushEnd);
                System.Web.HttpContext.Current.Cache.Insert("pushDateSet", true);
                System.Web.HttpContext.Current.Cache.Insert("pushDateLastUpdated", DateTime.UtcNow);
            }

            else
            {
                pushStart = (DateTime)System.Web.HttpContext.Current.Cache["pushDateStart"];
                pushEnd = (DateTime)System.Web.HttpContext.Current.Cache["pushDateEnd"];
            }

            return new JObject(
            new JProperty("pushStartDay",
                new JValue(pushStart.Day)),
            new JProperty("pushStartMonth",
                new JValue(pushStart.Month)),
            new JProperty("pushStartYear",
                new JValue(pushStart.Year)),
            new JProperty("pushEndDay",
                new JValue(pushEnd.Day)),
            new JProperty("pushEndMonth",
                new JValue(pushEnd.Month)),
            new JProperty("pushEndYear",
                new JValue(pushEnd.Year)));

        }

        private int[] GetSalary(JObject fullJson)
        {
            int scm = Convert.ToInt32(fullJson.GetValue("scm").ToString());
            int scs = Convert.ToInt32(fullJson.GetValue("scs").ToString());
            int scc = Convert.ToInt32(fullJson.GetValue("scc").ToString());

            int spent = scm + scc;
            int cap = spent + scs;

            int[] capNums = new int[2];
            capNums[0] = spent;
            capNums[1] = cap;
            return capNums;
        }



        private List<Game> GetSchedule()
        {
            var cachedSchedule = (List<Game>)System.Web.HttpContext.Current.Cache["fullSchedule"];
            if (cachedSchedule == null)
            {
                var league = WebConfigurationManager.AppSettings["leagueid"];
                var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + league + "/schedule/list";
                string rawJson = DownloadFromServer(url);
                var fullJson = JObject.Parse(rawJson);
                var sched = fullJson.GetValue("schedule") as JArray;
                List<Game> games = new List<Game>();
                if (sched != null)
                {
                    foreach (var g in sched)
                    {
                        JObject jGame = g as JObject;
                        Game game = new Game();
                        game.AwayTeam = jGame.GetValue("awayTeamId").ToString();
                        game.HomeTeam = jGame.GetValue("homeTeamId").ToString();
                        game.Month = Convert.ToInt32(jGame.GetValue("month").ToString());
                        //game.Round = Convert.ToInt32(jGame.GetValue("round").ToString());
                        game.Year = Convert.ToInt32(jGame.GetValue("year").ToString());
                        game.Day = Convert.ToInt32(jGame.GetValue("day").ToString());
                        game.GameID = Convert.ToInt32(jGame.GetValue("gameId").ToString());
                        game.IsEstimatedNextPush = false;
                        game.IsCurrentPush = false;

                        //because ea months / days are 0 indexed. 
                        game.Month++;
                        game.Day++;

                        game.GameDay = new DateTime(game.Year, game.Month, game.Day);

                        games.Add(game);
                    }

                }
                System.Web.HttpContext.Current.Cache.Insert("fullSchedule", games);
                cachedSchedule = games;
            }
            return cachedSchedule;


            //awayTeamId: 3,
            //homeTeamId: 27,
            //league: 0,
            //round: 0,
            //status: 0,
            //competitionId: 
            //gameId: 1149,
            //day: 29,
            //month: 2,
            //year: 2014
        }

        public List<Game> GetSchedule(string id)
        {
            List<Game> games = GetSchedule();
            var pushStart = (DateTime)System.Web.HttpContext.Current.Cache["pushDateStart"];
            var pushEnd = (DateTime)System.Web.HttpContext.Current.Cache["pushDateEnd"];


            games = games.Where(x => x.AwayTeam == id || x.HomeTeam == id)
                         .Where(g => g.GameDay >= pushStart).ToList();

            foreach (var game in games)
            {
                TimeSpan span = game.GameDay - pushEnd;
                game.IsCurrentPush = game.GameDay >= pushStart && game.GameDay <= pushEnd;
                game.IsHomeTeam = game.HomeTeam == id;

                if (!game.IsCurrentPush)
                {
                    game.IsEstimatedNextPush = span.TotalDays < 14;
                }

                if (game.IsHomeTeam)
                {
                    game.OpposingTeam = game.AwayTeam;
                }
                else
                {
                    game.OpposingTeam = game.HomeTeam;
                }
            }
            return games.OrderBy(g => g.GameDay).ToList();
        }

        private string GetEASWToken()
        {
            using (var wb = new WebClient())
            {
                ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;

                var data = new NameValueCollection();
                data["email"] = WebConfigurationManager.AppSettings["email"];
                data["password"] = WebConfigurationManager.AppSettings["password"];
                data["nucleus_persona"] = WebConfigurationManager.AppSettings["nucleusid"];

                var url = "https://easw.easports.com:8098/v2/authenticationNucleusPersona";

                var response = wb.UploadValues(url, "POST", data);
                var token = wb.ResponseHeaders.Get("EASW-Token");
                return token;
            }
        }

        public string GetToken(string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return GetEASWToken();
            }
            else if (TokenIsValid(token))
            {
                return token;
            }
            else
            {
                return GetEASWToken();
            }

        }

        private bool TokenIsValid(string token)
        {
            var url = "https://nhl.service.easports.com/nhl14_hm/2014/protected/competition/" + WebConfigurationManager.AppSettings["leagueid"] + "/info";
            var wb = new WebClient();
            wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
            string rawJson = "";
            try
            {
                rawJson = wb.DownloadString(url);
            }
            catch (WebException ex)
            {
                return false;
            }
            return true;
        }

        [HttpGet]
        public List<PartialPlayer> PlayerSearch(string query)
        {

            var stored = (bool?)System.Web.HttpContext.Current.Cache["PlayerListStored"] ?? false;
            var playerList = new List<PartialPlayer>();
            if (stored)
            {
                playerList = (List<PartialPlayer>)System.Web.HttpContext.Current.Cache["SearchPlayerList"];
            }
            else
            {
                string physialpath = Path.Combine(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath, "Scripts", "static", "players.json");
                var url = new Uri(physialpath);
                string playersList;
                using (var wc = new WebClient())
                {
                    playersList = wc.DownloadString(url);
                }
                var json = JArray.Parse(playersList);
                foreach (var e in json)
                {
                    var partialPlayer = new PartialPlayer(e.Value<string>("id"),
                                                          e.Value<int>("Overall"),
                                                          e.Value<string>("FirstName"),
                                                          e.Value<string>("LastName"),
                                                          e.Value<string>("Position"),
                                                          e.Value<int>("TradeValue"),
                                                          e.Value<double>("Potential"),
                                                          e.Value<string>("PotentialColorString"),
                                                          e.Value<int>("PotentialColor"));
                    playerList.Add(partialPlayer);
                }

                System.Web.HttpContext.Current.Cache.Insert("SearchPlayerList", playerList);
                System.Web.HttpContext.Current.Cache.Insert("PlayerListStored", true);
            }

            query = query.ToUpper();
            return playerList.Where(p => p.LastName.ToUpper().StartsWith(query) ||
                                         p.FirstName.ToUpper().StartsWith(query))
                                         .OrderBy(k => k.Overall)
                                         .Reverse()
                                         .Take(10)
                                         .ToList();
        }

        [HttpGet]
        public List<TweetinviCore.Interfaces.ITweet> GetTweets(string username)
        {
            try
            {

                var cc = Tweetinvi.CredentialsCreator.GenerateApplicationCredentials(WebConfigurationManager.AppSettings["token_ConsumerKey"],
                                                                                     WebConfigurationManager.AppSettings["token_ConsumerSecret"]);      
                //var token = new TwitterToken.Token(
                //    WebConfigurationManager.AppSettings["token_AccessToken"],
                //    WebConfigurationManager.AppSettings["token_AccessTokenSecret"],
                //    WebConfigurationManager.AppSettings["token_ConsumerKey"],
                //    WebConfigurationManager.AppSettings["token_ConsumerSecret"]);

                var user = Tweetinvi.User.GetUserFromScreenName(username);
                var twts = user.Timeline;
                //TweetinviCore.Interfaces.IUser u = user;
                //u.PopulateUser(token);
                //var tweets = user.GetUserTimeline(false, token);
                var lobTweets = twts.Where(tweet => tweet.Hashtags.Any(tag => tag.Text.ToLower() == "lobnhl")).Take(5);
                return lobTweets.ToList();
                
            }
            catch (Exception ex)
            {
                var tweet = Tweetinvi.Tweet.CreateTweet(string.Format("Error getting Tweets: {0}", ex.Message));
                var list = new List<TweetinviCore.Interfaces.ITweet>();
                list.Add(tweet);
                return list;
            }
        }

    }
}
