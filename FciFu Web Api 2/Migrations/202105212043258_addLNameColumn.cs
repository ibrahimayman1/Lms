namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addLNameColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "LName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "LName");
        }
    }
}
