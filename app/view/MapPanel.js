function displayMap(lat,lon, map) {
    var latlon = new google.maps.LatLng(lat,lon);
    var pinColor = "0000FF";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(24, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34));

    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "You are here!",
        icon: pinImage,
        animation: google.maps.Animation.DROP
    });

    var request = {
        location: latlon,
        radius: 1000,
        types: ['food']
    };

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

}
function createMarker(result, map) {
    var infowindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
        map: map,
        position: result.geometry.location,
        title: result.name
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("<b>" + result.name + "</b> " + "</br>" + result.vicinity);
        infowindow.open(map, this);
    });
}

Ext.define('Accessible.view.MapPanel', {
    xtype: 'Gmaps',
    id: 'gmap',
    extend: 'Ext.Map',
    autoupdate: false,
    useCurrentLocation: {autoupdate: false},
    config: {
        listeners: {
            maprender: function(comp,map)
            {
                navigator.geolocation.getCurrentPosition(function(position) {
                        displayMap(position.coords.latitude,position.coords.longitude,Ext.getCmp('gmap').getMap());
                });   
            }
        }
    },
    initialize: function() {
        this.setGeo(Ext.create('Ext.util.Geolocation', {
                    autoUpdate: false,
                    useCurrentLocation: {autoupdate: false},
                    frequnecy: 99999, 
        }));
        this.mapOptions = {
            disableDefaultUI: true,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true
        };
    }  
}); 