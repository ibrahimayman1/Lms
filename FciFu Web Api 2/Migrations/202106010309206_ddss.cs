namespace FciFu_Web_Api_2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ddss : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Courses");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Courses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(),
                        Name = c.String(),
                        Description = c.String(),
                        ApplicationUserId = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
    }
}
