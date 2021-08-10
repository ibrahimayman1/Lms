namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HH : DbMigration
    {
        public override void Up()
        {
            RenameTable("dbo.Quizzes", "dbo.Quizs");
        }
        
        public override void Down()
        {
        }
    }
}
