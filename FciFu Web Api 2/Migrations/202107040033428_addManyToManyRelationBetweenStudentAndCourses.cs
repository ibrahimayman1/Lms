namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addManyToManyRelationBetweenStudentAndCourses : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            CreateTable(
                "dbo.StudentCourses",
                c => new
                    {
                        StudentId = c.String(nullable: false, maxLength: 128),
                        CourseId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.StudentId, t.CourseId })
                .ForeignKey("dbo.AspNetUsers", t => t.StudentId, cascadeDelete: true)
                .ForeignKey("dbo.Courses", t => t.CourseId, cascadeDelete: true)
                .Index(t => t.StudentId)
                .Index(t => t.CourseId);
            
            AlterColumn("dbo.Courses", "InstructorId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers");
            DropForeignKey("dbo.StudentCourses", "CourseId", "dbo.Courses");
            DropForeignKey("dbo.StudentCourses", "StudentId", "dbo.AspNetUsers");
            DropIndex("dbo.StudentCourses", new[] { "CourseId" });
            DropIndex("dbo.StudentCourses", new[] { "StudentId" });
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            AlterColumn("dbo.Courses", "InstructorId", c => c.String(nullable: false, maxLength: 128));
            DropTable("dbo.StudentCourses");
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
    }
}
