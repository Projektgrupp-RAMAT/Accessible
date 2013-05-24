
function makeMarker(latlon, comp, name) {
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
    id: 'search-detail',
    requires: ['Accessible.store.CommentStore', 'Accessible.store.SearchStore'],
    config: {

        styleHtmlContent: true,
        fullscreen: true,

        layout: 'vbox',

        items: [
            {
                id: 'content',
                tpl: [
                    '<img src="{icon}" align="left" style="padding-right:5px; padding-bottom: 5px" </img> <div><h4> {name}, <br> {address} </h4> </div>'

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
                       
                        var cmp = Ext.getCmp('search-detail');
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
                store: 'Accessible.store.CommentStore'


            },
            {
                xtype: 'button',
                action: 'commentButton',
                ui: 'greyButton',
                text: 'Add comment',
                id: 'commentButton',
                iconCls : 'compose1',
                iconAlign: 'right',
                iconMask: true


            },

            {
                xtype: 'button',
                action: 'checkInButton',
                ui: 'fbButton',
                text: 'Check in at a nearby place!',
                handler: function(){
                    if(Accessible.fbLoggedIn === '1'){
                    if(!this.overlay){
                        var view = Ext.ClassManager.instantiate('Accessible.view.CheckInResult', {
                            itemId: 'overlayView'
                        })
                        this.overlay = Ext.Viewport.add(view);

                    }
                    this.overlay.show();
                    }
                }
            },
            {
                xtype: 'list' ,
                id: 'commentList',
                action: 'commentList',
                flex: 1,
                disableSelection: true,
                store: 'commentstore',
                itemTpl: '<img src="http://graph.facebook.com/' + '{userId}' + '/picture"  align="left" style="padding:5px;"/> <b>{userName}</b> {timeStamp} <tpl if="flagged=='+"'false'"+'"><div class="reportButton" id="reportButtn"> <img src="img/warning_black.png" style="width: 30px; height: 30px;" align="right" id="repBtn"></div><tpl else><br></tpl> {text} - Sound rating:{soundLvl}'

            }



        ],
        record: null
    },


    updateRecord: function(newRecord) {

        if (newRecord) {
            this.down('#content').setData(newRecord.data);
            this.down('#comments').setData(newRecord.data);

            this.down('#theMap').setMapCenter(newRecord.data.location);


        }
    }

});

