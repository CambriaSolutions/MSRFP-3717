using Microsoft.AspNetCore.Mvc;
namespace msrfp_3717.Controllers
{
    //Controller for search view  
    public class SearchController : Controller
    {
      //Action method for Provider search view.
      //This action method gets called by default when application starts to display the provider search page.
      [HttpGet]
      public IActionResult SearchProvider()
      {
        return View();
      }
    } 
}
