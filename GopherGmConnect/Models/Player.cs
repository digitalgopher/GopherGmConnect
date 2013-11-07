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
        /*
         * 
         * When a player is returned, the potential is an enum. So 
         * we're going to emulate the enum before sending it out to the page. 
         *                             
         * 8 : 1,
        7 : 1.5,
        6 : 2,
        5 : 2.5,
        4 : 3,
        3 : 3.5,
        2 : 4,
        1 : 4.5,
        0 : 5
         * 
         * 
         */
        private double _potential { get; set; }
        public double Potential
        {
            get
            {
                switch ((int)_potential)
                {
                    case 0:
                return 5;
                    case 1:
                return 4.5;
                    case 2:
                return 4;
                    case 3:
                return 3.5;
                    case 4:
                return 3;
                    case 5:
                return 2.5;
                    case 6:
                return 2;
                    case 7:
                return 1.5;
                    case 8:
                return 1;
                    default:
                        return 9;
                }
            }
            set { _potential = value; }
        }


        public int PotentialColor { get; set; }

        public int CountryCode { get; set; }

        public bool IsInjured { get; set; }
        public int InjuryType { get; set; }
        public int InjuryLength { get; set; }

        public int PlayerArtID { get; set; }
        public int Team { get; set; }
        public int TeamId { get; set; }
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

        public bool IsOnMainRoster { get; set; }

        private int _salary { get; set; }
        public int Salary
        {
            get
            {
                return _salary;
            }
            set
            {
                _salary = value;
                SalaryReadable = GetProperContract(_salary);
            }
        }

        public int SalaryReadable { get; private set; }
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
        }

        private int GetProperContract(int contractEnum)
        {
            if (contractEnum == 0)
            {
                return 0;
            }
            var count = 105;
            var salary = 525000;
            while (count != contractEnum)
            {
                salary += 5000;
                count++;
            }
            return salary;
        }
    }
}