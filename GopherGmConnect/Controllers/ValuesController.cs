//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Linq;


//namespace GopherGmConnect.Controllers
//{
//    public class ValuesController : ApiController
//    {

//        private string eaTokenVal = "YVdGz0PjuPkYfWgB0eVXCkOB6dqF1%2BdnMgNMU5DHICU%2BCmT5gK7fWJNMIHbCKm11boXbZUetFaK5P5S43x8ksVrDpq4nVKRFmuK%2B%2FSxFzx%2BhrQFv04xd0Wy0UExavIt1LLZcz7EE1bpIxzkGS%2Bk%2B1MFuZholIIChcqiBd3kcRDFjAosxQy9jx728kb62Z10vbhQs5IWNx6%2F7Ihi7MMZm2hDyhuWqC8aUHtXRP%2Fr2LTw%3D";
//            // GET api/values
//        public IEnumerable<string> Get()
//        {
//            return new string[] { "value1", "value2" };
//        }

//        [HttpGet]
//        public object Players(string id)
//        {
//            var db = new Models.PlayerContext();
//            return db.Players.First((p => p.id == id));
//        }

//        [HttpGet]
//        public object Players(string firstname, string lastname)
//        {
//            using(var db = new Models.PlayerContext())
//            {
//                return db.Players.First((p => p.FirstName == firstname && p.LastName == lastname));
//            }
//        }

//        //[HttpGet]
//        //public object Players([FromUri] params string[] ids)
//        //{
//        //    //var db = new Models.PlayerContext();
//        //    //var players = new List<Models.Player>();
//        //    //foreach (var id in ids)
//        //    //{
//        //    //    players.Add(db.Players.First((x => x.id == id)));
//        //    //}
//        //    //var pl = new JObject(
//        //    //    new JProperty(,
//        //    //        new JArray(
//        //    //            from p in players
//        //    //            select new JObject(JObject.FromObject(p)))));
//        //    //return pl;
//        //}

//        //[HttpGet]
//        //public object GetRoster(string id)
//        //{
//        //    var db = new Models.PlayerContext();
//        //    if (db.Teams.Any((x => x.id == id)))
//        //    {
//        //        var team = db.Teams.Find(id);
//        //        return team.Players;
//        //    }
//        //    else
//        //    {
//        //        return null;
//        //    }
            
//        //}

//        [HttpGet]
//        private string GetNhlId(string first, string last)
//        {
//            first = first.ToLower();
//            last = last.ToLower();
//            string letter = last.Substring(0, 1);
//            string url = "http://www.nhl.com/ice/app?service=page&page=CFPlayerSearchJS&letter=" + letter;

//            WebClient c = new WebClient();
//            string json = c.DownloadString(url);
//            var jsonobj = JObject.Parse(json);
//            var jPlayerArray = jsonobj.GetValue("players").ToArray();
//            string nhlid = "null";
//            foreach (var player in jPlayerArray)
//            {
//                string playerString = player.ToString().ToLower();
//                string[] words = playerString.Split(',');
//                if (words[1].Trim() == last && words[2].Trim() == first)
//                {
//                    nhlid = words[0];
//                    break ;
//                }

//            }

//            return nhlid;
//        }

//        //[HttpGet]
//        //public object Teams(string id)
//        //{
//        //    var db = new Models.PlayerContext();
//        //    var dbTeam = db.Teams.First((t => t.id == id));
//        //    //return db.Teams.First((t => t.id == id));
//        //    var team = new JObject(
//        //        new JProperty("team",
//        //            new JObject(
//        //                new JProperty("player_ids",
//        //                    new JArray(
//        //                        from p in dbTeam.Players
//        //                        select new JValue(p.id))))));
//        //    return team;
//        //}

//        [HttpGet]
//        public object Teams()
//        {
//            var db = new Models.PlayerContext();
//            var teamList = new JObject(
//                    new JProperty("teams",
//                        new JArray(
//                            from t in db.Teams.ToList()
//                            select new JObject(
//                                new JProperty("id", t.id),
//                                new JProperty("Players",
//                                    new JArray(
//                                        from p in t.Players
//                                        select new JValue(p.id)))))));
//            //var teamList = db.Teams;


