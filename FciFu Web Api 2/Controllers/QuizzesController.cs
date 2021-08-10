using FciFu_Web_Api_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FciFu_Web_Api_2.Controllers
{

    [RoutePrefix("api/quizzes")]
    public class QuizzesController : ApiController
    {
        [Route("getquizzes/{id}")]
        public IHttpActionResult Get(int id)
        {
            var context = new ApplicationDbContext();

            var quizzes = context.Quizzes.Where(q => q.CourseId == id);

            var listOfQuizzes = quizzes.Select(q => new
            {
                Id = q.Id,
                name = q.Name,
                instructions = q.Instructions,
                points = q.Points,
                startDate = q.StartDate,
                courseId = q.CourseId,
                duration = q.Duration

            });


            return Ok(listOfQuizzes.ToList());

        }

        [Route("addquiz/{id}")]
        [HttpPost]
        public IHttpActionResult Post(string id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            var quiz = new Quiz
            {
                Name = data.GetValue("name"),
                Duration = data.GetValue("duration"),
                StartDate = data.GetValue("startDate"),
                Points = data.GetValue("points"),
                Instructions = data.GetValue("instructions"),
                CourseId = data.GetValue("courseId")
            };

            context.Quizzes.Add(quiz);
            context.SaveChanges();

            return Ok();

        }

        [Route("updatequiz/{id}")]
        [HttpPost]
        public IHttpActionResult Post(int id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            var quiz = context.Quizzes.SingleOrDefault(a => a.Id == id);
            quiz.Name = data.GetValue("name");
            quiz.Points = data.GetValue("points");
            quiz.Instructions = data.GetValue("instructions");
            quiz.Duration = data.GetValue("duration");
            quiz.StartDate = data.GetValue("startDate");
            context.SaveChanges();

            return Ok();

        }

        [Route("delete/{id}")]
        public void Delete(int id)
        {
            var context = new ApplicationDbContext();
            var quiz = context.Quizzes.SingleOrDefault(c => c.Id == id);
            context.Quizzes.Remove(quiz);
            context.SaveChanges();

        }
    }
}
