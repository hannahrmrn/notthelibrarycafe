

var locations  = [["Odonno's Gelati", 51.49362191787874, -0.17623186111450195, "category1",'Description'],
            ["Odonno's Gelati", 51.49362191787874, -0.17623186111450195, "category3",'Student Discount'],
            ["Honest Burger Kitchen", 51.4943927, -0.1735336, "category3",'Description'],
            [" ", 51.548934, -0.176935, "category2",'Description'],
            [" ", 51.602689, -0.176935, "category2",'Description'],
            [" ", 51.480955, -0.176935, "category1",'Description'],
            [" ", 51.750365, -0.176935, "category3",'Description'],
            [" ", 51.563842, -0.176935, "category3",'Description'],
            [" ", 51.69484, -0.176935, "category3",'Description']]


var markers = [];
var i, newMarker;

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
  newMarker.name = locations[i][0];
  newMarker.category = locations[i][3];
  newMarker.description = locations[i][4];
  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(false); //
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

//category is a number
function displayMarkers(category) {

 markers.forEach(i => {
   console.log(i);
 });

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   var test = categories[category];
   makePopups(markers[i]); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].category === test) {
     setvis(markers[i],true);
   }
   else {
     setvis(markers[i],false);
   }
   //bounds.extend(myLatLng);//extend bounds to show new markers
 }
//map.fitBounds(bounds);
}

function closeAllPopups() {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].popup.close() //close all popups when change category
   }

}