//            return teamList;
//        }

//        [HttpGet]
//        public object Player(string id)
//        {
//            var db = new Models.PlayerContext();
//            return db.Players.First((p => p.id == id));
//        }

//        [HttpGet]
//        public object InjuredPlayers()
//        {
//            var db = new Models.PlayerContext();
//            foreach (Models.Team team in db.Teams.ToList()) 
//            {
//                team.Players.ForEach((p => p.IsInjured = false));

//                //"fn",
//                //"ln",
//                //"p",
//                //"dl",
//                //"t",
//                //"pb"
                
//                var url = "http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + team.id + "/injuries/mobile";
//                var webClient = new WebClient();
//                webClient.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + eaTokenVal);
//                string json = webClient.DownloadString(url);
//                try
//                {
//                    var jsonReturn = JObject.Parse(json);
//                    var jInjuryArray = jsonReturn.GetValue("v").ToArray();
//                    Models.Player injuredPlayer = new Models.Player();
//                    foreach (var playerToken in jInjuryArray)
//                    {
//                        var player = playerToken as JArray;
//                        string lastName = player[1].ToString();
//                        List<Models.Player> playerList = team.Players.FindAll((p => p.LastName == lastName));
//                        if (playerList.Count > 1)
//                        {
//                            string firstInitial = player[0].ToString();
//                            firstInitial.Remove(1);
//                            injuredPlayer = playerList.First((p => p.FirstName.StartsWith(firstInitial)));
//                        }
//                        else
//                        {
//                            injuredPlayer = playerList[0];
//                        }
//                        injuredPlayer.IsInjured = true;
//                        injuredPlayer.InjuryLength = Convert.ToInt32(player[3].ToString());
//                        injuredPlayer.InjuryType = Convert.ToInt32(player[4].ToString());
//                        db.SaveChanges();
//                    }
//                }
//                catch (Exception ex)
//                {
//                    Console.WriteLine(ex.Message);
//                }
//            }
//            return db.Players.ToList().FindAll((p => p.IsInjured));
//        }

//        //[HttpGet]
//        //public void PushUpdate()
//        //{
//        //    var dbContext = new Models.PlayerContext();
//        //    for (int i = 0; i < 30; i++)
//        //    {
//        //        WebClient wClient = new WebClient();
//        //        wClient.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + eaTokenVal);
//        //        string json = wClient.DownloadString("http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + i + "/roster/mobile");
//        //        var idString = i.ToString();
//        //        var team = dbContext.Teams.First<Models.Team>((x => x.id == idString));
//        //        List<Models.Player> oldRoster = team.Players;
//        //        List<Models.Player> newRoster = new List<Models.Player>();
//        //        team.id = i.ToString();
//        //        Console.WriteLine(team.id);
//        //        var jTeam = JObject.Parse(json);

//        //        var valueArray = jTeam.GetValue("v").ToArray();
//        //        foreach (var playerToken in valueArray)
//        //        {
//        //            var jsonPlayerSmall = playerToken as JArray;
//        //            string playerID = jsonPlayerSmall[0].ToString();
//        //            WebClient webclient = new WebClient();
//        //            webclient.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + eaTokenVal);
//        //            string dlJson = webclient.DownloadString("http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/player/" + playerID + "/info/mobile");
//        //            JObject playerJson = JObject.Parse(dlJson);
                  
//        //            JObject pStats = playerJson.GetValue("pr") as JObject;
//        //            Models.Player player = new Models.Player();
//        //            try
//        //            {
//        //                player = dbContext.Players.First<Models.Player>((pl => pl.id == playerID));
//        //                if (player.Position != "G")
//        //                {
//        //                    player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("a").ToString());
//        //                }
//        //                //dbContext.Players.Attach(player);

