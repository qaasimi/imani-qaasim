/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

    /**********************************************
     * Package data and constructor objects
     **********************************************/

     // Package data array (simulated data source, such as JSON or database recordset)
     var data = [
         {
             name: 'Rainbow Brackets',
             description: 'This extension provides rainbow colors for round brackets, square brackets, and curly brackets.',
             author: '2gua',
             url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets&ssr=false#overview',
             downloads: 454231,
             stars: 64,
             price: 'Free',
             selector: 'p1'
         },
         {
            name: 'open in browser',
            description: 'This allows you to open the current file in your default browser or application.',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
            downloads: 1650822,
            stars: 40,
            price: 'Free',
            selector: 'p2'
         },
         {
            name: 'GitLens',
            description: 'Seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands.',
            author: 'Eric Amodio',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            downloads: 4701325,
            stars: 350,
            price: 'Free',
            selector: 'p3'
         }
     ];

     // Visual Studio Code Package constructor function
     function Package(data) {
         this.name = data.name;
         this.description = data.description;
         this.author = data.author;
         this.url = data.url;
         this.downloads = data.downloads;
         this.stars = data.stars;
         this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

         this.getFormattedDownloads = function () {
             return this.downloads.toLocaleString();
         };
         
         this.getFormattedStars = function () {
             return this.stars.toLocaleString();
         };

        }

    /****************************************
     * Utility functions
     ****************************************/

     //Return today's date, formatted
     var getTodaysDate = function() {
         var today = new Date();
         return today.toDateString();
     };

     // Return DOM element by id.
     // We're just wrapping document.getElmentById
     // in a shorthand function. If this seems confusing,
     // then jusr replace getEL with document.getElementById
     // in the writePackageInfo function.
     var getEL = function (id) {
         return document.getElementById(id);
     }

     /**
      * Write's the package objetc's date to the appropriate
      * DOM elements utilizing the package selector property.
      * @param {Package} package Package object
      * @return {void}
      */
     var writePackageInfo = function(package) {
         //Get refernece to DOM elements
         var selector = package.selector,
         nameEL = getEL(selector + '-name'),
         descEL = getEL(selector + '-description'),
         authEL = getEL(selector + '-author'),
         downloadEL = getEL(selector + '-downloads'),
         starsEL = getEL(selector + '-stars');

         // Write package data to DOM elements
         nameEL.textContent = package.name;
         descEL.textContent = package.description;
         authEL.textContent = package.author;
         downloadEL.tectContent = package.getFormattedDownloads();
         starsEL.textContent = package.getFormattedStars();
     }

     /*****************************************************
      * Utilize package data and constructor objects to
      * construct each package, then add package data to
      * the page via DOM functions.
      *****************************************************/

      // Write date
      dateEL = getEL('date');
      dateEL.textContent = getTodaysDate();

      /**
       * Write package data one-by-one or with a for loop
       * Remember to commment out the one you don't use.
       */

       // Write package data one-by-one
       var rainbowBrackets = new Package(data[0]);
       writePackageInfo(rainbowBrackets);

       var openInBrowser = new Package(data[1]);
       writePackageInfo(openInBrowser);

       var gitLens = new Package(data[2]);
       writePackageInfo(gitLens);

       // continue with eight more packages... OR

       // Write package data using for loop
       // for (var i = 0; i < data.length; i++) {
       //   var package =  new Package(data(i))
       //   writePackageInfo(package);
       // }

    }());