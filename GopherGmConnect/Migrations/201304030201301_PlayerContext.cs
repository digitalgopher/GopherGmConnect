namespace GopherGmConnect.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PlayerContext : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Players", "ImageUrl", c => c.String());
            AddColumn("dbo.Players", "NhlId", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Players", "NhlId");
            DropColumn("dbo.Players", "ImageUrl");
        }
    }
}
