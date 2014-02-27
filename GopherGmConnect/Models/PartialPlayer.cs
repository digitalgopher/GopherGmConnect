using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class PartialPlayer
    {






        //isInjured and IsInjured beause ember doesnt' like capital letters for some reason
        public string id {get; set; }
        public int Overall { get; set; }
        public string FirstName {get; set; }
        public string LastName {get; set; }
        public string Position {get; set; }
        public int TradeValue {get; set; }
        public double Potential {get; set; }
        public string PotentialColorString { get; set; }
        public int PotentialColor {get; set; }

        public PartialPlayer(string pid, 
            int overall, 
            string first, 
            string last, 
            string position,
            int tradevalue, 
            double potential, 
            string potentialcolorstring, 
            int potentialcolor)
        {
            id = pid;
            Overall = overall;
            FirstName = first;
            LastName = last;
            Position = position;
            TradeValue = tradevalue;
            Potential = potential;
            PotentialColorString = potentialcolorstring;
            Potential = potential;
        }
    }
}