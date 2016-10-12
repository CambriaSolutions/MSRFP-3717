using Microsoft.AspNetCore.Mvc;
namespace msrfp_3717.Controllers
{
    public class SearchController : Controller
    {
      [HttpGet]
      public IActionResult SearchProvider()
      {

      return View();
      }
    } 
}
