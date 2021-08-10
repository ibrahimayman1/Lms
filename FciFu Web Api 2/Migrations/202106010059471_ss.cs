namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ss : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "ApplicationUser_id", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "ApplicationUser_id" });
            RenameColumn(table: "dbo.Courses", name: "ApplicationUser_id", newName: "ApplicationUserId");
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String(nullable: true, maxLength: 128));
            CreateIndex("dbo.Courses", "ApplicationUserId");
            AddForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.Courses", new[] { "ApplicationUserId" });
            AlterColumn("dbo.Courses", "ApplicationUserId", c => c.String(maxLength: 128));
            RenameColumn(table: "dbo.Courses", name: "ApplicationUserId", newName: "ApplicationUser_Id");
            CreateIndex("dbo.Courses", "ApplicationUser_Id");
            AddForeignKey("dbo.Courses", "ApplicationUser_id_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
