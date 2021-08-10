namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeColumnNameInAssignmentTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Assignments", name: "Instructor_Id", newName: "User_Id");
            RenameIndex(table: "dbo.Assignments", name: "IX_Instructor_Id", newName: "IX_User_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Assignments", name: "IX_User_Id", newName: "IX_Instructor_Id");
            RenameColumn(table: "dbo.Assignments", name: "User_Id", newName: "Instructor_Id");
        }
    }
}
