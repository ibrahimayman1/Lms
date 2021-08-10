using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FciFu_Web_Api_2.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Duration { get; set; }
        public DateTime StartDate { get; set; }
        public int Points { get; set; }
        public string Instructions { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }

    }
}