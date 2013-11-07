using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GopherGmConnect.Models
{
    public class Team
    {
        public string id { get; set; }
        //public string abr { get; set; }
        //public string city { get; set; }
        //public string fullName { get; set; }
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

        public List<Player> Players { get; set; }

        public double PowerPlayPercent { get; set; }
        public double PenaltyKillPercent { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }

        public int[] FutureSalaries { get; set; }

        public Team()
        {
            Players = new List<Player>();
            FutureSalaries = new int[5];
        }

        public void CalculateFutureSalaryCap()
        {
            var rosterToEdit = Players;
            var year = 0;
            while (year < 5)
            {
                var thisYearSalary = 0;
                
                foreach (var player in rosterToEdit)
                {
                    Console.WriteLine(player.YearsLeft);
                    Console.WriteLine(player.LastName);
                    if(player.YearsLeft > 0 && player.IsOnMainRoster) {
                        thisYearSalary += player.SalaryReadable;
                        player.YearsLeft--;
                    }
                }
                FutureSalaries[year] = thisYearSalary;
                year++;
            }
        }
    }
}