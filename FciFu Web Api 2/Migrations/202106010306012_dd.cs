namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dd : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "ApplicationUserId" });
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Courses", "ApplicationUserId");
            AddForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "ApplicationUserId" });
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Courses", "ApplicationUserId");
            AddForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
    }
}
