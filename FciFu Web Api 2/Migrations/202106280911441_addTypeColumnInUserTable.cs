namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addTypeColumnInUserTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "Type", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Type");
        }
    }
}
