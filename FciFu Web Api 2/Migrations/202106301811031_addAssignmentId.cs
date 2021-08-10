namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addAssignmentId : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Assignments", "Assignment_Id", c => c.Int());
            CreateIndex("dbo.Assignments", "Assignment_Id");
            AddForeignKey("dbo.Assignments", "Assignment_Id", "dbo.Assignments", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignments", "Assignment_Id", "dbo.Assignments");
            DropIndex("dbo.Assignments", new[] { "Assignment_Id" });
            DropColumn("dbo.Assignments", "Assignment_Id");
        }
    }
}
