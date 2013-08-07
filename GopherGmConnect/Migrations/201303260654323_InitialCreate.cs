namespace GopherGmConnect.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Players",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                        Aid = c.Int(nullable: false),
                        Overall = c.Int(nullable: false),
                        Potential = c.Int(nullable: false),
                        PotentialColor = c.Int(nullable: false),
                        Position = c.String(),
                        Weight = c.Int(nullable: false),
                        Height = c.Int(nullable: false),
                        FirstName = c.String(),
                        LastName = c.String(),
                        BirthPlace = c.String(),
                        Age = c.Int(nullable: false),
                        DraftTeam = c.Int(nullable: false),
                        DraftRound = c.Int(nullable: false),
                        DraftPosition = c.Int(nullable: false),
                        Shoots = c.Int(nullable: false),
                        Strength = c.Int(nullable: false),
                        Agility = c.Int(nullable: false),
                        Durability = c.Int(nullable: false),
                        Endurance = c.Int(nullable: false),
                        Speed = c.Int(nullable: false),
                        Poise = c.Int(nullable: false),
                        Passing = c.Int(nullable: false),
                        Deking = c.Int(nullable: false),
                        HandEye = c.Int(nullable: false),
                        OffAwareness = c.Int(nullable: false),
                        PuckControl = c.Int(nullable: false),
                        SlapShotAccuracy = c.Int(nullable: false),
                        SlapShotPower = c.Int(nullable: false),
                        WristShotAccuracy = c.Int(nullable: false),
                        WristShotPower = c.Int(nullable: false),
                        Aggressiveness = c.Int(nullable: false),
                        BodyChecking = c.Int(nullable: false),
                        DefAwareness = c.Int(nullable: false),
                        Discipline = c.Int(nullable: false),
                        Faceoffs = c.Int(nullable: false),
                        Fighting = c.Int(nullable: false),
                        ShotBlocking = c.Int(nullable: false),
                        StickChecking = c.Int(nullable: false),
                        Acceleration = c.Int(nullable: false),
                        Balance = c.Int(nullable: false),
                        Salary = c.Int(nullable: false),
                        YearsLeft = c.Int(nullable: false),
                        ContractType = c.Int(nullable: false),
                        TradeValue = c.Int(nullable: false),
                        ContractSigned = c.Int(nullable: false),
                        PlayerType = c.Int(nullable: false),
                        Breakaways = c.Int(nullable: false),
                        FiveHole = c.Int(nullable: false),
                        Angles = c.Int(nullable: false),
                        GloveHigh = c.Int(nullable: false),
                        GloveLow = c.Int(nullable: false),
                        StickHigh = c.Int(nullable: false),
                        StickLow = c.Int(nullable: false),
                        PuckPlayingFreq = c.Int(nullable: false),
                        ReboundControl = c.Int(nullable: false),
                        ShotRecovery = c.Int(nullable: false),
                        PokeCheck = c.Int(nullable: false),
                        Vision = c.Int(nullable: false),
                        Team_id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Teams", t => t.Team_id)
                .Index(t => t.Team_id);
            
            CreateTable(
                "dbo.Teams",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.Players", new[] { "Team_id" });
            DropForeignKey("dbo.Players", "Team_id", "dbo.Teams");
            DropTable("dbo.Teams");
            DropTable("dbo.Players");
        }
    }
}
