//This javascript file defines all automated test cases to be run during build and deployment steps.
//Each test case runs the core javascript function that does the provider search and compares the results
//with the defined test data.

var myCode = require('../wwwroot/js/Mapfunctions.js');
var assert = require('assert');
var jsdom = require('mocha-jsdom');

//Test data
//Provider name returned in the search result is used to pass/fail tests.
var tc1_data = 'HERNANDO HEADSTART';
var tc5_data = 'ALMA GARCIA';
var tc6_data = '11TH STREET CHILD DEVELOPMENT CENTER';
var tc7_data = 'KARINA MARIE ALVAREZ';
var tc8_data = 'ALLIANCE AFTER SCHOOL CARE AT BONHAM';
var tc9_data = '1.2..ME...CHILDCARE';

describe('Apptest', function(){
    jsdom();

    before(function () {
        $ = require('jquery');
    });
    
    describe('Run Automated Unit Tests for MSRFP-3717', function(){
        //Test Condition 1
        it('Test Condition 1. Should return search results with a zip code(38632) only', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters(38632,10,'-1','-1',null,null);
            assert.equal(arr[0][0], tc1_data);
        });

        //Test Condition 2
        it('Test condition 2. Should NOT return search results with a zip code(38632) ,rating(1-Rated) and provider type(6-Relative In-Home)filter combination', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters(38632,10,'1','6',null,null);
            assert.equal(arr.length, 0);
        });

        //Test Condition 3
        it('Test condition 3. Should NOT return search result with invalid address as special character (@) ', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('@',10,'-1','-1',null,null);
            assert.equal(arr.length, 0);
        });

        //Test Condition 4
        it('Test Condition 4. Should return the expected number of records set by the search filter with zip code(38632) and Number of records(15).', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('38632',15,'-1','-1',null,null);
            assert.equal(arr.length, 15);
        });

        //Test Condition 5
        it('Test Condition 5. Should filter records set by the search filter with zip code(38632) and Provider Type(Group Home).', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('38632',10,'-1','3',null,null);
            assert.equal(arr[0][0], tc5_data);
        });

        //Test Condition 6
        it('Test Condition 6. Should filter records set by the search filter with zip code(38632) and Provider Type(Group Home) and Special Needs(YES)', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('38632',10,'-1','3',null,'YES');
            assert.equal(arr[0][0], tc6_data);
        });

        //Test Condition 7
        it('Test Condition 7. Should filter records set by the search filter with zip code(38632) and Provider Type(Non-Relative Out of Home) and Availability(YES)', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('38632',10,'-1','7','YES',null);
            assert.equal(arr[0][0], tc7_data);
        });

        //Test Condition 8
        it('Test Condition 8. Should filter records set by the search filter with zip code(38632) and Provider Type(Slot Conytractor) and Rating(Rated)', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('38632',10,'1','2',null,null);
            assert.equal(arr[0][0], tc8_data);
        });

        //Test Condition 9
        it('Test Condition 9. Should be able to search by a specific address(2391 MEMPHIS STREET HERNANDO 38632)', function(){
            this.timeout(15000);
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('2391 MEMPHIS STREET HERNANDO 38632',10,'-1','-1',null,null);
            assert.equal(arr[0][0], tc9_data);
        });
    });
   
});
