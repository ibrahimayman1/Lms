using Fcifu_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace Fcifu_Web_Api.Controllers
{
    public class EmailController : ApiController
    {
        public IHttpActionResult SendMail(Email em)
        {
            string subject = em.Subject;
            string body = em.Body;
            string to = em.To;

            MailMessage sendMail = new MailMessage();
            sendMail.From = new MailAddress("bolboleldes@gmail.com");
            sendMail.To.Add(to);
            sendMail.Subject = subject;
            sendMail.Body = body;
            sendMail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient("smtp.gmail.com");
            smtp.UseDefaultCredentials = true;
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.Credentials = new System.Net.NetworkCredential("bolboleldes@gmail.com", "desso8yr");
            smtp.Send(sendMail);
            return Ok();

        }
    }
}
