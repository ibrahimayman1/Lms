namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class blaaaaa : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            AlterColumn("dbo.Courses", "InstructorId", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            AlterColumn("dbo.Courses", "InstructorId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers", "Id");
        }
    }
}
