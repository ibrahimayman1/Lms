namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addAssigmentsColumn : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Assignments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Body = c.String(nullable: false),
                        Points = c.Int(nullable: false),
                        Instructor_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Instructor_Id)
                .Index(t => t.Instructor_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignments", "Instructor_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Assignments", new[] { "Instructor_Id" });
            DropTable("dbo.Assignments");
        }
    }
}
