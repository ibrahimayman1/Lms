namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dds : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "ApplicationUserId" });
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Courses", "ApplicationUserId");
            AddForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers", "Id");
        }
    }
}