//        //                if (player.NhlId == null)
//        //                {
//        //                    player.NhlId = GetNhlId(player.FirstName, player.LastName);
//        //                }
//        //                if (player.ImageUrl == null)
//        //                {
//        //                    player.ImageUrl = "http://2.cdn.nhle.com/photos/mugs/" + player.NhlId + ".jpg";
//        //                }          
//        //                dbContext.SaveChanges();
//        //            }
//        //            catch (Exception ex)
//        //            {
//        //                //player doesn't exist... create it
//        //                player = CreatePlayer(playerJson, playerToken);
//        //                dbContext.Players.Add(player);

//        //            }
                     

//        //            newRoster.Add(player);
//        //            dbContext.SaveChanges();
                    
//        //        }
//        //        team.Players = newRoster;
//        //        dbContext.Teams.Attach(team);
//        //        dbContext.SaveChanges();
//        //    }
//        //}

//        [HttpGet]
//        public object SearchPlayers(string searchTerm)
//        {
//            var db = new Models.PlayerContext();
//            var players = db.Players.Where((p => p.LastName.Contains(searchTerm))).Take(5).ToList();
//            var searched = new JObject(
//                                new JProperty("Players",
//                                    new JArray(
//                                        from p in players
//                                        select new JObject(
//                                            new JProperty("id", p.id),
//                                            new JProperty("overall", p.Overall),
//                                            new JProperty("LastName", p.LastName.ToLower()),
//                                            new JProperty("FirstName", p.FirstName)))));
//            return searched;
//        }


//        private Models.Player CreatePlayer(JObject playerJson, JToken playerToken)
//        {
//            var jsonPlayerSmall = playerToken as JArray;
//            string playerID = jsonPlayerSmall[0].ToString();
//            int salary = Convert.ToInt32(jsonPlayerSmall[5].ToString());
//            int yearsLeft = Convert.ToInt32(jsonPlayerSmall[6].ToString());
//            bool contractType = Convert.ToInt32(jsonPlayerSmall[7].ToString()) == 0 ? false : true;
//            int tradeValue = Convert.ToInt32(jsonPlayerSmall[8].ToString());
//            int contractSigned = Convert.ToInt32(jsonPlayerSmall[9].ToString());
//            int playerType = Convert.ToInt32(jsonPlayerSmall[12].ToString());

//            Models.Player player = new Models.Player();

//            player.id = playerID;
//            player.Salary = salary;
//            player.YearsLeft = yearsLeft;
//            player.ContractSigned = contractSigned;
//            player.IsTwoWay = contractType;
//            player.PlayerType = playerType;
//            player.TradeValue = tradeValue;

//            player.Overall = Convert.ToInt32(playerJson.GetValue("o").ToString());
//            player.Potential = Convert.ToInt32(playerJson.GetValue("pp").ToString());
//            player.PotentialColor = Convert.ToInt32(playerJson.GetValue("po").ToString());
//            player.Aid = Convert.ToInt32(playerJson.GetValue("aid").ToString());

//            JObject pBio = playerJson.GetValue("pb") as JObject;

//            player.FirstName = pBio.GetValue("fn").ToString();
//            player.LastName = pBio.GetValue("ln").ToString();
//            player.Position = pBio.GetValue("p").ToString();
//            player.Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
//            player.Height = Convert.ToInt32(pBio.GetValue("h").ToString());
//            player.Age = Convert.ToInt32(pBio.GetValue("a").ToString());
//            player.BirthPlace = pBio.GetValue("bp").ToString();
//            player.DraftRound = Convert.ToInt32(pBio.GetValue("dr").ToString());
//            player.DraftTeam = Convert.ToInt32(pBio.GetValue("dt").ToString());
//            player.DraftPosition = Convert.ToInt32(pBio.GetValue("dp").ToString());
//            player.Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());

