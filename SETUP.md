Cambria Solutions MSDHS Prototype
===============================

A Microsoft Open Source [NETCORE](https://www.microsoft.com/net/core/platform) App.  Built using a lightweight [Yeoman](http://yeoman.io/) scaffolding framework
leveraging the power of [Bower](https://bower.io/).

Quickstart
----------

If using an Azure workspace, create a new webapp with the following Github
repository and the name 'msrfp-3717':

https://github.com/CambriaSolutions/MSRFP-3717

If NOT using Azure or running locally, manually clone the repository:

git clone https://github.com/CambriaSolutions/MSRFP-3717

Install the .NET CORE library SDK based on your deployment platform (iOS/Linux/Docker)
[.NET Core](https://www.microsoft.com/net/core#windows):

Then run the following commands to bootstrap your environment.

    cd to the application root directory (ie: C:/webapp/msrfp-3717)
    dotnet restore
    dotnet run

The server will start and be accessible on the localhost environment on port 5000
[Your Localhost](http://localhost:5000) http://localhost:500

Running Tests
-------------

Need to add this section

Deployment
----------

After committing your changes, simply push them to Github and Mocha will re-run the tests in a sandbox and deploy them to Azure if 
successful:

    git commit -m "Some new changes"
    git push origin head:master
