function LoadMapsByFilters(enteredLocation,facilitycount,qualityrating,providertype,availability,specialneeds) {
     
     var arr = [];
     var latlng = getLocationCoordinate(enteredLocation);
     var lat = latlng.lat;
     var lng = latlng.lng;
     var mapresults;

   var url = 'https://www.googleapis.com/fusiontables/v2/query/?sql=SELECT%20PROVIDERNAME,LICENSETYPE,PROVIDERTYPEDESCRIPTION,QUALITYRATING,PROVIDERCAPACITY,STREETADDRESS,PHYSICALCITY,PHYSICALZIPCODE,COUNTYNAME,PHONENUMBER,AVAILABILITY,SPECIALNEEDS,LOCATIONLATITUDE,LOCATIONLONGITUDE%20FROM%201LJf1_wwE143AcOetenp8utlpTielLEDvWbbGw71A%20WHERE%20LICENSETYPE%20IN(%27LICENSED%27,%27UNLICENSED%27)%20'

     // WHERE%20ST_INTERSECTS(LOCATIONWITHOUTNAME,%20CIRCLE(LATLNG(' + lat + ',' + lng + '),' + radius + '))'
    var urlorderby = '%20ORDER%20BY%20ST_DISTANCE(LOCATIONWITHOUTNAME,LATLNG(' + lat + ',' + lng + '))%20LIMIT%20' + facilitycount;


     url = providertype != "-1" ? url + 'and PROVIDERTYPE=' + providertype + " " : url;
     url = (qualityrating == 0 || qualityrating == "-1") ? url : url + 'and QUALITYRATING>0 ';

     url = (availability != null) ? url + "and AVAILABILITY='" + availability + "' " : url;
     url = (specialneeds != null) ? url + "and SPECIALNEEDS='" + specialneeds + "'" : url;  
     url = url + urlorderby;
        url = (url != null) ? url + '&key=AIzaSyAJDVkvbS5v9hknmJeJx_hVnAeIj3jjpM0' : "";

      $.ajax({
         type: 'GET',
         url: url,
         data: { location: enteredLocation },
         dataType: 'json',
         async: false,
         success: function (data) {

             mapresults = data;

         },
         error: function (jqXHR, textStatus, errorThrown) {
             // alert(jqXHR.status + ",  " + jqXHR.statusText + ",  " + textStatus + ",  " + errorThrown);
         }
     });
    
    //returning false if no results found
     if (!mapresults || !mapresults.rows) {
         return arr;
     }
     else{
        new_rows = mapresults.rows.map(function (row) {

            arr.push([row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13]]);

        })
        return arr;
     }
 }

function getLocationCoordinate(address) {

    var position = {};
    $.ajax({
        url: 'http://maps.google.com/maps/api/geocode/json',
        type: 'GET',
        data: {
            address: address,
            sensor: false
        },
        async: false,
        success: function (result) {

            try {
                if (result.results[0]) {
                    position.lat = result.results[0].geometry.location.lat;
                    position.lng = result.results[0].geometry.location.lng;
                }
            } catch (err) {
                position = null;
            }

        }
    });
    return position;
}

// If we're running under Node, 
if(typeof exports !== 'undefined') {
    exports.LoadMapsByFilters = LoadMapsByFilters;
}
