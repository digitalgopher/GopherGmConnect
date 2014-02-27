using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class PlayerStats
    {
        public int Year { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int GamesPlayed { get; set; }
        public int Points
        {
            get
            {
                return Goals + Assists;
            }
        }
        public int PlusMinus { get; set; }
        public int FaceoffsWon { get; set; }
        public double FaceoffPercentage { get; set; }
        public int FaceoffsTaken { get; set; }
        public double Minutes { get; set; }
        public double MinutesPerGameAverage
        {
            get
            {
                return Math.Round((double)Minutes / GamesPlayed, 1);
            }
        }
        public int Shots { get; set; }
        public int GameWinningGoals { get; set; }
        public int Hits { get; set; }
        public double ShootingPercentage { get; set; }
        public int PowerPlayGoals { get; set; }

        public int GoalsAgainst { get; set; }

        public double GoalsAgainstAverage { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }

        public int ShotsAgainst { get; set; }
        public double SavePercentage { get; set; }
        public int Shutouts { get; set; }

    }
}