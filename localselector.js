src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_SG3QjQiI-_Q5eH6xz_4PKNQUNjjWZrg &callback=initMap" 

var geocoder;
var map;

function initialize() {
// Create a geocoder object.
  geocoder = new google.maps.Geocoder();
  
// Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  // Create a map object and specify the DOM element for display.
  var latlng = new google.maps.LatLng(47.604231, -122.332594);
  var mapOptions = {
    zoom: 8,
    center: latlng,
    styles: styleArray
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function codeAddress() {
  var address = document.getElementById("address").value;
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
