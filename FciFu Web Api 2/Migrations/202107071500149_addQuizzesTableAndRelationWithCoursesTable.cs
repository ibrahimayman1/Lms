namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addQuizzesTableAndRelationWithCoursesTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Quizs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Duration = c.DateTime(nullable: false),
                        StartDate = c.DateTime(nullable: true),
                        Points = c.Int(nullable: false),
                        Instructions = c.String(),
                        CourseId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Courses", t => t.CourseId, cascadeDelete: true)
                .Index(t => t.CourseId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Quizs", "CourseId", "dbo.Courses");
            DropIndex("dbo.Quizs", new[] { "CourseId" });
            DropTable("dbo.Quizs");
        }
    }
}
