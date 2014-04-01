using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;

namespace GopherGmConnect.Models
{
    public class Team
    {
        public string id { get; set; }
        //public string abr { get; set; }
        //public string city { get; set; }
        //public string fullName { get; set; }

        /// <summary>
        /// key == name of the line
        /// value == list of player ids.
        /// Alwyas C, LW, RW
        /// Allows me to do something like this in the UI
        /// --- --CT-- ---
        /// --LW--  --RW--
        /// "Forwad 1" 
        /// "LWID", "CID", "RWID"
        /// "DPair 1"
        /// "LDID", "RDID", 
        /// "Gs"
        /// "G1", "G2"
        /// </summary>
        public Dictionary<string, List<string>> Lines { get; set; }
        public int SalaryCapSpent { get; set; }
        public int SalaryCapRemaining { get; set; }
        public int SalaryCapTotal { get; set; }
        public int Conference { get; set; }
        public int Division { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int Points { get; set; }
        public int GamesPlayed { get; set; }
        public int OvertimeLosses { get; set; }
        public int RegulationOvertimeWins { get; set; }

        public double GoalsAgainstPerGame { get; set; }
        
        public double GoalsForPerGame { get; set; }
        //private List<Player> _players { get; set; }
        //public List<Player> Players
        //{
        //    get
        //    {
        //        return _players == null ? new List<Player>() : _players;
        //    }
        //    set
        //    {
        //        _players = value;
        //    }
        //}
        public double PowerPlayPercent { get; set; }
        public double PenaltyKillPercent { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }

        public string LastTenRecord { get; set; }

        public int[] FutureSalaries { get; set; }

        public Team()
        {
            FutureSalaries = new int[5];
        }

        public void GetTeamStats(JArray teamToken)
        {
            /*"cg" - conference 0 "dg" - division "tid" - team id "gp" - games played  "w" - wins "l" - loss 5 
            "otl" overtime loss "row" regulation overtime wins "gf" goals for "ga" goals against "gfpg" - goals for per game 10
            "gapg" - against per game "ppgf" pp goals for "ppt" pp times "ppga" pp goals against "ppp", pp % 15
            "shgf" sh goals for "shga" sh goals against "sht" times short handed "pkp" pk % "hr" home record 20
            "ar", away record "ltr", last ten record "p", points  "wp" ?? 24*/

            id = teamToken[2].ToString();
            Conference = Convert.ToInt32(teamToken[0].ToString());
            Division = Convert.ToInt32(teamToken[1].ToString());
            Wins = Convert.ToInt32(teamToken[4].ToString());
            Losses = Convert.ToInt32(teamToken[5].ToString());
            Points = Convert.ToInt32(teamToken[23].ToString());
            GamesPlayed = Convert.ToInt32(teamToken[3].ToString());
            OvertimeLosses = Convert.ToInt32(teamToken[6].ToString());
            RegulationOvertimeWins = Convert.ToInt32(teamToken[7].ToString());
            PowerPlayPercent = Convert.ToDouble(teamToken[15].ToString());
            PenaltyKillPercent = Convert.ToDouble(teamToken[19].ToString());
            GoalsAgainst = Convert.ToInt32(teamToken[9].ToString());
            GoalsFor = Convert.ToInt32(teamToken[8].ToString());
            LastTenRecord = teamToken[22].ToString();
            GoalsAgainstPerGame = Convert.ToDouble(teamToken[11].ToString());
            GoalsForPerGame = Convert.ToDouble(teamToken[10].ToString());

        }
    }
}