using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using msrfp_3717.Models.ManageViewModels;
using Newtonsoft.Json;

namespace msrfp_3717.Controllers
{


    public class SearchController : Controller
 {
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