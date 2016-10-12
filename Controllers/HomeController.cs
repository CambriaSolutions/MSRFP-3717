using Microsoft.AspNetCore.Mvc;

namespace msrfp_3717.Controllers
{
    //Controller class for home views.
    public class HomeController : Controller
    {
        //Default Index action method.
        public IActionResult Index()
        {
            return View();
        }

        //This action method loads the about contact view page.
        public IActionResult About() 
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        //Placeholder action method for contact page.
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        //Placeholder action method for error handling
        public IActionResult Error()
        {
            return View();
        }
    }
}
