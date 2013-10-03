using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class Team
    {
        public string id { get; set; }
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
    }
}