using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using msrfp_3717.Data;
using msrfp_3717.Models;
using msrfp_3717.Services;

namespace msrfp_3717.Controllers
{
    public class SearchController : Controller
    {
        private ApplicationDbContext appDbctx;
        public SearchController(ApplicationDbContext ctx)
        {
          appDbctx = ctx;
        }       

        [HttpGet]
        public IActionResult SearchProvider()
        {
            var prov = new Provider();
            prov = appDbctx.Provider.First();
            return View(prov);
        }
    }
}
