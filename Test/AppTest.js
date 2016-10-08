//var chai = require('chai');
var assert = require('assert');
var JsClass = require('../Scripts/commonjs.js');
var addme = JsClass.add;
var LoadbyFilters = JsClass.LoadMapsByFiltersByParm;
//test untit test case
describe('addme', function () {
    it('If array.Length is greater than 0 then pass else fail', function () {
        
        var res = addme(3,4);

        assert.equal(res,7);
    });

    
});

describe('LoadbyFilters', function () {
    it('Fusion table should return value in to array on a valid address', function () {        
       //res should be an array base on the parm. Change the parameter accordigly
        var res = LoadbyFilters(3,4,5);
        //check if the array is not equal to -1
        assert.equal(-1,res);
    });
});
