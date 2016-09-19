using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msrfp_3717.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
