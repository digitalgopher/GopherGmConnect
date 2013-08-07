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
        public int Minutes { get; set; }
        public int Shots { get; set; }
        public int GameWinningGoals { get; set; }
        public int Hits { get; set; }
        public double ShootingPercentage { get; set; }
        
    }
}