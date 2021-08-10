namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addOneToManyRelationBetweenAssignmentAndCourse : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Assignments", "Course_Id", c => c.Int());
            CreateIndex("dbo.Assignments", "Course_Id");
            AddForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignments", "Course_Id", "dbo.Courses");
            DropIndex("dbo.Assignments", new[] { "Course_Id" });
            DropColumn("dbo.Assignments", "Course_Id");
        }
    }
}
