namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class makeSomeColumnsInAssignmentsNullss : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Assignments", "Name", c => c.String(nullable: true));
        }
        
        public override void Down()
        {
        }
    }
}
