﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class Game
    {
        public string AwayTeam { get; set; }
        public string HomeTeam { get; set; }
        public int Round { get; set; }
        public int GameID { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}