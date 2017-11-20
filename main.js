

var locations  = [["Odonno's Gelati", 51.49362191787874, -0.17623186111450195, "category1",'Student Discount'],
            ["Honest Burger Kitchen", 51.4943927, -0.1735336, "category1",'No current student discount at the Kensington branch'],
            ["Fernandez & Wells", 51.4946935,-0.1740589, "category1",'Student Discount for Imperial Students'],
            ["Oriental Canteen",51.49459715709654, -0.17327606678009033, "category1",'No current student discount offered'],
            ["Bubbleology",51.4945499,-0.1739382, "category2",'Loyalty card available'],
            ["Gỗ viet",51.4931248,-0.1759496, "category1",'On the more expensive side, the lunch deal is around £10'],
            ["Odonno's Gelati", 51.49362191787874, -0.17623186111450195, "category3",'Offers 10% student discount'],
            ["Fernandez & Wells", 51.4946935,-0.1740589, "category3",'Student Discount for Imperial Students'],
          ]


var markers = [];
var i, newMarker;
var globalmap; //so can getmap later
var globalbounds;

function initMap() {
  var styledMapType = new google.maps.StyledMapType(
  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#939397"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "lightness": 100
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e2e3e6"
      },
      {
        "visibility": "on"
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

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: myLatLng
});
globalmap = map; //workaround for setting varible to global

var bounds = new google.maps.LatLngBounds(); //sets up bounds
globalbounds = bounds; //workaround for setting varible to global

var markerIcon = {
  url: './images/marker-flag.png',
  scaledSize: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40,40),
  labelOrigin: new google.maps.Point(0,0)
};

//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');

//display all locations as default
for (i = 0; i < locations.length; i++) {
   newMarker = new google.maps.Marker({
     position: {lat: locations[i][1], lng: locations[i][2]},
     map: map,
     icon: markerIcon,
     title: locations[i][0]
   });

  //might need to rename this for each marker
  newMarker.name = locations[i][0];
  newMarker.category = locations[i][3];
  newMarker.description = locations[i][4];
  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(false); //
  markers.push(newMarker);

 }


} //from initMap


var categories = {
 1: 'category1',
 2: 'category2',
 3: 'category3',
};


function makePopups(m) {

  if(m.popupAdded == 0){
  var desc = '<h2>' + m.name +'</h2>' + '</br><p>'+ m.description + '</p>';
  var infowindow = new google.maps.InfoWindow({
    content: desc,
  });

  m.popup = infowindow; //add popup to list that we can retrieve later to close popups

  m.addListener('click', function() {
    closeAllPopups()
    infowindow.open(map, m);
    });
  }
}


function setvis(m,v) {
  m.setVisible(v);
}

//triggered when changing category
function displayMarkers(category) {
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   var test = categories[category];
   makePopups(markers[i]); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].category === test) {
     setvis(markers[i],true);

     bounds.extend(
         new google.maps.LatLng(
           markers[i].position.lat(),
           markers[i].position.lng()
         )
       );

   }
   else {
     setvis(markers[i],false);
   }
   //bounds.extend(myLatLng);//extend bounds to show new markers
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}

function closeAllPopups() {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].popup.close() //close all popups when change category
   }

}
