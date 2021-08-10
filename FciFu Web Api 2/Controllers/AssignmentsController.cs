using FciFu_Web_Api_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FciFu_Web_Api_2.Controllers
{
    //[Authorize]
    [RoutePrefix("api/assignments")]
    public class AssignmentsController : ApiController
    {
        [Route("getassignments/{id}")]
        public IHttpActionResult Get(int id)
        {

            var context = new ApplicationDbContext();

            var assignments = context.Assignments.Where(a => a.Course_Id == id);

            return Ok(assignments);

        }

        [Route("addassignment/{id}")]
        [HttpPost]
        public IHttpActionResult Post(string id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            var assignment = new Assignment
            {
                Name = data.GetValue("name"),
                Body = data.GetValue("body"),
                Points = data.GetValue("points"),
                User_Id = data.GetValue("userId"),
                Course_Id = data.GetValue("courseId")

            };

            context.Assignments.Add(assignment);
            context.SaveChanges();

            return Ok();

        }

        [Route("updateassignment/{id}")]
        [HttpPost]
        public IHttpActionResult Post(int id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            var assignment = context.Assignments.SingleOrDefault(a => a.Id == id);
            assignment.Name = data.GetValue("name");
            assignment.Points = data.GetValue("points");
            assignment.Body = data.GetValue("body");
            context.SaveChanges();

            return Ok();

        }

        [Route("deleteassignment/{id}")]
        public void Delete(int id)
        {
            var context = new ApplicationDbContext();
            var assignment = context.Assignments.SingleOrDefault(a => a.Id == id);

            context.Assignments.Remove(assignment);
            context.SaveChanges();

        }
    }
}
