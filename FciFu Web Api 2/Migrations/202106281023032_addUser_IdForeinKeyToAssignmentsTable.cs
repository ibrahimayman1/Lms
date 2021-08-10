namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addUser_IdForeinKeyToAssignmentsTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Assignments", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Assignments", new[] { "User_Id" });
            AlterColumn("dbo.Assignments", "User_Id", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Assignments", "User_Id");
            AddForeignKey("dbo.Assignments", "User_Id", "dbo.AspNetUsers", "Id", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignments", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Assignments", new[] { "User_Id" });
            AlterColumn("dbo.Assignments", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Assignments", "User_Id");
            AddForeignKey("dbo.Assignments", "User_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
