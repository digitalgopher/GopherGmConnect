using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace GopherGmConnect.Models
{
    public class Player
    {

        enum PositionEnum { RW, LW, C, D, G };
        public string id { get; set; }

        public int Aid { get; set; }
        public int Overall { get; set; }

        public int Potential { get; set; }
        public int PotentialColor { get; set; }

        public int CountryCode { get; set; }

        public bool IsInjured { get; set; }
        public int InjuryType { get; set; }
        public int InjuryLength { get; set; }

        public int PlayerArtID { get; set; }
        public int Team { get; set; }
        //public string ImageUrl { get; set; }

        public List<PlayerStats> PlayerStats { get; set; }

        public string Position { get; set; }
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

        public int Salary {get; set;}
        public int YearsLeft {get; set;}
        public bool IsTwoWay {get; set;}
        public int TradeValue {get; set;}
        public int ContractSigned {get; set; }
        public int PlayerType { get; set; }

        public PlayerRatings PlayerRatings { get; set; }

        //Other
        public string ImageUrl { get; set; }
        public string NhlId { get; set; }
        public int Jersey { get; set; }
        public bool IsCaptain { get; set; }
        public bool ContractIsTwoWay { get; set; }

        public PlayerStats SingleYearStats { get; set; }

        public Player()
        {
            PlayerStats = new List<PlayerStats>();
            PlayerRatings = new PlayerRatings();
            //OffStats = new List<int>();
            //DefStats = new List<int>();
            //GoalieStats = new List<int>();
            //GetOffStats();
        }


        //private void GetOffStats()
        //{
        //    OffStats.Add(Aggressiveness);
        //    OffStats.Add(WristShotAccuracy);
        //    OffStats.Add(WristShotPower);
        //    OffStats.Add(SlapShotAccuracy);
        //    OffStats.Add(SlapShotPower);
        //    OffStats.Add(PuckControl);
        //    OffStats.Add(OffAwareness);
        //    OffStats.Add(HandEye);
        //    OffStats.Add(Deking);
        //    OffStats.Add(Passing);
        //}

        

        
    }
}