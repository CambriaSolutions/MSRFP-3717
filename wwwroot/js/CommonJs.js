
    function ToggleDiv() {
   var isVisible = $('#FilterBox').is(':visible');
       
       if(isVisible == true)
       {
            $("#FilterBox").hide();
       }
       else
       {
            $("#FilterBox").show();
       }
   
   
};

    function resetfilters()
    {
        $('#qualityselect').prop('selectedIndex',0);
        $('#provtypeselect').prop('selectedIndex',0);
        $('#optavailability').attr('checked', false);
        $('#optspecialneed').attr('checked', false);
        $('#radiusselect').val(10);      
         $('#spnrange').html(10);
    };

    function validateinput() {
        var $messageDiv = $('#namerror'); // get the reference of the div
        if ($("#txtName").val() == '') {
            $messageDiv.show().html('<span style="color:red;">*Please enter the search criteria</span>');
            return false;
        }
        else {
            $messageDiv.hide();
            return true;
        }
    };


	 var firstClick = true;
    $(document).ready(function() {

        $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


    var divs=$('.accordion>div').hide(); //Hide/close all containers

    var h2s=$('.accordion>h2').click(function () {
        h2s.not(this).removeClass('active')
        $(this).toggleClass('active')
        divs.not($(this).next()).slideUp()
        $(this).next().slideToggle()
        return false; //Prevent the browser jump to the link anchor
    });

   $('#radiusselect').change( function() {
    facilitycount = $('#radiusselect').val();
    $('#spnrange').html(facilitycount);
    //LoadMapsByFilters($("#txtName").val());
    SearchProviders();
    return false;
    //alert(inputradius);
    });

   $('#qualityselect').change( function() {
    //LoadMapsByFilters($("#txtName").val());
    SearchProviders();
    return false;
    });

   $('#provtypeselect').change( function() {
    //LoadMapsByFilters($("#txtName").val());
    SearchProviders();
    return false;
    });

    $('#optavailability').change( function() {
    //LoadMapsByFilters($("#txtName").val());
    SearchProviders();
    return false;
    });

    $('#optspecialneed').change( function() {
    //LoadMapsByFilters($("#txtName").val());
    SearchProviders();
    return false;
    });

 });

 $('[id^=btnSubmit]').on('click', function (e) {
    resetfilters();
    SearchProviders();
    return false;
 });

 function SearchProviders(){
    var enteredLocation = $("#txtName").val();
    var facilitycount = $('#radiusselect').val();
    var qualityrating = $('#qualityselect').val();
    var providertype = $('#provtypeselect').val();
    var availability = $("#optavailability").is(':checked') ? "YES" : null;
    var specialneeds = $("#optspecialneed").is(':checked') ? "YES" : null;

    $("#FilterBox").show();

     //defaults
     $('#list').html("");
     $('#map_canvas').html("");
     $('#divresults').html("");
     $('#divresults').html('<h5>' + '0 Results for ' + enteredLocation + '</h5>');
     $('#lnkFilters').hide();

    var arr = LoadMapsByFilters(enteredLocation,facilitycount,qualityrating,providertype,availability,specialneeds);

     if (arr.length > 0) {
         $('#lnkFilters').show();
         $('#divresults').html('<h5>' +  ' Results for ' + enteredLocation + '</h5>');
     }
     else {
         $('#lnkFilters').hide();
         $('#divresults').html('<h5>' + '0 Results for ' + enteredLocation + '</h5>');
     }

     initialize(arr);

    return false;
 }


var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();


function initialize(locations) {

    map = new google.maps.Map(
      document.getElementById("map_canvas"), {
          center: new google.maps.LatLng(32.4419, -89.1419),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    var latlng = getLocationCoordinate($("#txtName").val());
    var lat = latlng.lat;
    var lng = latlng.lng;
    //marking the source address
    var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
        map: map,
        position: { lat: lat, lng: lng },
        animation: google.maps.Animation.DROP

    })
    geocoder = new google.maps.Geocoder();

    for (i = 0; i < locations.length; i++) {


        geocodeAddress(locations, i);
    }
}
//google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(locations, i) {

    var img = "Not Rated";

    if (locations[i][3] == 1)
        img = "<img src='../images/Star1.png' />"
    if (locations[i][3] == 2)
        img = "<img src='../images/Star2.png' />"
    if (locations[i][3] == 3)
        img = "<img src='../images/Star3.png' />"
    if (locations[i][3] == 4)
        img = "<img src='../images/Star4.png' />"
    if (locations[i][3] == 5)
        img = "<img src='../images/Star5.png' />"


    var title = locations[i][0];
    var address = locations[i][5] + " " + locations[i][6] + " " + locations[i][7];

    var address1 = "<b>Name of the Provider:</b> " + locations[i][0] + "<br> " + "<b>Address: </b>" + locations[i][5] + " " + locations[i][6] + " " + locations[i][7] + "<br> " +
    "<b>Phone: </b> <a href=tel:'" + locations[i][9] + "'>" + locations[i][9] + "</a>" + "<br> " + "<b>Licensed: </b>" + locations[i][1] + " &nbsp;&nbsp;&nbsp;  " + "<b>Quality Rating: </b>" + img + "<br> " + "<b>Special Needs: </b>" + locations[i][11] + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + "<b>Availability: </b>" + locations[i][10];

    var url = locations[i][2];

    var EmailAddress = "Name of the Provider: " + locations[i][0] + "%0A" + "Address: " + locations[i][5] + " " + locations[i][6] + " " + locations[i][7] + "%0A" +
    "Phone:" + locations[i][9] + "%0A" + "Licensed:" + locations[i][1] + "%0A" + "Quality Rating:" + locations[i][3] + "%0A" + "Special Needs: " + locations[i][11] + "%0A" + "Availability:" + locations[i][10];



   address1 = address1 + ' <a title="Email these details to yourself" href="mailto:?subject=' +title+'&body=Add your Notes here....%0A%0A' + EmailAddress + '"><img src="../images/Mail-icon.png" /></a></li>'
    var markerlat = parseFloat(locations[i][12]);
    var markerlng = parseFloat(locations[i][13]);


    //(32.8551326, -90.4056468)

    var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        map: map,

        position: { lat: markerlat, lng: markerlng },

        title: title,
        animation: google.maps.Animation.DROP,
        address: address,
        url: url
    })
    infoWindow(marker, map, title, address, url);
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);



    $('<a class="list-group-item"><br>')
                    .html(address1)
        .click(function () {


            infoWindowOnItemClick(marker, map, title, address, url);

        })
                    .appendTo("#list");

}

function infoWindowOnItemClick(marker, map, title, address, url) {
    closeInfoWindows();
    var html = "<div ><h3>" + title + "</h3><p>" + address + "<br></div><a target='_blank' href='https://www.google.com/maps/place/" +  address + "'>View location</a></p></div>";
    iw = new google.maps.InfoWindow({
        content: html,
        maxWidth: 350
    });
    InfoWindows.push(iw);
    iw.open(map, marker);
}

function infoWindow(marker, map, title, address, url) {

    google.maps.event.addListener(marker, 'click', function () {
        closeInfoWindows();
        var html = "<div ><h3>" + title + "</h3><p>" + address + "<br></div><a target='_blank' href='https://www.google.com/maps/place/" + address + "'>View location</a></p></div>";
        iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 350
        });
        InfoWindows.push(iw);
        iw.open(map, marker);

    });
}
var InfoWindows = [];
function closeInfoWindows() {
    for (i = 0; i < InfoWindows.length; i++) {
        InfoWindows[i].close();
    }
}

