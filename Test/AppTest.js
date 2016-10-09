var myCode = require('../wwwroot/js/Mapfunctions.js');
var assert = require('assert');
var jsdom = require('mocha-jsdom');

describe('Apptest', function(){
    jsdom();

    before(function () {
        $ = require('jquery');
    });
    
    describe('LoadMapsByFilters_WithResultsSet_withZipcodeonly', function(){
        it('Test Condition 1. Should return search results with any zip code(38632)', function(){
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters(38632,10,'-1','-1',null,null);
            assert.equal(arr.length, 10);
        });
    });

    describe('LoadMapsByFilters_WithNoResultsSet_withvalidfilters', function(){
        it('Test condition 2. Should NOT return search results with a specific zip code(38632) and rating(1)/provider type(5)filter combination', function(){
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters(38632,10,'1','5',null,null);
            assert.equal(arr.length, 0);
        });
    });

    describe('LoadMapsByFilters_WithNoResultsSet_withInvalidAddress', function(){
        it('Test condition 3. Should NOT return search result with invalid address as special character (@) ', function(){
            // Call the exported function from the module
            var arr  = [];
			arr = myCode.LoadMapsByFilters('@',10,'-1','-1',null,null);
            assert.equal(arr.length, 0);
        });
    });
    
});