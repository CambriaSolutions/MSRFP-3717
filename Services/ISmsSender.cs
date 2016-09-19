using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msrfp_3717.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