//            JObject pStats = playerJson.GetValue("pr") as JObject;
//            if (player.Position != "G")
//            {
//                player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("a").ToString());
//                player.PlayerRatings.Strength = Int32.Parse(pStats.GetValue("st").ToString());
//                player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("ag").ToString());
//                player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("du").ToString());
//                player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("e").ToString());
//                player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("s").ToString());
//                player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("po").ToString());
//                player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("p").ToString());
//                player.PlayerRatings.Deking = Convert.ToInt32(pStats.GetValue("d").ToString());
//                player.PlayerRatings.HandEye = Convert.ToInt32(pStats.GetValue("he").ToString());
//                player.PlayerRatings.OffAwareness = Convert.ToInt32(pStats.GetValue("oa").ToString());
//                player.PlayerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("pc").ToString());
//                player.PlayerRatings.SlapShotAccuracy = Convert.ToInt32(pStats.GetValue("sa").ToString());
//                player.PlayerRatings.SlapShotPower = Convert.ToInt32(pStats.GetValue("ssp").ToString());
//                player.PlayerRatings.WristShotAccuracy = Convert.ToInt32(pStats.GetValue("wa").ToString());
//                player.PlayerRatings.WristShotPower = Convert.ToInt32(pStats.GetValue("wsp").ToString());
//                player.PlayerRatings.BodyChecking = Convert.ToInt32(pStats.GetValue("bc").ToString());
//                player.PlayerRatings.DefAwareness = Convert.ToInt32(pStats.GetValue("da").ToString());
//                player.PlayerRatings.Discipline = Convert.ToInt32(pStats.GetValue("di").ToString());
//                player.PlayerRatings.Faceoffs = Convert.ToInt32(pStats.GetValue("fo").ToString());
//                player.PlayerRatings.Fighting = Convert.ToInt32(pStats.GetValue("f").ToString());
//                player.PlayerRatings.ShotBlocking = Convert.ToInt32(pStats.GetValue("sb").ToString());
//                player.PlayerRatings.Acceleration = Convert.ToInt32(pStats.GetValue("ac").ToString());
//                player.PlayerRatings.StickChecking = Convert.ToInt32(pStats.GetValue("sc").ToString());
//                player.PlayerRatings.Balance = Convert.ToInt32(pStats.GetValue("b").ToString());
//            }
//            else
//            {
//                player.PlayerRatings.PokeCheck = Convert.ToInt32(pStats.GetValue("gpc").ToString());
//                player.PlayerRatings.Breakaways = Convert.ToInt32(pStats.GetValue("gb").ToString());
//                player.PlayerRatings.FiveHole = Convert.ToInt32(pStats.GetValue("g5h").ToString());
//                player.PlayerRatings.GloveHigh = Convert.ToInt32(pStats.GetValue("ggh").ToString());
//                player.PlayerRatings.GloveLow = Convert.ToInt32(pStats.GetValue("ggl").ToString());
//                player.PlayerRatings.StickHigh = Convert.ToInt32(pStats.GetValue("gsh").ToString());
//                player.PlayerRatings.StickLow = Convert.ToInt32(pStats.GetValue("gsl").ToString());
//                player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("gp").ToString());
//                player.PlayerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("gpc").ToString());
//                player.PlayerRatings.PuckPlayingFreq = Convert.ToInt32(pStats.GetValue("gppf").ToString());
//                player.PlayerRatings.ReboundControl = Convert.ToInt32(pStats.GetValue("grc").ToString());
//                player.PlayerRatings.ShotRecovery = Convert.ToInt32(pStats.GetValue("gsr").ToString());
//                player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("gag").ToString());
//                player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("gagi").ToString());
//                player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("gd").ToString());
//                player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("gs").ToString());
//                player.PlayerRatings.Vision = Convert.ToInt32(pStats.GetValue("gv").ToString());
//                player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("gpo").ToString());
//                player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("ge").ToString());
//                player.PlayerRatings.Angles = Convert.ToInt32(pStats.GetValue("ga").ToString());
//            }
//            return player;
//        }


//        private void UPDATEPLAYERDB()
//        {
//            var dbContext = new Models.PlayerContext();
//            for (int i = 0; i < 30; i++)
//            {
//                WebClient wClient = new WebClient();
//                wClient.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + eaTokenVal);
//                string json = wClient.DownloadString("http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/team/" + i + "/roster/mobile");

//                var team = new Models.Team();
//                team.id = i.ToString();

