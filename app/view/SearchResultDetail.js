
function makeMarker(latlon, comp, name) {
    console.log("hehehe");
    console.log(comp.down('#theMap').map);
    var marker = new google.maps.Marker({
        position: latlon,
        map: comp.down('#theMap').map,
        title: name,
        animation: google.maps.Animation.DROP
    });
    marker.setMap(comp.down('#theMap').map);
}



Ext.define('Accessible.view.SearchResultDetail', {
    extend: 'Ext.Container',
    xtype: 'search-detail',
    config: {
        hus: null,
        scrollable: false,
        styleHtmlContent: true,
        layout: 'vbox',
        items: [
            {
                id: 'content',
                tpl: [
                    '<img src="{icon}"</img>',
                    '<h3>{name}</h3>',
                    '<div> {vicinity} <br>  </div>',
                ].join('')
            },
            {
                xtype: 'map',
                itemId: 'theMap',
                mapOptions: {
                    zoom: 15
                },
                flex: 1,
                listeners: {
                    maprender: function(comp, map) {
                       
                        var cmp = Ext.ComponentQuery.query('search-detail')[0];
                        var marker = new google.maps.Marker({
                            position: cmp.down("#content").getData().location,
                            map: map,
                            title: cmp.down("#content").getData().name,
                            animation: google.maps.Animation.DROP
                        });
                        marker.setMap(map);
                    }
                }

            },
            {
                id: 'comments',
                tpl: [
                    '<tpl if="rating">Very nice place, I gief sound rating of: {rating}</tpl>'

                ]

            },
            {
                xtype: 'button',
                action: 'commentButton',
                ui: 'greyButton',
                text: 'Add comment',
                id: 'commentButton'

            }

        ],
        record: null,
    },
    updateRecord: function(newRecord) {

        if (newRecord) {
            this.down('#content').setData(newRecord.data);
            this.down('#comments').setData(newRecord.data);

            this.down('#theMap').setMapCenter(newRecord.data.location);


        }
    }


});

