using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FciFu_Web_Api_2.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Body { get; set; }
        public int Points { get; set; }
        public ApplicationUser User { get; set; }
        public string User_Id { get; set; }
        public Course Course { get; set; }
        public int Course_Id { get; set; }
        public int? Assignment_Id { get; set; } /*added*/
        [ForeignKey("Assignment_Id")]   /*added*/
        public virtual Assignment AssignmentId { get; set; }



    }
}