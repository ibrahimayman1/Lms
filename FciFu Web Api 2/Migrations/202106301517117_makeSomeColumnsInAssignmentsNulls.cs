namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class makeSomeColumnsInAssignmentsNulls : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Assignments", "Body", c => c.String(nullable:true));
        }
        
        public override void Down()
        {
        }
    }
}
