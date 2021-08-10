using FciFu_Web_Api_2.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace FciFu_Web_Api_2.Controllers
{
    //[Authorize]
    [RoutePrefix("api/UsersProfile")]
    public class UsersProfileController : ApiController
    {
        [Route("getprofilepicture/{id}")]
        public IHttpActionResult Get(string id)
        {
            var context = new ApplicationDbContext();

            var image = context.Users.Single(u => u.Id == id).ProfilePicture;

            string imageInBase64String = Encoding.UTF8.GetString(image);

            return Ok(imageInBase64String);

        }

        [Route("addprofilepicture/{id}")]
        [HttpPut]
        public IHttpActionResult Put(string id, [FromBody]string path)
        {

            var context = new ApplicationDbContext();

            byte[] theBytes = System.Text.Encoding.UTF8.GetBytes(path);

            context.Users.Single(u => u.Id == id).ProfilePicture = theBytes;
            context.SaveChanges();

            return Ok();

        }

        [Route("changeusername/{id}")]
        [HttpPut]
        public IHttpActionResult Put(string id, [FromBody]dynamic data)
        {

            var context = new ApplicationDbContext();

            context.Users.Single(u => u.Id == id).FName = data.GetValue("fName").ToString();
            context.Users.Single(u => u.Id == id).LName = data.GetValue("lName").ToString();

            context.SaveChanges();


            return Ok();

        }

    }
}
