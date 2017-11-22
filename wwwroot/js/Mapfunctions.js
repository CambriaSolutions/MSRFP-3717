//LoadMapsByFilters : Gets the provider data and prepare a array for the further process.
function LoadMapsByFilters(enteredLocation, facilitycount, qualityrating, providertype, availability, specialneeds) {
 
    var arr     = [];
    var latlng  = getLocationCoordinate(enteredLocation);
    var lat     = latlng.lat;
    var lon     = latlng.lng;
    var url     = 'http://13.82.25.218:9200/al/provider/_search';
 
    var mapresults;
    var matchQuery = {
        "bool": {
            "must": [ ]
          }
        };
 
    if(specialneeds){
        matchQuery.bool.must.push(
            {
                'match': {
                    'special_needs' : 'YES'
                }
            }
        );
    }
    if(availability){
        matchQuery.bool.must.push(
            {
                'match': {
                    'availability' : 'YES'
                }
            }
        );
    }
    if(providertype > -1){
        matchQuery.bool.must.push(
            {
                'match': {
                    'provider_type' : providertype
                }
            }
        );
    }
    if(qualityrating > 0){
        matchQuery.bool.must.push(
            {
                'range': {
                    'quality_rating' : { "gt" : 0}
                }
            }
        );
    }
 
    var es_query = {
        "sort": [
            {
                "_geo_distance": {
                    "location": [lon, lat],
                    "order": "asc",
                    "unit": "mi"
                }
            }
        ],
        "from" : 0, "size" : facilitycount,
        "query" : matchQuery
    }
 
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(es_query),
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data && data.hits && data.hits.hits) {
                mapresults = data.hits.hits;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // alert(jqXHR.status + ",  " + jqXHR.statusText + ",  " + textStatus + ",  " + errorThrown);
        }
    });
 
    //returning false if no results found
    if (!mapresults) {
        return arr;
    }
    else {
        new_rows = mapresults.map(function (row) {
            var _row = row._source;
            arr.push([_row.provider_name, _row.license_type, _row.provider_type_description, _row.quality_rating, _row.provider_capacity,
            _row.street_address, _row.physical_city, _row.physical_zip_code, _row.county_name, _row.phone_number, _row.availability,
            _row.special_needs, _row.location.lat, _row.location.lon]);
        })
        return arr;
    }
}

//getLocationCoordinate: To get the latitude and longitude of the given address
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
