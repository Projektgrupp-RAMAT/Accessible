/**
 * Created with JetBrains WebStorm.
 * User: Tim
 * Date: 2013-04-09
 * Time: 20:03
 * To change this template use File | Settings | File Templates.
 */

function getResultList() {
	var comp = Ext.getCmp('map');


    var request = {
        query:  Ext.getCmp('nameField').getValue() + ' in ' + Ext.getCmp('locationField').getValue()
    };
    var service = new google.maps.places.PlacesService(comp.getMap());


    service.textSearch(request, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
          Ext.getCmp('resultlist').getStore().removeAll();
        for (var i = 0; i < results.length; i++) {
            detailResult(results[i]);

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

function detailResult(result) {
    var match=false;
	var store = Ext.getCmp('resultlist').getStore();
    var topStore = Ext.getStore('TopCommentStore');
    for(var i = 0; i < topStore.getCount(); i++)
    {
        if(topStore.getAt(i).get('restaurantId') == result.id)
        {
            match='true';
        }
    }
    store.add({name: result.name, address: result.formatted_address,icon: result.icon, vicinty: result.vicinty,location: result.geometry.location, id: result.id, referenceId: result.reference,commented: match});
}

Ext.define('Accessible.view.MainPanel', {

    

    extend: 'Ext.tab.Panel',
    xtype: 'mainView',
    id: 'mainViewId',
    requires: [
        'Accessible.view.ResultList',
        'Accessible.view.SearchResultDetail',
        'Accessible.view.TopCommented'
    ],
    config: {

        activeItem: 0,
        items: [
            {
                xtype: 'navigationview',
                title: 'Home',
                id: 'homeNav',
                iconCls: 'home',
                items: [
                    {
                        xtype: 'panel',
                        id: 'HomePanel',
                        title: 'Home',
                        styleHtmlContent: true,
                        items: [

                            {
                                xtype: 'image',
                                src: 'http://graph.facebook.com/blank/picture',
                                height: 64,
                                width: 64,
                                id: 'fbPic'

                            },
                            {
                                html: '',
                                id: 'myText'
                            },
                            {
                                xtype: 'map',
                                id: 'map'
                            }
                         

                        ]

                    }

                ]
            },
            {
                xtype: 'navigationview',
                title: 'Search',
                iconCls: 'search',
                id: 'searchNav',
                autoDestroy: true,
                items: [
                    {
                        xtype: 'formpanel',
                        title: 'Search',
                        id: 'SearchPanel',
                        styleHtmlContent: true,
                        scrollable: false,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                id: 'nameField',
                                placeHolder: 'Restaurant XY'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Location',
                                id: 'locationField',
                                placeHolder: 'Street, City'
                            },

                            {
                                xtype: 'button',
                                ui: 'greyButton',
                                text: 'Search',
                                itemId: 'searchButton'
                            }
                        ]
                        
                    }
                ] 
            },
            {
                xtype: 'navigationview',
                title: 'Top Commented',
                id: 'listNav',
                iconCls: 'chart1',
                items: [
                    {
                        xtype: 'TopCommented',
                        id: 'ListNavView',
                        title: 'Top commented',

                        styleHtmlContent: true
                    }
                ]
            },
            {
                xtype: 'navigationview',
                title: 'Maps',
                iconCls: 'maps',
                items: [
                    {
                        xtype: 'Gmaps',
                        title: 'Maps',
                        autoupdate: false,
                        useCurrentLocation: {autoupdate: false}
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom',
        },
        listeners: [
                        {
                            fn: 'onSearchButtonTap',
                            event: 'tap',
                            delegate: '#searchButton'
                        }
        ]
    },
    onSearchButtonTap: function () {


        getResultList();
        Ext.getCmp('searchNav').push({xtype: 'resultlist'});


    },
    onLogOut: function() {

        FB.logout(function(response) {
            // user is now logged out
            var me = this;
            me.login = Ext.create('Accessible.view.LoginPanel', {
            });


            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

            Ext.Viewport.setActiveItem(me.login);


        });
    },
    initialize: function () {

        
        logOutButton = Ext.create('Ext.Button', {

            action : 'logOutButton',
            xtype : 'button',
            iconCls : 'arrow_right',
            iconAlign: 'right',
            ui: 'fbButton',
            iconMask : true,
            text: 'Logout',
            align : 'right'


        })

        Ext.getCmp('homeNav').getNavigationBar().add(logOutButton)

        FB.api('/me', function (response) {

            if( Accessible.fbLoggedIn === '1' ){

            document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '! <br> Navigate by using the controls below, the <b>Search tab</b> will give you options to search for locations, the <b>Top Commented</b> tab will show you the most commented locations, and last the <b>Maps tab </b>  will show you a map with markers for sorrounding locations.';
            document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';
            }
            else {

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear! <br> You are logged in as a guest. To gain access to all the features please log in. <br> Navigate by using the controls below, the <b>Search tab</b> will give you options to search for locations, the <b>Top Commented</b> tab will show you the most commented locations, and last the <b>Maps tab </b>  will show you a map with markers for sorrounding locations. ';
               // document.getElementById('fbPic').innerHTML = '<img src="img/eah.png" />';

            }

        });



        this.callParent();

    }

  });

function addButton(view, buttonID){

    view.getNavigationBar().add({
        id : buttonID,
        xtype : 'button',
    //    iconCls : 'arrow_right',
    //   iconAlign: 'right',
        ui: 'fbButton',
        iconMask : true,
        text: 'Logout',
        align : 'right'

    });


}
