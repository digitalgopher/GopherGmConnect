using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Collections.Specialized;
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

        //
        // GET api/gopher
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/gopher/5
        public string Get(int id)
        {
            return "value";
        }

        private Player FetchPlayer(string id, string token, bool fullInfo, bool isNewNHL = false)
        {
            using (var wb = new WebClient())
            {
                //var wb = new WebClient();
                wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
                var playerID = id;
                var playerurl = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/player/" + playerID + "/info/mobile";
                ServicePointManager.ServerCertificateValidationCallback =((sender, certificate, chain, sslPolicyErrors) => true);
                if (isNewNHL)
                {
                    playerurl = "https://nhl.service.easports.com/nhl14_hm/2013/protected/competition/10562/player/" + playerID + "/info/mobile";

                }

                var playerRawJson = wb.DownloadString(playerurl);
                JObject playerJson = JObject.Parse(playerRawJson);
                var aPlayer = new Player();

                if (fullInfo)
                {
                    var playerfullinfo = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/player/" + playerID + "/info";
                    if (isNewNHL)
                    {
                        playerfullinfo = "https://nhl.service.easports.com/nhl14_hm/2013/protected/competition/10562/player/" + playerID + "/info";

                    }
                    var fullplayerrawjson = wb.DownloadString(playerfullinfo);
                    JObject fullinfojson = JObject.Parse(fullplayerrawjson);
                    JObject bioJson = fullinfojson.GetValue("bio") as JObject;

                    aPlayer = CreatePlayer(playerJson, bioJson, isNewNHL);
                }
                else
                {
                    aPlayer = CreatePlayerSmall(playerJson);
                }
                aPlayer.id = playerID;
                return aPlayer;
            }
        }

        private void GetPlayerStats(Player player, JObject mobileInfo)
        {

            var statsArray = mobileInfo.GetValue("ss") as JArray;
            if (statsArray == null)
            {
                return;
            }
            foreach (var statyear in statsArray)
            {
                var stats = statyear as JObject;
                var playerstats = new PlayerStats();
                playerstats.Year = Convert.ToInt32(stats.GetValue("y").ToString());
                playerstats.Goals = Convert.ToInt32(stats.GetValue("g").ToString());
                playerstats.Assists = Convert.ToInt32(stats.GetValue("a").ToString());
                playerstats.GamesPlayed = Convert.ToInt32(stats.GetValue("gp").ToString());
                player.PlayerStats.Add(playerstats);
            }
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
        public object Players(string id, string token, bool isNewNHL = false)
        {
            //var token = GetEASWToken();
            return FetchPlayer(id, token, true, isNewNHL);
        }



        [HttpGet]
        public object GetLines(string id, string token)
        {
            //var token = GetEASWToken();
            var wb = new WebClient();
            wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
            var teamId = id;
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + teamId + "/roster";
            string dlJson = wb.DownloadString(url);
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








            //var lineCombos = new JObject(
            //    new JProperty("lines",
            //        new JArray(
            //            new JObject(
            //        new JProperty("name", "1st Line"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("C", roster.GetValue("l1c").ToString()),
            //                new JProperty("LW", roster.GetValue("l1lw").ToString()),
            //                new JProperty("RW", roster.GetValue("l1rw").ToString())))),
            //                new JObject(
            //        new JProperty("name", "2nd Line"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("C", roster.GetValue("l2c").ToString()),
            //                new JProperty("LW", roster.GetValue("l2lw").ToString()),
            //                new JProperty("RW", roster.GetValue("l2rw").ToString())))),
            //                new JObject(
            //        new JProperty("name", "3rd Line"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("C", roster.GetValue("l3c").ToString()),
            //                new JProperty("LW", roster.GetValue("l3lw").ToString()),
            //                new JProperty("RW", roster.GetValue("l3rw").ToString())))),
            //                new JObject(
            //        new JProperty("name", "4th Line"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("C", roster.GetValue("l4c").ToString()),
            //                new JProperty("LW", roster.GetValue("l4lw").ToString()),
            //                new JProperty("RW", roster.GetValue("l4rw").ToString())))),
            //                new JObject(
            //        new JProperty("name", "Defense Pair 1"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("LD", roster.GetValue("l1ld").ToString()),
            //                new JProperty("RD", roster.GetValue("l1rd").ToString())))),
            //                new JObject(
            //        new JProperty("name", "Defense Pair 2"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("LD", roster.GetValue("l2ld").ToString()),
            //                new JProperty("RD", roster.GetValue("l2rd").ToString())))),
            //                new JObject(
            //        new JProperty("name", "Defense Pair 3"),
            //        new JProperty("players",
            //            new JObject(
            //                new JProperty("LD", roster.GetValue("l3ld").ToString()),
            //                new JProperty("RD", roster.GetValue("l3rd").ToString())))),
            //                new JObject(
            //        new JProperty("name", "Goalies"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("G1", roster.GetValue("g1").ToString()),
            //                    new JProperty("G2", roster.GetValue("g2").ToString())))),
            //                    new JObject(
            //        new JProperty("name", "3 Man PK 1"),
            //            new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pk3_1c").ToString()),
            //                    new JProperty("LD", roster.GetValue("pk3_1ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pk3_1rd").ToString())))),
            //                    new JObject(
            //        new JProperty("name", "3 Man PK 2"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pk3_2c").ToString()),
            //                    new JProperty("LD", roster.GetValue("pk3_2ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pk3_2rd").ToString())))),
            //                    new JObject(
            //                    new JProperty("name", "4 Man PK 1"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pk4_1c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pk4_1lw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pk4_1ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pk4_1rd").ToString())))),
            //                    new JObject(
            //        new JProperty("name", "4 Man PK 2"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pk4_2c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pk4_2lw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pk4_2ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pk4_2rd").ToString())))),
            //                    new JObject(
            //                        new JProperty("name", "Powerplay 1"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pp1c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pp1lw").ToString()),
            //                    new JProperty("RW", roster.GetValue("pp1rw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pp1ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pp1rd").ToString())))),
            //                    new JObject(
            //                        new JProperty("name", "Powerplay 2"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pp2c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pp2lw").ToString()),
            //                    new JProperty("RW", roster.GetValue("pp2rw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pp2ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pp2rd").ToString())))),
            //                    new JObject(
            //                        new JProperty("name", "4 Man PP 1"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pp4_1c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pp4_1lw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pp4_1ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pp4_1rd").ToString())))),
            //                    new JObject(
            //                        new JProperty("name", "4 Man PP 2"),
            //        new JProperty("players",
            //                new JObject(
            //                    new JProperty("C", roster.GetValue("pp4_2c").ToString()),
            //                    new JProperty("LW", roster.GetValue("pp4_2lw").ToString()),
            //                    new JProperty("LD", roster.GetValue("pp4_2ld").ToString()),
            //                    new JProperty("RD", roster.GetValue("pp4_2rd").ToString())))))));
            //return lineCombos;
            //pp4_1c: 564,
            //pp4_1ld: 1373,
            //pp4_1lw: 2485,
            //pp4_1rd: 972,

        }

        //        {
        //  "k": [
        //    "fn",
        //    "ln",
        //    "p",
        //    "dl",
        //    "t",
        //    "pb"
        //  ],
        //  "v": [
        //    [
        //      "H.",
        //      "SEDIN",
        //      "C",
        //      24,
        //      6,
        //      0
        //    ]
        //  ]
        //}

        [HttpGet]
        public List<Player> Roster(string id, string token)
        {
            //var token = GetEASWToken();
            using (var wb = new WebClient())
            {
                ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
                wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
                var rosterUrl = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + id + "/roster";
                var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + id + "/roster/mobile";
                var injUrl = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + id + "/injuries/mobile";


                string rawJson = wb.DownloadString(url);
                string fullRosterJson = wb.DownloadString(rosterUrl);
                string rawInjJson = wb.DownloadString(injUrl);
                JObject rosterJson = JObject.Parse(fullRosterJson);
                JObject fullJson = JObject.Parse(rawJson);
                JObject injuryJson = JObject.Parse(rawInjJson);

                var jsonRosterArray = rosterJson.Value<JArray>("playerID");
                var jsonIsCaptianArray = rosterJson.Value<JArray>("isCaptain");

                var jsonPlayers = fullJson.GetValue("v");
                var injuredPlayersJson = injuryJson.GetValue("v");
                var injuredPlayers = injuredPlayersJson as JArray;
                var players = jsonPlayers as JArray;
                var counter = 0;
                //var roster = new List<Models.PartialPlayer>();
                //var roster = new List<Models.Player>();
                var roster = new ConcurrentBag<Models.Player>();
                var newToken = GetEASWToken(); //becuase... i was getting 502
                Parallel.ForEach(players, p =>
                {
                    //if ContractStatus(? labeled as 'cs') is false... skip
                    if (p[9].ToString() != "0")
                    {
                        return;
                        // continue;
                    }
                    counter++;

                    //var partial = new Models.PartialPlayer();
                    //partial.id = p[0].ToString();
                    //partial.FirstName = p[1].ToString();
                    //partial.LastName = p[2].ToString().ToLower();
                    //partial.LastName = char.ToUpper(partial.LastName[0]) + partial.LastName.Substring(1);


                    //partial.Position = p[3].ToString();
                    //partial.TradeValue = Convert.ToInt32(p[8].ToString());
                    //partial.Age = Convert.ToInt32(p[4].ToString());
                    //partial.Salary = Convert.ToInt32(p[5].ToString());
                    //partial.YearsLeft = Convert.ToInt32(p[6].ToString());
                    //partial.Potential = Convert.ToInt32(p[10].ToString());
                    //partial.PotentialColor = Convert.ToInt32(p[13].ToString());
                    //partial.IsTwoWay = p[7].ToString() == "0" ? false : true;

                    //roster.Add(partial);

                    var player = new Models.Player();
                    player = FetchPlayer(p[0].ToString(), newToken, false) as Models.Player;
                    player.Potential = Convert.ToInt32(p[10].ToString());
                    player.PotentialColor = Convert.ToInt32(p[13].ToString());
                    player.YearsLeft = Convert.ToInt32(p[6].ToString());

                    player.Salary = Convert.ToInt32(p[5].ToString());
                    player.TradeValue = Convert.ToInt32(p[8].ToString());
                    player.Position = p[3].ToString();
                    roster.Add(player);



                    //var playerID = p[0].ToString();
                    //string dlJson = wb.DownloadString("http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/player/" + playerID + "/info/mobile");
                    //JObject playerJson = JObject.Parse(dlJson);
                    //roster.Add(CreatePlayer(playerJson, p));
                });
                var rosterList = roster.ToList();
                if (injuredPlayers != null)
                {
                    if (injuredPlayers.Count > 0)
                    {
                        foreach (var ip in injuredPlayers)
                        {
                            var fixedLastName = ip[1].ToString().ToLower();
                            fixedLastName = char.ToUpper(fixedLastName[0]) + fixedLastName.Substring(1);

                            var p = rosterList.Find(x => x.LastName == fixedLastName && x.FirstName[0] == ip[0].ToString()[0]);
                            if (p != null)
                            {
                                p.IsInjured = true;
                                p.InjuryLength = Convert.ToInt32(ip[3].ToString());
                            }
                        }
                    }
                }
                var captainid = GetTeamCaptain(jsonRosterArray, jsonIsCaptianArray);
                
                int r = 0;
                if (Int32.TryParse(captainid, out r))
                {
                    var captain = (from p in rosterList
                                   where p.id == captainid
                                   select p).First();
                    captain.IsCaptain = true;
                }

                Parallel.ForEach(jsonRosterArray, playerId =>
                {
                    rosterList.First(p => p.id == playerId.ToString() ).IsOnMainRoster = true;
                });


                return rosterList;
            }
        }

        private Player GetTopRatedPlayer(List<Player> roster)
        {
            var bestOv = roster.Max(x => x.Overall);
            return roster.First(p => p.Overall == bestOv);           
        }

        [HttpGet]
        public object Teams(string token)
        {

            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/standings/periodType/season/mobile";
            //var token = GetEASWToken();
            using (var wb = new WebClient())
            {
                wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
                ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
                string rawJson = wb.DownloadString(url);
                var fullJson = JObject.Parse(rawJson);
                var teams = fullJson.GetValue("v");
                var teamsArray = teams as JArray;
                var teamList = new ConcurrentBag<Team>();
                Parallel.ForEach(teamsArray, team =>
                    {
                        var t = new Team();
                        GetTeamStats(t, team as JArray);
                        //GetBasicTeamInfo(token, t);
                        teamList.Add(t);
                    });
                return teamList.ToList();
            }
        }

        //private void GetBasicTeamInfo(string token, Team team)
        //{
        //    using (var client = new WebClient())
        //    {
        //        client.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
        //        var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + team.id + "/info";
        //        var rawJson = client.DownloadString(url);
        //        var teamJson = JObject.Parse(rawJson);
        //        team.abr = teamJson.Value<string>("artabbr");
        //        team.city = teamJson.Value<string>("cityname");
        //        team.fullName = teamJson.Value<string>("fullname");
        //    }
        //}

        [HttpGet]
        public object TopPlayers(string token)
        {
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/stats/team/topranked/20/player/periodType/season/mobile";
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
                    var player = FetchPlayer(skater[2].ToString(), token, true, false);
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
        public object Teams(string id, string token, bool iwNew = false)
        {
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/standings/periodType/season/mobile";
            //var token = GetEASWToken();
            var wb = new WebClient();
            wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
            string rawJson = wb.DownloadString(url);
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
            GetTeamStats(returnTeam, correctTeam);

            var MobileUrl = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + id + "/info/mobile";
            //var token = GetEASWToken();
            string mobileRawJson = wb.DownloadString(MobileUrl);
            var mobileFullJson = JObject.Parse(mobileRawJson);
            //returnTeam.abr = mobileFullJson.Value<string>("a");

            int[] capnums = GetSalary(mobileFullJson);
            returnTeam.SalaryCapSpent = capnums[0];
            returnTeam.SalaryCapTotal = capnums[1];
            returnTeam.SalaryCapRemaining = capnums[1] - capnums[0];
            returnTeam.Players = Roster(id, token);
            returnTeam.CalculateFutureSalaryCap();
            return returnTeam;
        }

        [HttpGet]
        public object GetCurrentPushDate(string token)
        {
            //var token = GetEASWToken();
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/info";
            var wb = new WebClient();
            wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
            string rawJson = wb.DownloadString(url);
            var fullJson = JObject.Parse(rawJson);
            return new JObject(
                new JProperty("pushStartDay",
                    new JValue(fullJson.Value<int>("tickStartDay"))),
                new JProperty("pushStartMonth",
                    new JValue(fullJson.Value<int>("tickStartMonth"))),
                new JProperty("pushStartYear",
                    new JValue(fullJson.Value<int>("tickStartYear"))),
                new JProperty("pushEndDay",
                    new JValue(fullJson.Value<int>("tickEndDay"))),
                new JProperty("pushEndMonth",
                    new JValue(fullJson.Value<int>("tickEndMonth"))),
                new JProperty("pushEndYear",
                    new JValue(fullJson.Value<int>("tickEndYear"))));

            //            "tickStartDay": 28,
            //"tickStartMonth": 11,
            //"tickStartYear": 2014,
            //"tickEndDay": 10,
            //"tickEndMonth": 0,
            //"tickEndYear": 2015,

        }

        [HttpGet]
        public List<Player> GetPlayersTest()
        {
            var p1 = new Player();
            p1.id = "90";
            p1.Overall = 99;
            p1.Position = "C";
            p1.LastName = "Zetterberg";
            p1.FirstName = "Henrik";


            var p2 = new Player();
            p2.id = "77";
            p2.Overall = 100;
            p2.Position = "LW";
            p2.LastName = "Sedin";
            p2.FirstName = "Daniel";

            var roster = new List<Player>();
            roster.Add(p1);
            roster.Add(p2);
            return roster;
        }

        [HttpGet]
        public Team GetTeamTest()
        {
            var t = new Team();
            t.id = "10";
            t.Wins = 33;
            t.Losses = 44;
            t.OvertimeLosses = 22;
            t.Points = 399;
            return t;
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

        private void GetTeamStats(Team team, JArray teamToken)
        {
            //"cg" - conference 0
            //"dg" - division
            //"tid" - team id
            //"gp" - games played
            //"w" - wins
            //"l" - loss 5 
            //"otl" overtime loss
            //"row" regulation overtime wins
            //"gf" goals for
            //"ga" goals against
            //"gfpg" - goals for per game 10
            //"gapg" - against per game
            //"ppgf" pp goals for
            //"ppt" pp times
            //"ppga" pp goals against
            //"ppp", pp % 15
            //"shgf" sh goals for
            //"shga" sh goals against
            //"sht" times short handed
            //"pkp" pk %
            //"hr" home record 20
            //"ar", away record
            //"ltr", last ten record
            //"p", points 
            //"wp" ?? 24
            //],
            team.id = teamToken[2].ToString();
            team.Conference = Convert.ToInt32(teamToken[0].ToString());
            team.Division = Convert.ToInt32(teamToken[1].ToString());
            team.Wins = Convert.ToInt32(teamToken[4].ToString());
            team.Losses = Convert.ToInt32(teamToken[5].ToString());
            team.Points = Convert.ToInt32(teamToken[23].ToString());
            team.GamesPlayed = Convert.ToInt32(teamToken[3].ToString());
            team.OvertimeLosses = Convert.ToInt32(teamToken[6].ToString());
            team.RegulationOvertimeWins = Convert.ToInt32(teamToken[7].ToString());

            team.PowerPlayPercent = Convert.ToDouble(teamToken[15].ToString());
            team.PenaltyKillPercent = Convert.ToDouble(teamToken[19].ToString());
            team.GoalsAgainst = Convert.ToInt32(teamToken[9].ToString());
            team.GoalsFor = Convert.ToInt32(teamToken[8].ToString());

        }

        private List<Game> GetSchedule()
        {
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/schedule/list/tick";
            var token = GetEASWToken();
            var wb = new WebClient();
            wb.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + token);
            string rawJson = wb.DownloadString(url);
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
                    game.Round = Convert.ToInt32(jGame.GetValue("round").ToString());
                    game.Year = Convert.ToInt32(jGame.GetValue("year").ToString());
                    game.Day = Convert.ToInt32(jGame.GetValue("day").ToString());
                    game.GameID = Convert.ToInt32(jGame.GetValue("gameId").ToString());
                    games.Add(game);
                }

            }
            return games;


            //awayTeamId: 3,
            //homeTeamId: 27,
            //league: 0,
            //round: 0,
            //status: 0,
            //competitionId: 29169,
            //gameId: 1149,
            //day: 29,
            //month: 2,
            //year: 2014
        }

        public List<Game> GetSchedule(string id)
        {
            List<Game> games = GetSchedule();
            games = games.FindAll(x => x.AwayTeam == id || x.HomeTeam == id);
            return games;
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
            var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/info";
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

        //private Models.Player CreatePlayerWithoutStats(JObject mobilePlayerInfo, JObject playerInfo)
        //{

        //}

        private Models.Player CreatePlayer(JObject mobilePlayerInfo, JObject playerInfo, bool isNewNHL = false)
        {
            Models.Player player = new Models.Player();
            player.id = playerInfo.GetValue("playerId").ToString();
            player.Salary = Convert.ToInt32(playerInfo.GetValue("contCurrVal").ToString());
            player.YearsLeft = Convert.ToInt32(playerInfo.GetValue("contCurrLen").ToString());
            player.IsTwoWay = Convert.ToInt32(playerInfo.GetValue("contCurr2Way").ToString()) == 0 ? false : true;
            player.TradeValue = Convert.ToInt32(playerInfo.GetValue("tradeValue").ToString());
            player.Team = Convert.ToInt32(playerInfo.GetValue("proTeamID").ToString());
            player.TeamId = Convert.ToInt32(playerInfo.GetValue("proTeamID").ToString());
            player.Jersey = Convert.ToInt32(playerInfo.GetValue("jerseyorg").ToString());
            player.CountryCode = Convert.ToInt32(playerInfo.GetValue("intlCountry").ToString());
            player.DraftPosition = Convert.ToInt32(playerInfo.GetValue("draftPosition").ToString());
            player.DraftRound = Convert.ToInt32(playerInfo.GetValue("draftRound").ToString());
            player.DraftTeam = Convert.ToInt32(playerInfo.GetValue("draftTeam").ToString());
            player.BirthPlace = playerInfo.GetValue("birthplace").ToString();

            //54 == ea's crazy enum scheme base. 
            player.Height = playerInfo.Value<int>("height") + 54;

            //120 == ea's crazy enum scheme for weight. 
            player.Weight = playerInfo.Value<int>("Weight") + 120;

            switch (playerInfo.Value<int>("Position"))
            {
                case 0:
                    player.Position = "C";
                    break;
                case 1:
                    player.Position = "LW";
                    break;
                case 2:
                    player.Position = "RW";
                    break;
                case 3:
                    player.Position = "D";
                    break;
                case 4:
                    player.Position = "G";
                    break;
                default:
                    player.Position = "OMGNOTHING";
                    break;
            }


            var artid = Convert.ToInt32(playerInfo.GetValue("playerArtID").ToString());
            player.PlayerArtID = artid;
            if (isNewNHL)
            {
                player.ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/14/GMC/0.0/playerheads/p" + artid + "@2x.png";

            }
            else
            {
                player.ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/0.0/playerheads/" + artid + "@2x.png";

            }

            player.Overall = Convert.ToInt32(mobilePlayerInfo.GetValue("o").ToString());
            player.Potential = Convert.ToInt32(mobilePlayerInfo.GetValue("pp").ToString());
            player.PotentialColor = Convert.ToInt32(mobilePlayerInfo.GetValue("po").ToString());
            player.Aid = Convert.ToInt32(mobilePlayerInfo.GetValue("aid").ToString());

            JObject pBio = mobilePlayerInfo.GetValue("pb") as JObject;

            player.FirstName = pBio.GetValue("fn").ToString().ToLower();
            player.LastName = pBio.GetValue("ln").ToString().ToLower();

            player.FirstName = char.ToUpper(player.FirstName[0]) + player.FirstName.Substring(1);
            player.LastName = char.ToUpper(player.LastName[0]) + player.LastName.Substring(1);

            player.Position = pBio.GetValue("p").ToString();
            player.Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
            player.Height = Convert.ToInt32(pBio.GetValue("h").ToString());
            player.Age = Convert.ToInt32(pBio.GetValue("a").ToString());
            player.BirthPlace = pBio.GetValue("bp").ToString();
            player.DraftRound = Convert.ToInt32(pBio.GetValue("dr").ToString());
            player.DraftTeam = Convert.ToInt32(pBio.GetValue("dt").ToString());
            player.DraftPosition = Convert.ToInt32(pBio.GetValue("dp").ToString());
            player.Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());

            PopulatePlayerRatings(player, mobilePlayerInfo);
            GetPlayerStats(player, mobilePlayerInfo);
            return player;
        }

        private void PopulatePlayerRatings(Player player, JObject mobilePlayerInfo)
        {
            JObject pStats = mobilePlayerInfo.GetValue("pr") as JObject;
            if (player.Position != "G")
            {
                player.PlayerRatings.Aggressiveness = pStats.Value<int>("a");
                //player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("a").ToString());
                player.PlayerRatings.Strength = Int32.Parse(pStats.GetValue("st").ToString());
                player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("ag").ToString());
                player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("du").ToString());
                player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("e").ToString());
                player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("s").ToString());
                player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("po").ToString());
                player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("p").ToString());
                player.PlayerRatings.Deking = Convert.ToInt32(pStats.GetValue("d").ToString());
                player.PlayerRatings.HandEye = Convert.ToInt32(pStats.GetValue("he").ToString());
                player.PlayerRatings.OffAwareness = Convert.ToInt32(pStats.GetValue("oa").ToString());
                player.PlayerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("pc").ToString());
                player.PlayerRatings.SlapShotAccuracy = Convert.ToInt32(pStats.GetValue("sa").ToString());
                player.PlayerRatings.SlapShotPower = Convert.ToInt32(pStats.GetValue("ssp").ToString());
                player.PlayerRatings.WristShotAccuracy = Convert.ToInt32(pStats.GetValue("wa").ToString());
                player.PlayerRatings.WristShotPower = Convert.ToInt32(pStats.GetValue("wsp").ToString());
                player.PlayerRatings.BodyChecking = Convert.ToInt32(pStats.GetValue("bc").ToString());
                player.PlayerRatings.DefAwareness = Convert.ToInt32(pStats.GetValue("da").ToString());
                player.PlayerRatings.Discipline = Convert.ToInt32(pStats.GetValue("di").ToString());
                player.PlayerRatings.Faceoffs = Convert.ToInt32(pStats.GetValue("fo").ToString());
                player.PlayerRatings.Fighting = Convert.ToInt32(pStats.GetValue("f").ToString());
                player.PlayerRatings.ShotBlocking = Convert.ToInt32(pStats.GetValue("sb").ToString());
                player.PlayerRatings.Acceleration = Convert.ToInt32(pStats.GetValue("ac").ToString());
                player.PlayerRatings.StickChecking = Convert.ToInt32(pStats.GetValue("sc").ToString());
                player.PlayerRatings.Balance = Convert.ToInt32(pStats.GetValue("b").ToString());
            }
            else
            {
                player.PlayerRatings.PokeCheck = Convert.ToInt32(pStats.GetValue("gpc").ToString());
                player.PlayerRatings.Breakaways = Convert.ToInt32(pStats.GetValue("gb").ToString());
                player.PlayerRatings.FiveHole = Convert.ToInt32(pStats.GetValue("g5h").ToString());
                player.PlayerRatings.GloveHigh = Convert.ToInt32(pStats.GetValue("ggh").ToString());
                player.PlayerRatings.GloveLow = Convert.ToInt32(pStats.GetValue("ggl").ToString());
                player.PlayerRatings.StickHigh = Convert.ToInt32(pStats.GetValue("gsh").ToString());
                player.PlayerRatings.StickLow = Convert.ToInt32(pStats.GetValue("gsl").ToString());
                player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("gp").ToString());
                player.PlayerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("gpc").ToString());
                player.PlayerRatings.PuckPlayingFreq = Convert.ToInt32(pStats.GetValue("gppf").ToString());
                player.PlayerRatings.ReboundControl = Convert.ToInt32(pStats.GetValue("grc").ToString());
                player.PlayerRatings.ShotRecovery = Convert.ToInt32(pStats.GetValue("gsr").ToString());
                player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("gag").ToString());
                player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("gagi").ToString());
                player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("gd").ToString());
                player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("gs").ToString());
                player.PlayerRatings.Vision = Convert.ToInt32(pStats.GetValue("gv").ToString());
                player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("gpo").ToString());
                player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("ge").ToString());
                player.PlayerRatings.Angles = Convert.ToInt32(pStats.GetValue("ga").ToString());
            }
        }

        private Player CreatePlayerSmall(JObject mobilePlayerInfo)
        {
            Models.Player player = new Models.Player();
            //player.id = playerInfo.GetValue("playerId").ToString();
            //player.Salary = Convert.ToInt32(playerInfo.GetValue("contCurrVal").ToString());
            //player.YearsLeft = Convert.ToInt32(playerInfo.GetValue("contCurrLen").ToString());
            //player.IsTwoWay = Convert.ToInt32(playerInfo.GetValue("contCurr2Way").ToString()) == 0 ? false : true;
            //player.TradeValue = Convert.ToInt32(playerInfo.GetValue("tradeValue").ToString());
            //player.Team = Convert.ToInt32(playerInfo.GetValue("proTeamID").ToString());
            //player.Jersey = Convert.ToInt32(playerInfo.GetValue("jerseyorg").ToString());
            //player.CountryCode = Convert.ToInt32(playerInfo.GetValue("intlCountry").ToString());
            //player.DraftPosition = Convert.ToInt32(playerInfo.GetValue("draftPosition").ToString());
            //player.DraftRound = Convert.ToInt32(playerInfo.GetValue("draftRound").ToString());
            //player.DraftTeam = Convert.ToInt32(playerInfo.GetValue("draftTeam").ToString());
            //player.BirthPlace = playerInfo.GetValue("birthplace").ToString();


            //var artid = Convert.ToInt32(playerInfo.GetValue("playerArtID").ToString());
            //player.PlayerArtID = artid;
            //player.ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/0.0/playerheads/" + artid + "@2x.png";

            player.Overall = Convert.ToInt32(mobilePlayerInfo.GetValue("o").ToString());
            //player.Potential = Convert.ToInt32(mobilePlayerInfo.GetValue("pp").ToString());
            //player.PotentialColor = Convert.ToInt32(mobilePlayerInfo.GetValue("po").ToString());
            player.Aid = Convert.ToInt32(mobilePlayerInfo.GetValue("aid").ToString());
            player.ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/0.0/playerheads/" + player.Aid + "@2x.png";



            JObject pBio = mobilePlayerInfo.GetValue("pb") as JObject;

            player.FirstName = pBio.GetValue("fn").ToString().ToLower();
            player.LastName = pBio.GetValue("ln").ToString().ToLower();

            player.FirstName = char.ToUpper(player.FirstName[0]) + player.FirstName.Substring(1);
            player.LastName = char.ToUpper(player.LastName[0]) + player.LastName.Substring(1);

            player.Position = pBio.GetValue("p").ToString();
            player.Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
            player.Height = Convert.ToInt32(pBio.GetValue("h").ToString());
            player.Age = Convert.ToInt32(pBio.GetValue("a").ToString());
            //player.BirthPlace = pBio.GetValue("bp").ToString();
            //player.DraftRound = Convert.ToInt32(pBio.GetValue("dr").ToString());
            //player.DraftTeam = Convert.ToInt32(pBio.GetValue("dt").ToString());
            //player.DraftPosition = Convert.ToInt32(pBio.GetValue("dp").ToString());
            player.Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());
            PopulatePlayerRatings(player, mobilePlayerInfo);
            GetPlayerStats(player, mobilePlayerInfo);
            return player;
        }

        [HttpGet]
        public List<TweetinCore.Interfaces.ITweet> GetTweets(string username)
        {
            var token = new TwitterToken.Token(
                WebConfigurationManager.AppSettings["token_AccessToken"],
                WebConfigurationManager.AppSettings["token_AccessTokenSecret"],
                WebConfigurationManager.AppSettings["token_ConsumerKey"],
                WebConfigurationManager.AppSettings["token_ConsumerSecret"]);

            Tweetinvi.User user = new Tweetinvi.User(username);
            TweetinCore.Interfaces.IUser u = user;
            u.PopulateUser(token);
            var tweets = user.GetUserTimeline(false, token);
            var lobTweets = tweets.Where(tweet => tweet.Hashtags.Any(tag => tag.Text.ToLower() == "lobnhl")).Take(7);
            return lobTweets.ToList();
        }


        // POST api/gopher
        public void Post([FromBody]string value)
        {
        }

        // PUT api/gopher/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/gopher/5
        public void Delete(int id)
        {
        }
    }
}
