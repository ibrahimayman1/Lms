using System.Collections.Generic;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace FciFu_Web_Api_2.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {

        public string FName { get; set; }

        public string LName { get; set; }

        public byte[] ProfilePicture { get; set; }

        public int Type { get; set; }

        public ICollection<Course> Courses { get; set; }

        public ICollection<Assignment> Assignments { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUser>().
                HasMany(u => u.Courses)
                .WithRequired(c => c.Instructor)
                .HasForeignKey(c => c.InstructorId);

            modelBuilder.Entity<Assignment>().
                HasRequired(a => a.Course)
                .WithMany(a => a.Assignments)
                .HasForeignKey(a => a.Course_Id);

            modelBuilder.Entity<Assignment>().
                HasRequired(a => a.User)
                .WithMany(a => a.Assignments)
                .HasForeignKey(a => a.User_Id);

            modelBuilder.Entity<Course>().
            HasMany(c => c.Quizzes)
            .WithRequired(q => q.Course)
            .HasForeignKey(q => q.CourseId);


            modelBuilder.Entity<ApplicationUser>().
                HasMany(a => a.Courses)
                .WithMany(a => a.Student)
                .Map(m =>
                {
                    m.ToTable("StudentCourses");
                    m.MapLeftKey("StudentId");
                    m.MapRightKey("CourseId");
                });

            modelBuilder.Entity<Assignment>().
                Property(a => a.Body).IsOptional();

            modelBuilder.Entity<Assignment>().
               Property(a => a.Points).IsOptional();

            modelBuilder.Entity<Assignment>().
              Property(a => a.Name).IsOptional();

            modelBuilder.Entity<Quiz>().
              ToTable("Quizzes");

            //modelBuilder.Entity<Assignment>().
            //  Property(a => a.Assignment_Id).IsOptional();

        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }

    }
}