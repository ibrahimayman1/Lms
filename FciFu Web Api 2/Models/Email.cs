using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fcifu_Web_Api.Models
{
    public class Email
    {
        public string To { get; set; }
        public string Body { get; set; }
        public string Subject { get; set; }
    }
}