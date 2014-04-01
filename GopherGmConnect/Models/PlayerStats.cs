using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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

        public PlayerStats()
        {
            
        }
        public PlayerStats(JArray statsObject, bool isSkater)
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
            if (isSkater)
            {
                GamesPlayed = statArray[4].ToObject<int>();
                FaceoffsTaken = statArray[17].ToObject<int>();
                Assists = statArray[6].ToObject<int>();
                Goals = statArray[5].ToObject<int>();
                Minutes = Math.Round(statArray[22].ToObject<double>() / 60, 0);
                PlusMinus = statArray[9].ToObject<int>();
                PowerPlayGoals = statArray[10].ToObject<int>();
                FaceoffPercentage = Math.Round(statArray[18].Value<double>() * 100, 0);
                ShootingPercentage = Math.Round(statArray[15].Value<double>() * 100, 0);
            }
            else
            {
                GamesPlayed = statArray[4].ToObject<int>();
                Wins = statArray[5].ToObject<int>();
                Shutouts = statArray[7].ToObject<int>();
                SavePercentage = statArray[10].ToObject<double>();
                ShotsAgainst = statArray[11].ToObject<int>();
                GoalsAgainst = statArray[9].ToObject<int>();
                Losses = statArray[6].ToObject<int>();
                GoalsAgainstAverage = statArray[8].ToObject<double>();
            }
        }
    }
}