//                var jTeam = JObject.Parse(json);
//                //"pid",
//                //"fn",
//                //"ln",
//                //"p",
//                //"a",
//                //"s",
//                //"yl",
//                //"ct",
//                //"tv",
//                //"cs",
//                //"pp",
//                //"ppl",
//                //"pt",
//                //"po"


//                var valueArray = jTeam.GetValue("v").ToArray();
//                foreach (var playerToken in valueArray)
//                {
//                    var jsonPlayerSmall = playerToken as JArray;
//                    string playerID = jsonPlayerSmall[0].ToString();
//                    int salary = Convert.ToInt32(jsonPlayerSmall[5].ToString());
//                    int yearsLeft = Convert.ToInt32(jsonPlayerSmall[6].ToString());
//                    bool contractType = Convert.ToInt32(jsonPlayerSmall[7].ToString()) == 0 ? false : true;
//                    int tradeValue = Convert.ToInt32(jsonPlayerSmall[8].ToString());
//                    int contractSigned = Convert.ToInt32(jsonPlayerSmall[9].ToString());
//                    int playerType = Convert.ToInt32(jsonPlayerSmall[12].ToString());

//                    WebClient webclient = new WebClient();
//                    webclient.Headers.Add(HttpRequestHeader.Cookie, "EASW-Token=" + eaTokenVal);
//                    string dlJson = webclient.DownloadString("http://easw.easports.com:8099/nhl_hm/2013/protected/competition/29169/player/" + playerID + "/info/mobile");
//                    JObject playerJson = JObject.Parse(dlJson);

//                    Models.Player player = new Models.Player();

//                    player.id = playerID;
//                    player.Salary = salary;
//                    player.YearsLeft = yearsLeft;
//                    player.ContractSigned = contractSigned;
//                    player.IsTwoWay = contractType;
//                    player.PlayerType = playerType;
//                    player.TradeValue = tradeValue;

//                    player.Overall = Convert.ToInt32(playerJson.GetValue("o").ToString());
//                    player.Potential = Convert.ToInt32(playerJson.GetValue("pp").ToString());
//                    player.PotentialColor = Convert.ToInt32(playerJson.GetValue("po").ToString());
//                    player.Aid = Convert.ToInt32(playerJson.GetValue("aid").ToString());

//                    JObject pBio = playerJson.GetValue("pb") as JObject;

//                    player.FirstName = pBio.GetValue("fn").ToString();
//                    player.LastName = pBio.GetValue("ln").ToString();
//                    player.Position = pBio.GetValue("p").ToString();
//                    player.Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
//                    player.Height = Convert.ToInt32(pBio.GetValue("h").ToString());
//                    player.Age = Convert.ToInt32(pBio.GetValue("a").ToString());
//                    player.BirthPlace = pBio.GetValue("bp").ToString();
//                    player.DraftRound = Convert.ToInt32(pBio.GetValue("dr").ToString());
//                    player.DraftTeam = Convert.ToInt32(pBio.GetValue("dt").ToString());
//                    player.DraftPosition = Convert.ToInt32(pBio.GetValue("dp").ToString());
//                    player.Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());

