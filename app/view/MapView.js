/**
 * Created with JetBrains WebStorm.
 * User: Tim
 * Date: 2013-04-14
 * Time: 21:35
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Accessible.view.MapView', {
    extend: 'Ext.Map',
    alias: 'widget.MapView',
    xtype: 'MapView',

    config: {

        mapOptions : {
            center : new google.maps.LatLng(record.get('geometry.location.lat'), record.get('geometry.location.lng')),
            zoom : 12,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        }


    }

});

