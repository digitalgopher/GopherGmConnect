using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class PlayerRatings
    {
        //Goalie stats
        public int Breakaways { get; set; }
        public int FiveHole { get; set; }
        public int Angles { get; set; }
        public int GloveHigh { get; set; }
        public int GloveLow { get; set; }
        public int StickHigh { get; set; }
        public int StickLow { get; set; }
        //public int Passing {get; set; }
        //public int PuckControl {get; set; }
        public int PuckPlayingFreq { get; set; }
        public int ReboundControl { get; set; }
        public int ShotRecovery { get; set; }
        public int PokeCheck { get; set; }
        public int Vision { get; set; }

        public int Strength { get; set; }
        public int Agility { get; set; }
        public int Durability { get; set; }
        public int Endurance { get; set; }
        public int Speed { get; set; }
        public int Poise { get; set; }
        public int Passing { get; set; }
        public int Deking { get; set; }
        public int HandEye { get; set; }
        public int OffAwareness { get; set; }
        public int PuckControl { get; set; }
        public int SlapShotAccuracy { get; set; }
        public int SlapShotPower { get; set; }
        public int WristShotAccuracy { get; set; }
        public int WristShotPower { get; set; }
        public int Aggressiveness { get; set; }
        public int BodyChecking { get; set; }
        public int DefAwareness { get; set; }
        public int Discipline { get; set; }
        public int Faceoffs { get; set; }
        public int Fighting { get; set; }
        public int ShotBlocking { get; set; }
        public int StickChecking { get; set; }
        public int Acceleration { get; set; }
        public int Balance { get; set; }
    }
}