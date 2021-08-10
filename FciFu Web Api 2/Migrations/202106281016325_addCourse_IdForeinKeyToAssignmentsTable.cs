namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addCourse_IdForeinKeyToAssignmentsTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses");
            DropIndex("dbo.Assignments", new[] { "Course_Id" });
            AlterColumn("dbo.Assignments", "Course_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Assignments", "Course_Id");
            AddForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses");
            DropIndex("dbo.Assignments", new[] { "Course_Id" });
            AlterColumn("dbo.Assignments", "Course_Id", c => c.Int());
            CreateIndex("dbo.Assignments", "Course_Id");
            AddForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses", "Id");
        }
    }
}
