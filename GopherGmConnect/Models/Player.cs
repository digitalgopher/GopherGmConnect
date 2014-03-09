using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace GopherGmConnect.Models
{
    public class Player
    {

        enum PositionEnum { RW, LW, C, D, G };
        public string id { get; set; }

        public int Aid { get; set; }
        public int Overall { get; set; }
        /*
         * 
         * When a player is returned, the potential is an enum. So 
         * we're going to switch up the enum before sending it out to the page. 
         *                             
         *  8 => 1 Star,
            7 => 1.5 Star,
            6 => 2 star,
            5 => 2.5,
            4 => 3,
            3 => 3.5,
            2 => 4,
            1 => 4.5,
            0 => 5
         * 
         * 
         */
        public int PotentialEnum { get; set; }
        private double _potential { get; set; }
        public double Potential
        {
            get
            {
                switch ((int)_potential)
                {
                    case 0:
                return 5;
                    case 1:
                return 4.5;
                    case 2:
                return 4;
                    case 3:
                return 3.5;
                    case 4:
                return 3;
                    case 5:
                return 2.5;
                    case 6:
                return 2;
                    case 7:
                return 1.5;
                    case 8:
                return 1;
                    default:
                        return 9;
                }
            }
            set 
            {
                PotentialEnum = (int)value;
                _potential = value; 
            }
        }
        public string PotentialColorString { get; set; }
        private int _potentialColor { get; set; }
        public int PotentialColor
        {
            get
            {
                return _potentialColor;
            }
            set
            { 
                PotentialColorString = GetPotentialColor(value);
                _potentialColor = FixPotentialColorNumber(value);
            }
        }

        public int CountryCode { get; set; }

        public bool IsInjured { get; set; }
        public int InjuryType { get; set; }
        public int InjuryLength { get; set; }

        public int Team { get; set; }
        public int TeamId { get; set; }
        //public string ImageUrl { get; set; }

        private List<PlayerStats> _playerStats { get; set; }
        public List<PlayerStats> PlayerStats
        {
            get
            {
                return _playerStats == null ? new List<PlayerStats>() : _playerStats;
            }
        }

        private string _position { get; set; }
        public string Position
        {
            get
            {
                return _position; 
            }
            set
            {
                switch (value)
                {
                    case "LW":
                        IsForward = true;
                        IsDefence = false;
                        IsGoalie = false;
                        break;
                    case "RW":
                        IsForward = true;
                        IsDefence = false;
                        IsGoalie = false;
                        break;
                    case "C":
                        IsForward = true;
                        IsDefence = false;
                        IsGoalie = false;
                        break;
                    case "D":
                        IsForward = false;
                        IsDefence = true;
                        IsGoalie = false;
                        break;
                    case "G":
                        IsForward = false;
                        IsDefence = false;
                        IsGoalie = true;
                        break;
                    default:
                        IsForward = false;
                        IsDefence = false;
                        IsGoalie = false;
                        break;
                }
                if (!IsForward && !IsDefence && !IsGoalie)
                {
                    throw new Exception("No Position!");
                }
                _position = value;
            }
        }

        public bool IsForward { get; set; }
        public bool IsDefence { get; set; }
        public bool IsGoalie { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string BirthPlace { get; set; }
        public int Age { get; set; }
        public int DraftTeam { get; set; }
        public int DraftRound { get; set; }
        public int DraftPosition { get; set; }
        public int Shoots { get; set; }

        public bool IsOnMainRoster { get; set; }

        private int _salary { get; set; }
        public int Salary
        {
            get
            {
                return _salary;
            }
            set
            {
                _salary = value;
                SalaryReadable = GetProperContract(_salary);
            }
        }

        public int SalaryReadable { get; private set; }
        public int YearsLeft {get; set;}
        public bool IsTwoWay {get; set;}
        public int TradeValue {get; set;}
        public bool IsSigned { get; set; }
        public int ContractSigned {get; set; }
        public int PlayerType { get; set; }

        private PlayerRatings _playerRatings { get; set; }
        public PlayerRatings PlayerRatings
        {
            get
            {
                return _playerRatings;
            }
        }

        //Other
        public string ImageUrl { get; set; }
        public int Jersey { get; set; }
        public bool IsCaptain { get; set; }

        public PlayerStats SingleYearStats { get; set; }

        public Player()
        {
            _playerRatings = new PlayerRatings();
            _playerStats = new List<Models.PlayerStats>();
        }

        public Player(JObject mobilePlayerInfo, JObject playerInfo)
        {
            _playerRatings = new PlayerRatings();
            _playerStats = new List<Models.PlayerStats>();
            id = playerInfo.GetValue("playerId").ToString();
            Salary = Convert.ToInt32(playerInfo.GetValue("contCurrVal").ToString());
            YearsLeft = Convert.ToInt32(playerInfo.GetValue("contCurrLen").ToString());
            IsTwoWay = Convert.ToInt32(playerInfo.GetValue("contCurr2Way").ToString()) == 0 ? false : true;
            TradeValue = Convert.ToInt32(playerInfo.GetValue("tradeValue").ToString());
            Team = Convert.ToInt32(playerInfo.GetValue("proTeamID").ToString());
            TeamId = Convert.ToInt32(playerInfo.GetValue("proTeamID").ToString());
            Jersey = Convert.ToInt32(playerInfo.GetValue("jerseyorg").ToString());
            CountryCode = Convert.ToInt32(playerInfo.GetValue("intlCountry").ToString());

            var artid = Convert.ToInt32(playerInfo.GetValue("playerArtID").ToString());
            ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/14/GMC/0.0/playerheads/p" + artid + "@2x.png";

            Overall = Convert.ToInt32(mobilePlayerInfo.GetValue("o").ToString());
            Potential = Convert.ToInt32(mobilePlayerInfo.GetValue("pp").ToString());
            PotentialColor = Convert.ToInt32(mobilePlayerInfo.GetValue("po").ToString());
            Aid = Convert.ToInt32(mobilePlayerInfo.GetValue("aid").ToString());

            JObject pBio = mobilePlayerInfo.GetValue("pb") as JObject;

            FirstName = pBio.GetValue("fn").ToString().ToLower();
            LastName = pBio.GetValue("ln").ToString().ToLower();

            FirstName = char.ToUpper(FirstName[0]) + FirstName.Substring(1);
            LastName = char.ToUpper(LastName[0]) + LastName.Substring(1);

            Position = pBio.GetValue("p").ToString();
            Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
            Height = Convert.ToInt32(pBio.GetValue("h").ToString());
            Age = Convert.ToInt32(pBio.GetValue("a").ToString());
            BirthPlace = pBio.GetValue("bp").ToString();
            DraftRound = Convert.ToInt32(pBio.GetValue("dr").ToString());
            DraftTeam = Convert.ToInt32(pBio.GetValue("dt").ToString());
            DraftPosition = Convert.ToInt32(pBio.GetValue("dp").ToString());
            Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());

            GetPlayerStats(mobilePlayerInfo);
            PopulatePlayerRatings(mobilePlayerInfo);
        }

        public Player (JObject mobilePlayerInfo)
        {
            _playerRatings = new PlayerRatings();
            _playerStats = new List<Models.PlayerStats>();
            Overall = Convert.ToInt32(mobilePlayerInfo.GetValue("o").ToString());
            Aid = Convert.ToInt32(mobilePlayerInfo.GetValue("aid").ToString());
            //ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/0.0/playerheads/" + Aid + "@2x.png";
            ImageUrl = "http://cdn.content.easports.com/nhlhm_assets/assets/ios/14/GMC/0.0/playerheads/p" + Aid + "@2x.png";

            JObject pBio = mobilePlayerInfo.GetValue("pb") as JObject;

            FirstName = pBio.GetValue("fn").ToString().ToLower();
            LastName = pBio.GetValue("ln").ToString().ToLower();

            FirstName = char.ToUpper(FirstName[0]) + FirstName.Substring(1);
            LastName = char.ToUpper(LastName[0]) + LastName.Substring(1);
            Position = pBio.GetValue("p").ToString();
            Weight = Convert.ToInt32(pBio.GetValue("w").ToString());
            Height = Convert.ToInt32(pBio.GetValue("h").ToString());
            Age = Convert.ToInt32(pBio.GetValue("a").ToString());
            Shoots = Convert.ToInt32(pBio.GetValue("s").ToString());

            GetPlayerStats(mobilePlayerInfo);
            PopulatePlayerRatings(mobilePlayerInfo);
        }

        private void PopulatePlayerRatings(JObject mobilePlayerInfo)
        {
            JObject pStats = mobilePlayerInfo.GetValue("pr") as JObject;
            if (Position != "G")
            {
                _playerRatings.Aggressiveness = pStats.Value<int>("a");
                _playerRatings.Strength = Int32.Parse(pStats.GetValue("st").ToString());
                _playerRatings.Agility = Convert.ToInt32(pStats.GetValue("ag").ToString());
                _playerRatings.Durability = Convert.ToInt32(pStats.GetValue("du").ToString());
                _playerRatings.Endurance = Convert.ToInt32(pStats.GetValue("e").ToString());
                _playerRatings.Speed = Convert.ToInt32(pStats.GetValue("s").ToString());
                _playerRatings.Poise = Convert.ToInt32(pStats.GetValue("po").ToString());
                _playerRatings.Passing = Convert.ToInt32(pStats.GetValue("p").ToString());
                _playerRatings.Deking = Convert.ToInt32(pStats.GetValue("d").ToString());
                _playerRatings.HandEye = Convert.ToInt32(pStats.GetValue("he").ToString());
                _playerRatings.OffAwareness = Convert.ToInt32(pStats.GetValue("oa").ToString());
                _playerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("pc").ToString());
                _playerRatings.SlapShotAccuracy = Convert.ToInt32(pStats.GetValue("sa").ToString());
                _playerRatings.SlapShotPower = Convert.ToInt32(pStats.GetValue("ssp").ToString());
                _playerRatings.WristShotAccuracy = Convert.ToInt32(pStats.GetValue("wa").ToString());
                _playerRatings.WristShotPower = Convert.ToInt32(pStats.GetValue("wsp").ToString());
                _playerRatings.BodyChecking = Convert.ToInt32(pStats.GetValue("bc").ToString());
                _playerRatings.DefAwareness = Convert.ToInt32(pStats.GetValue("da").ToString());
                _playerRatings.Discipline = Convert.ToInt32(pStats.GetValue("di").ToString());
                _playerRatings.Faceoffs = Convert.ToInt32(pStats.GetValue("fo").ToString());
                _playerRatings.Fighting = Convert.ToInt32(pStats.GetValue("f").ToString());
                _playerRatings.ShotBlocking = Convert.ToInt32(pStats.GetValue("sb").ToString());
                _playerRatings.Acceleration = Convert.ToInt32(pStats.GetValue("ac").ToString());
                _playerRatings.StickChecking = Convert.ToInt32(pStats.GetValue("sc").ToString());
                _playerRatings.Balance = Convert.ToInt32(pStats.GetValue("b").ToString());
            }
            else
            {
                _playerRatings.PokeCheck = Convert.ToInt32(pStats.GetValue("gpc").ToString());
                _playerRatings.Breakaways = Convert.ToInt32(pStats.GetValue("gb").ToString());
                _playerRatings.FiveHole = Convert.ToInt32(pStats.GetValue("g5h").ToString());
                _playerRatings.GloveHigh = Convert.ToInt32(pStats.GetValue("ggh").ToString());
                _playerRatings.GloveLow = Convert.ToInt32(pStats.GetValue("ggl").ToString());
                _playerRatings.StickHigh = Convert.ToInt32(pStats.GetValue("gsh").ToString());
                _playerRatings.StickLow = Convert.ToInt32(pStats.GetValue("gsl").ToString());
                _playerRatings.Passing = Convert.ToInt32(pStats.GetValue("gp").ToString());
                _playerRatings.PuckControl = Convert.ToInt32(pStats.GetValue("gpc").ToString());
                _playerRatings.PuckPlayingFreq = Convert.ToInt32(pStats.GetValue("gppf").ToString());
                _playerRatings.ReboundControl = Convert.ToInt32(pStats.GetValue("grc").ToString());
                _playerRatings.ShotRecovery = Convert.ToInt32(pStats.GetValue("gsr").ToString());
                _playerRatings.Aggressiveness = Convert.ToInt32(pStats.GetValue("gag").ToString());
                _playerRatings.Agility = Convert.ToInt32(pStats.GetValue("gagi").ToString());
                _playerRatings.Durability = Convert.ToInt32(pStats.GetValue("gd").ToString());
                _playerRatings.Speed = Convert.ToInt32(pStats.GetValue("gs").ToString());
                _playerRatings.Vision = Convert.ToInt32(pStats.GetValue("gv").ToString());
                _playerRatings.Poise = Convert.ToInt32(pStats.GetValue("gpo").ToString());
                _playerRatings.Endurance = Convert.ToInt32(pStats.GetValue("ge").ToString());
                _playerRatings.Angles = Convert.ToInt32(pStats.GetValue("ga").ToString());
            }
        }

        public void GetFullPlayerSeasonStats(JArray statsObject, bool isSkater)
        {
            /*SKATER: "fn", "ln", "pid", "p", "gp","g", 5
            "a", "pts", "pim", "pm", "ppg",10
            "shg", "gwg", "gtg", "s", "sp",15
            "fow", "fot", "fop", "h", "ga",20
            "ta", "m"*/

            /* GOALIE"fn", "ln", "pid",
            "p", "gp", "w",
            "l", "so", "gaa",
            "ga","sp",  "sa",
            "m", "pim","g",
            "a"*/


            var statArray = statsObject.ToList();
            SingleYearStats = new PlayerStats();
            if (isSkater)
            {
                SingleYearStats.GamesPlayed = statArray[4].ToObject<int>();
                SingleYearStats.FaceoffsTaken = statArray[17].ToObject<int>();
                SingleYearStats.Assists = statArray[6].ToObject<int>();
                SingleYearStats.Goals = statArray[5].ToObject<int>();
                SingleYearStats.Minutes = Math.Round(statArray[22].ToObject<double>() / 60, 0);
                SingleYearStats.PlusMinus = statArray[9].ToObject<int>();
                SingleYearStats.PowerPlayGoals = statArray[10].ToObject<int>();
                SingleYearStats.FaceoffPercentage = Math.Round(statArray[18].Value<double>() * 100, 0);
                SingleYearStats.ShootingPercentage = Math.Round(statArray[15].Value<double>() * 100, 0);
            }
            else
            {
                SingleYearStats.GamesPlayed = statArray[4].ToObject<int>();
                SingleYearStats.Wins = statArray[5].ToObject<int>();
                SingleYearStats.Shutouts = statArray[7].ToObject<int>();
                SingleYearStats.SavePercentage = statArray[10].ToObject<double>();
                SingleYearStats.ShotsAgainst = statArray[11].ToObject<int>();
                SingleYearStats.GoalsAgainst = statArray[9].ToObject<int>();
                SingleYearStats.Losses = statArray[6].ToObject<int>();
                SingleYearStats.GoalsAgainstAverage = statArray[8].ToObject<double>();
            }
        }

        //private void UpdateDetailedStats(JArray statsObject)
        //{
        //    var stats = new PlayerStats();
        //    stats.GamesPlayed = skater[4].Value<int>();
        //    stats.Goals = skater[5].Value<int>();
        //    stats.Assists = skater[6].Value<int>();
        //    stats.Minutes = skater[22].Value<int>();
        //    stats.Shots = skater[14].Value<int>();
        //    stats.GameWinningGoals = skater[12].Value<int>();
        //    stats.PlusMinus = skater[9].Value<int>();
        //    stats.FaceoffPercentage = Math.Round(skater[18].Value<double>() * 100, 0);
        //    stats.FaceoffsTaken = skater[17].Value<int>();
        //    stats.FaceoffsWon = skater[16].Value<int>();
        //    stats.Hits = skater[19].Value<int>();
        //    stats.ShootingPercentage = Math.Round(skater[15].Value<double>() * 100, 0);

        //    player.SingleYearStats = stats;
        //}

        private void GetPlayerStats(JObject mobileInfo)
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
                if (Position != "G")
                {
                    playerstats.Goals = Convert.ToInt32(stats.GetValue("g").ToString());
                    playerstats.Assists = Convert.ToInt32(stats.GetValue("a").ToString());
                    
                }
                else
                {
                    playerstats.GoalsAgainstAverage = Convert.ToDouble(stats.GetValue("gaa").ToString());
                    playerstats.GoalsAgainst = Convert.ToInt32(stats.GetValue("ga").ToString());
                    playerstats.Wins = Convert.ToInt32(stats.GetValue("w").ToString());
                    playerstats.Losses = Convert.ToInt32(stats.GetValue("l").ToString());
                }
                playerstats.Year = Convert.ToInt32(stats.GetValue("y").ToString());
                playerstats.GamesPlayed = Convert.ToInt32(stats.GetValue("gp").ToString());
                
                _playerStats.Add(playerstats);
            }
        }

        private int GetProperContract(int contractEnum)
        {
            if (contractEnum == 0)
            {
                return 0;
            }
            var count = 105;
            var salary = 525000;
            while (count != contractEnum)
            {
                salary += 5000;
                count++;
            }
            return salary;
        }

        private string GetPotentialColor(int potentialColorEnum)
        {
            var color = "";
            switch(potentialColorEnum) {
                case 0: 
                    color = "green";
                    break;
                case 1: 
                    color = "yellow";
                    break;
                case 2: 
                    color = "red";
                    break;
                case 3: 
                    color = "red";
                    break;
                case 4: 
                    color = "white";
                    break;
                default: 
                    color = "blue";
                    break;
            }
            return color;
        }

        private int FixPotentialColorNumber(int oldval)
        {
            //This looks crazy, but it makes sense. 
            //The potential stars are reversed already, so we'll do the same here. So it makes sense higher == better
            //Original is 0 == green, but now 5 == green.
            switch (oldval)
            {
                case 0:
                    return 5;
                case 1:
                    return 4;
                case 2:
                    return 3;
                case 3:
                    return 3;
                case 4:
                    return 2;
                default:
                    return 1;
            }
        }
    }
}