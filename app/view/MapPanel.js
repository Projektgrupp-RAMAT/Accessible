function displayMap(position, map) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    var latlon = new google.maps.LatLng(lat,lon);

    infowindow = new google.maps.InfoWindow();
    var pinColor = "0000FF";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
            new google.maps.Size(40, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(12, 35));
    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
//        autoUpdate: false,
        title: "You are here!",
        icon: pinImage,
        shadow: pinShadow,
        animation: google.maps.Animation.DROP
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("You are here!");
        infowindow.open(map, this);
    });

    var request = {
        location: latlon,
        radius: 1000,
        types: ['food']
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results, status) {

        if (status === google.maps.places.PlacesServiceStatus.OK) {

            for (var i = 0; i < results.length; i++) {

                createMarker(results[i], map);
            }


        }

        if (status === google.maps.places.PlacesServiceStatus.ERROR) {
            console.log("Error");
        }
        if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
            console.log("Invalid");
        }
        if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
            console.log("Over query");
        }
        if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
            console.log("not found");
        }
        if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
            console.log("request denied");
        }
        if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
            console.log("unknown error");
        }
        if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            console.log("Zero");
        }
    });

//    marker.setMap(map);


}
function createMarker(result, map) {

    var marker = new google.maps.Marker({
        map: map,
        position: result.geometry.location,
        title: result.name
    });
    var service = new google.maps.places.PlacesService(map);
    var request1 = {reference: result.reference};
    service.getDetails(request1, function(details, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK)
        {
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent("<b>" + details.name + "</b> " + "</br>" + details.formatted_address);
                infowindow.open(map, this);
            });
        }

        else
        {
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent("<b> " + result.name + "</b> " + "</br>" + "Details: N/A");
                infowindow.open(map, this);
            });
        }
    });
}
;
Ext.define('Accessible.view.MapPanel', {
    xtype: 'Gmaps',
    id: 'gmap',
    extend: 'Ext.Map',
//    useCurrentLocation: true,
    config: {
        listeners: {

        scrollable: false,
            
            maprender: function(comp, map) {
                
                if (navigator.geolocation)
                {
//                    console.log ( 'this sux!');
                    
                    navigator.geolocation.getCurrentPosition(function(position) {
//                        console.log('Map:'+Ext.ComponentQuery.query('Gmaps')[0].getMap());
                        displayMap(position, map);
                    });
                }
                else {
                    console.log("Geolocation is not supported by this browser.");
                }
            },
                    afterrender: function(){
                    
                    }
        }
    },
    initialize: function() {
       
        this.mapOptions = {
            disableDefaultUI: true,
            geo: new Ext.util.GeoLocation({autoLoad:false}),
            zoom: 15,
            autoUpdate: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true
        };
//        console.log('init: '+this.getMap());
//        var name = Ext.ComponentQuery.query('#name')[0].getValue();
//				var location = Ext.ComponentQuery.query('#location')[0].getValue();
//				var sound = Ext.ComponentQuery.query('#sound')[0].getValue();
//				console.log("MAP: "+name+"   "+location+"   "+sound);



    }
            
            
      
});
         function renderMap(comp, map) {
              displayMap(position, map);
                if (navigator.geolocation)
                {
//                    console.log ( 'this sux!');
                    
                    navigator.geolocation.getCurrentPosition(function(position) {
//                        console.log('Map:'+Ext.ComponentQuery.query('Gmaps')[0].getMap());
//                        displayMap(position, map);
                    });
                }
                else {
                    console.log("Geolocation is not supported by this browser.");
                    
                }
            }