//                    JObject pStats = playerJson.GetValue("pr") as JObject;
//                    if (player.Position != "G")
//                    {
//                        player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("a").ToString());
//                        player.PlayerRatings.Strength = Int32.Parse(pStats.GetValue("st").ToString());
//                        player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("ag").ToString());
//                        player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("du").ToString());
//                        player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("e").ToString());
//                        player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("s").ToString());
//                        player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("po").ToString());
//                        player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("p").ToString());
//                        player.PlayerRatings.Deking = Convert.ToInt32(pStats.GetValue("d").ToString());
//                        player.PlayerRatings.HandEye = Convert.ToInt32(pStats.GetValue("he").ToString());
//                        player.PlayerRatings.OffAwareness = Convert.ToInt32(pStats.GetValue("oa").ToString());
//                        player.PlayerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("pc").ToString());
//                        player.PlayerRatings.SlapShotAccuracy = Convert.ToInt32(pStats.GetValue("sa").ToString());
//                        player.PlayerRatings.SlapShotPower = Convert.ToInt32(pStats.GetValue("ssp").ToString());
//                        player.PlayerRatings.WristShotAccuracy = Convert.ToInt32(pStats.GetValue("wa").ToString());
//                        player.PlayerRatings.WristShotPower = Convert.ToInt32(pStats.GetValue("wsp").ToString());
//                        player.PlayerRatings.BodyChecking = Convert.ToInt32(pStats.GetValue("bc").ToString());
//                        player.PlayerRatings.DefAwareness = Convert.ToInt32(pStats.GetValue("da").ToString());
//                        player.PlayerRatings.Discipline = Convert.ToInt32(pStats.GetValue("di").ToString());
//                        player.PlayerRatings.Faceoffs = Convert.ToInt32(pStats.GetValue("fo").ToString());
//                        player.PlayerRatings.Fighting = Convert.ToInt32(pStats.GetValue("f").ToString());
//                        player.PlayerRatings.ShotBlocking = Convert.ToInt32(pStats.GetValue("sb").ToString());
//                        player.PlayerRatings.Acceleration = Convert.ToInt32(pStats.GetValue("ac").ToString());
//                        player.PlayerRatings.StickChecking = Convert.ToInt32(pStats.GetValue("sc").ToString());
//                        player.PlayerRatings.Balance = Convert.ToInt32(pStats.GetValue("b").ToString());
//                    }
//                    else
//                    {
//                        player.PlayerRatings.PokeCheck = Convert.ToInt32(pStats.GetValue("gpc").ToString());
//                        player.PlayerRatings.Breakaways = Convert.ToInt32(pStats.GetValue("gb").ToString());
//                        player.PlayerRatings.FiveHole = Convert.ToInt32(pStats.GetValue("g5h").ToString());
//                        player.PlayerRatings.GloveHigh = Convert.ToInt32(pStats.GetValue("ggh").ToString());
//                        player.PlayerRatings.GloveLow = Convert.ToInt32(pStats.GetValue("ggl").ToString());
//                        player.PlayerRatings.StickHigh = Convert.ToInt32(pStats.GetValue("gsh").ToString());
//                        player.PlayerRatings.StickLow = Convert.ToInt32(pStats.GetValue("gsl").ToString());
//                        player.PlayerRatings.Passing = Convert.ToInt32(pStats.GetValue("gp").ToString());
//                        //player.PuckControl = Convert.ToInt32(pStats.GetValue("gpc").ToString());
//                        player.PlayerRatings.PuckPlayingFreq = Convert.ToInt32(pStats.GetValue("gppf").ToString());
//                        player.PlayerRatings.ReboundControl = Convert.ToInt32(pStats.GetValue("grc").ToString());
//                        player.PlayerRatings.ShotRecovery = Convert.ToInt32(pStats.GetValue("gsr").ToString());
//                        player.PlayerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("gag").ToString());
//                        player.PlayerRatings.Agility = Convert.ToInt32(pStats.GetValue("gagi").ToString());
//                        player.PlayerRatings.Durability = Convert.ToInt32(pStats.GetValue("gd").ToString());
//                        player.PlayerRatings.Speed = Convert.ToInt32(pStats.GetValue("gs").ToString());
//                        player.PlayerRatings.Vision = Convert.ToInt32(pStats.GetValue("gv").ToString());
//                        player.PlayerRatings.Poise = Convert.ToInt32(pStats.GetValue("gpo").ToString());
//                        player.PlayerRatings.Endurance = Convert.ToInt32(pStats.GetValue("ge").ToString());
//                        player.PlayerRatings.Angles = Convert.ToInt32(pStats.GetValue("ga").ToString());
//                    }
//                    team.Players.Add(player);
//                    dbContext.Players.Add(player);
//                    dbContext.SaveChanges();
//                }
//                dbContext.Teams.Add(team);
//                dbContext.SaveChanges();
//            }
//        }

//        // GET api/values/5
//        public string Get(int id)
//        {
//            return "value";
//        }

//        // POST api/values
//        public void Post([FromBody]string value)
//        {
//        }

//        // PUT api/values/5
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE api/values/5
//        public void Delete(int id)
//        {
//        }
//    }
//}