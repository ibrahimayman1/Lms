namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class makeSomeColumnsInAssignmentsNull : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Assignments", "Points", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Assignments", "Points", c => c.Int(nullable: false));
        }
    }
}
