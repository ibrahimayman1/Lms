namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class makeAssignment_IdOptional : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Assignments", new[] { "Assignment_Id" });
            AlterColumn("dbo.Assignments", "Assignment_Id", c => c.Int());
            CreateIndex("dbo.Assignments", "Assignment_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Assignments", new[] { "Assignment_Id" });
            AlterColumn("dbo.Assignments", "Assignment_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Assignments", "Assignment_Id");
        }
    }
}
