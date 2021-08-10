namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class b : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Courses", name: "ApplicationUser_Id", newName: "ApplicationUser_id");
            RenameIndex(table: "dbo.Courses", name: "IX_ApplicationUser_Id", newName: "IX_ApplicationUser_id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Courses", name: "IX_ApplicationUser_id_Id", newName: "IX_ApplicationUser_Id");
            RenameColumn(table: "dbo.Courses", name: "ApplicationUser_id_Id", newName: "ApplicationUser_Id");
        }
    }
}
