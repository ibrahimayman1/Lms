namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class blaaa : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "InstructorId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            DropColumn("dbo.Courses", "InstructorId");
        }
    }
}
