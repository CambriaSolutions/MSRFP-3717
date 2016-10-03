
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
using msrfp_3717.Models.ManageViewModels;
using Newtonsoft.Json;
namespace msrfp_3717.Controllers
{


    public class SearchController : Controller
 {

      private ApplicationDbContext appDbctx;
        public SearchController(ApplicationDbContext ctx)
        {
          appDbctx = ctx;
        }       

      //  [HttpGet]
        // public IActionResult SearchProvider()
        // {
        //     var prov = new Provider();
        //     prov = appDbctx.Provider.First();
        //     return View(prov);
        // }
 [HttpGet]
      public IActionResult SearchProvider()
        {
         
             return View();
        }

// [HttpGet]
//        public string GetProvider(string location)
//         {
     
//           var prov = new List<Provider>() ;
//              prov = (from provider in appDbctx.Provider
//                     where   provider.PhysicalCity.ToUpper() == location.ToUpper() || provider.PhysicalZipCode ==location
//                   // where provider.PhysicalZipCode == zip
//                     select provider).ToList();
      
//             return JsonConvert.SerializeObject(prov);
//         }

        [HttpGet]
       public string GetProvider(string location, string QualityRating)
        {
     

var query = appDbctx.Provider.AsQueryable<Provider>();

if (! String.IsNullOrEmpty(location)) {
    query = from provider in query
            where provider.PhysicalCity.ToUpper() == location.ToUpper() || provider.PhysicalZipCode ==location
            select provider;
}
if (! String.IsNullOrEmpty(QualityRating)) {
    query = from provider in query
            where QualityRating == "Yes" ? provider.QualityRating > 0 : provider.QualityRating <0 
            select provider;
}

// this will cause the query to execute get the materialized results
var result = query.ToList();
      
            return JsonConvert.SerializeObject(result);
        }
 } 
}

