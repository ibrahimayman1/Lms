using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FciFu_Web_Api_2.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ApplicationUser Instructor { get; set; }
        public ICollection<Assignment> Assignments { get; set; }
        public string InstructorId { get; set; }
        public ICollection<ApplicationUser> Student { get; set; }
        public ICollection<Quiz> Quizzes { get; set; }

    }
}