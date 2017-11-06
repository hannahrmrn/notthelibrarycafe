

var locations  = [[" ", 51.800052, -0.176935, "category1",'Description'],
            [" ", 51.498732, -0.176935, "category1",'Description'],
            [" ", 51.48808, -0.176935, "category2",'Description'],
            [" ", 51.341246, -0.176935, "category2",'Description'],
            [" ", 51.548934, -0.176935, "category2",'Description'],
            [" ", 51.602689, -0.176935, "category2",'Description'],
            [" ", 51.480955, -0.176935, "category1",'Description'],
            [" ", 51.750365, -0.176935, "category3",'Description'],
            [" ", 51.563842, -0.176935, "category3",'Description'],
            [" ", 51.69484, -0.176935, "category3",'Description']]


var markers = [];
var i, newMarker;

function initMap() {
  var styledMapType = new google.maps.StyledMapType([
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a898b"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#abd9c0"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d1d0d2"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fbfcff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bde1f6"
      }
    ]
  }
],
{name: 'Styled Map'});

var myLatLng = {lat: 51.498732, lng: -0.176935};
//var bounds = new google.maps.LatLngBounds();
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: myLatLng
});

var markerIcon = {
  url: './images/marker-flag.png',
  scaledSize: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40,40),
  labelOrigin: new google.maps.Point(0,0)
};

//var marker = new google.maps.Marker({
//  position: myLatLng,
//  map: map,
//  icon: markerIcon,
//   label: {
//     text: " ",
//     fontSize: "16px",
//   }
//});

//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');

//display all locations as default
for (i = 0; i < locations.length; i++) {
  console.log(locations[i][1],locations[i][2]);
   newMarker = new google.maps.Marker({
     position: {lat: locations[i][1], lng: locations[i][2]},
     map: map,
     icon: markerIcon,
     title: locations[i][0]
   });

  //might need to rename this for each marker
   newMarker.category = locations[i][3];
   newMarker.description = locations[i][4];
   newMarker.setVisible(false); //set as visible to start
   markers.push(newMarker);

 }

 //bounds.extend(myLatLng);
 //map.fitBounds(bounds);


}

var categories = {
 1: 'category1',
 2: 'category2',
 3: 'category3',
};

function makePopups(m) {

  //console.log(typeof m.onclick);
  var desc = m.description;

  m.setVisible(true);

  var infowindow = new google.maps.InfoWindow({
    content: desc,
  });

  m.addListener('click', function() {
   infowindow.open(map, m);
  });

}


//category is a number
function displayMarkers(category) {
 document.getElementById("demo").innerHTML = category;

 markers.forEach(i => {
   console.log(i);
 });


 for (i = 0; i < markers.length; i++) {
   var test = categories[category];
   //console.log(desc);

   if (markers[i].category === test) {
     makePopups(markers[i]);
   }
   else {
     markers[i].setVisible(false);

     console.log(markers[i]);
   }
   //bounds.extend(myLatLng);//extend bounds to show new markers
 }
//map.fitBounds(bounds);
}
