

var locations  = [["Odonno's Gelati", 51.49362191787874, -0.17623186111450195, "category2",'Offers 10% student discount </p><a href="http://www.oddonos.com/index.html" target="blank">Visit website</a>',1],
            ["Honest Burger Kitchen", 51.4943927, -0.1735336, "category1",'No current student discount at the Kensington branch </p><a href="https://www.honestburgers.co.uk/locations/south-kensington/" target="blank">Visit website<a/>',0],
            ["Fernandez & Wells", 51.4946935,-0.1740589, "category1",'Student Discount for Imperial Students</p><a href="http://www.fernandezandwells.com/shop/exhibition-road/" target="blank">Visit website</a>',1],
            ["Oriental Canteen",51.49459715709654, -0.17327606678009033, "category1",'No current student discount offered</p> <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d1007176-Reviews-Oriental_Canteen-London_England.html" target="blank">See on TripAdvisor</a>',0],
            ["Bubbleology",51.4945499,-0.1739382, "category2",'Loyalty card available</p> <a href="http://bubbleology.co.uk/" target="blank">Visit website</a>',0],
            ["Gỗ viet",51.4931248,-0.1759496, "category1",'On the more expensive side, the lunch deal is around £10</p> <a href="http://vietnamfood.co.uk/go-viet/index" target="blank">Visit website</a>',0],
            ["Byron Burger",51.494773,-0.182543,"category1",'Student Discount offered with <a href="https://www.myunidays.com" target="blank">UNiDAYS</a> (20%)</p> <a href="https://www.byronhamburgers.com/restaurant/gloucester-road" target="blank">Visit website</a>',1],
            ["Muriel's Kitchen",51.4941145,-0.1744669,"category1",'Cosy place for posh english food</p> <a href="http://www.murielskitchen.co.uk/restaurants/south-kensington" target="blank">Visit website</a>',0],
            ["Leon",51.4941909,-0.174459,"category2",'Amazing salads and wraps around £5</p> <a href="http://leonrestaurants.co.uk/restaurants/south-kensington/" target="blank">Visit website</a>',0],
            ["Wright Brothers Seafood & Oyster",51.493167,-0.176494,"category2",'Oysters for £1 3-6pm every day</p> <a href="http://thewrightbrothers.co.uk/restaurant/south-kensington/" target="blank">Visit website</a>',1],
            ["Franco Manca",51.4925158,-0.1770853,"category1",'Free Beer Monday & Tuesday - use buzzword Brixton 2008 and show student ID </br><a href="http://www.francomanca.co.uk/student-drink-on-us-find-out-more/" target="blank">See T&Cs</a></p> <a href="http://www.francomanca.co.uk/restaurants/southkensington/" target="blank">Visit website</a>',1],
            ["Ben's Cookies",51.4940179, -0.1742724,"category2",'Delicious cookies usually on a 4 for the price of 3 offer</p> <a href="http://www.benscookies.com/" target="blank">Visit website</a>',0],
            ["Bosphorous Kebab",51.4930427,-0.1761608,"category2",'Best kebabs in West London</p>',0],
            ["The Sandwich Shop",51.4981083,-0.1841822,"category2",'This is run by the same people who run fusion 54, sells super cheap sandwiches and coffee</p>',0],
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

var bounds = new google.maps.LatLngBounds; //create new bounds object

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
  newMarker.discount = locations[i][5];
  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(true); //
  markers.push(newMarker);

  makePopups(newMarker); //make popups currently includes popup and setvisible
  newMarker.popupAdded = 1;
  newMarker.popup.close() //close all popups when change category

  bounds.extend(
      new google.maps.LatLng(
        newMarker.position.lat(),
        newMarker.position.lng()
      )
    );

 }

globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
} //from initMap


var categories = {
 1: 'category1',
 2: 'category2',
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
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}


function closeAllPopups() {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].popup.close() //close all popups when change category
   }

}

function displayDiscounts(discount_bool) { //1 if discount offered, 0 if no discount offered
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   makePopups(markers[i]); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].discount === discount_bool) {
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
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}
