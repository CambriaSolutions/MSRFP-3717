
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

    //   private ApplicationDbContext appDbctx;
    //     public SearchController(ApplicationDbContext ctx)
    //     {
    //       appDbctx = ctx;
    //     }       

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

[HttpGet]
       public string GetProvider()
        {
        
        List<SearchProviderViewModel> lstmodel = new List<SearchProviderViewModel>();

       SearchProviderViewModel obj = new SearchProviderViewModel();
       obj.ProviderName = "Test";
       obj.ProviderAddress = "1111";
       obj.County = "County1";
       lstmodel.Add(obj);
       obj = new SearchProviderViewModel();
        obj.ProviderName = "Test1";
       obj.ProviderAddress = "2222";
       obj.County = "County2";
       lstmodel.Add(obj);
      obj = new SearchProviderViewModel();
        obj.ProviderName = "Test2";
       obj.ProviderAddress = "3333";
       obj.County = "County3";
       lstmodel.Add(obj);
      obj = new SearchProviderViewModel();
        obj.ProviderName = "Test3";
       obj.ProviderAddress = "4444";
       obj.County = "County4";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test31";
       obj.ProviderAddress = "44442";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test32";
       obj.ProviderAddress = "44444";
       obj.County = "County5";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test33";
       obj.ProviderAddress = "44444";
       obj.County = "County6";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test343";
       obj.ProviderAddress = "44445";
       obj.County = "County7";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test365";
       obj.ProviderAddress = "4444645";
       obj.County = "County8";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test3454";
       obj.ProviderAddress = "44444545";
       obj.County = "County9";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test3645";
       obj.ProviderAddress = "444455454";
       obj.County = "County10";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test355445";
       obj.ProviderAddress = "44444545";
       obj.County = "County11";
       lstmodel.Add(obj);
        obj = new SearchProviderViewModel();
        obj.ProviderName = "Test334";
       obj.ProviderAddress = "44445644";
       obj.County = "County12";
       lstmodel.Add(obj);
      
            return JsonConvert.SerializeObject(lstmodel);
        }
 }
 }

