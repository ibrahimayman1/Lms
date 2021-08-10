using FciFu_Web_Api_2.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace FciFu_Web_Api_2.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Courses")]
    public class CoursesController : ApiController
    {
        [Route("getcourses/{id}")]
        public IHttpActionResult Get(string id)
        {
            var context = new ApplicationDbContext();

            var courses = context.Courses.Where(c => c.InstructorId == id).ToList();

            //context.Courses.SingleOrDefault(c => c.Id == id).Student;

            return Ok(courses);
            
        }

        [Route("getcoursebycode/{code}")]
        public IHttpActionResult GetCourseByCode(string code)
        {
            var context = new ApplicationDbContext();

            var codeOfCourse = context.Courses.FirstOrDefault(C => C.Code == code);

            return Ok(codeOfCourse);

        }

        [Route("getcoursemembers/{id}")]
        public IHttpActionResult GetCourseMembers(int id)
        {
            var context = new ApplicationDbContext();


            //var course = context.Courses.SingleOrDefault(c => c.Id == id);

            //context.Users.Include("Courses").FirstOrDefault(u => u.FName == "maik").Courses.Add(course);

            //context.SaveChanges();

            var studentsCourse = context.Courses.Include("Student").SingleOrDefault(c => c.Id == id).Student;
            
            var listOfUsers = studentsCourse.Select(r => new
            {
                FName = r.FName,
                LName = r.LName,
                ProfilePicture = Encoding.UTF8.GetString(r.ProfilePicture)

            });


            return Ok(listOfUsers.ToList());

        }

        [Route("add/{id}")]
        [HttpPut]
        public IHttpActionResult Put(string id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            var course = new Course
            {
                Name = data.GetValue("name"),
                Description = data.GetValue("description"),
                Code = data.GetValue("code"),
                InstructorId = id
            };


            //course.ApplicationUser_id = context.Users.SingleOrDefault(u => u.Id == id);

            context.Courses.Add(course);
            context.SaveChanges();

            return Ok();

        }



        [Route("delete/{id}")]
        public void Delete(int id)
        {
            var context = new ApplicationDbContext();
            var course = context.Courses.SingleOrDefault(c => c.Id == id);
            context.Courses.Remove(course);
            context.SaveChanges();

        }
    }
}
