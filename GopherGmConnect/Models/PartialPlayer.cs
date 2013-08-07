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
        public string FirstName {get; set; }
        public string LastName {get; set; }
        public string Position {get; set; }
        public int Age {get; set; }
        public int Salary {get; set; }
        public int YearsLeft {get; set; }
        public bool IsTwoWay {get; set; }
        public int TradeValue {get; set; }
        public int ContractSigned {get; set; }
        public int PlayerType {get; set; }
        public int Potential {get; set; }
        public int PotentialColor {get; set; }
        public bool IsInjured { get; set; }
        public int InjuryLength { get; set; }
    }
}