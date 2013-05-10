/**
 * Created with JetBrains WebStorm.
 * User: Tim
 * Date: 2013-04-09
 * Time: 20:03
 * To change this template use File | Settings | File Templates.
 */

function getResultList() {
	var comp = Ext.ComponentQuery.query('map')[0];
//    console.log( Ext.ComponentQuery.query(resultlist)[0]);
//   var store = Ext.ComponentQuery.query('resultlist')[0].getStore();
//   store.removeAll();
    var request = {
        query: Ext.ComponentQuery.query('#locationField')[0].getValue()+' in '+Ext.ComponentQuery.query('#nameField')[0].getValue()
    };
    var service = new google.maps.places.PlacesService(comp.getMap());
    service.textSearch(request, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
          Ext.ComponentQuery.query('resultlist')[0].getStore().removeAll();          
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
	var store = Ext.ComponentQuery.query('resultlist')[0].getStore();
//	var service = new google.maps.places.PlacesService(Ext.ComponentQuery.query('map')[0].getMap());
//    var request1 = {reference: result.reference};
//    service.getDetails(request1, function(details, status) {
//        if (status === google.maps.places.PlacesServiceStatus.OK)
//        {
      //  if(result.formatted_address)
            console.log(result.name+result.formatted_address)
            store.add({name: result.name, address: result.formatted_address,icon: result.icon, vicinty: result.vicinty,location: result.geometry.location});
//        }
//        else
//        {
//            store.add({name: result.name, address: 'N/A'});
//        }

//    });
	
}

Ext.define('Accessible.view.MainPanel', {

    

    extend: 'Ext.tab.Panel',
    xtype: 'mainView',
    id: 'mainViewId',
    requires: [
        'Accessible.view.resultList',
        'Accessible.view.SearchResultDetail',
        'Accessible.view.NearbyList'
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
                        //html: "<div>[Placeholder]</div>",
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
                items: [
                    {
                        xtype: 'formpanel',
                        title: 'Search',
                        id: 'SearchPanel',
                        styleHtmlContent: true,
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
                                xtype: 'spinnerfield',
                                label: 'Soundlevel',
                                id: 'soundLevelField',
                                maxValue: 5,
                                minValue: 1,
                                defaultValue: 2.5
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
                title: 'List nearby',
                id: 'listNav',
                iconCls: 'locate',
                items: [
                    {
                        xtype: 'nearbylist',
                        id: 'ListNavView',
                        title: 'Commented nearby',

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
                        useCurrentLocation: true,
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
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

        
        
        console.log(FB.getAccessToken());

        console.log("Commented list getting filled");
        Ext.ComponentQuery.query('nearbylist')[0].getStore().load();
        
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

            document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '!';
            document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';
            }
            else {

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear Ronnie Sandahl';
                document.getElementById('fbPic').innerHTML = '<img src="http://gfx.aftonbladet-cdn.se/image/15419059/76/normal/2bb99db0eeab4/ronnie-sandahl-byline-76.jpg" />';

            }

        });

        console.log(Accessible.fbLoggedIn);

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
        align : 'right',
        html: '<img src= http://gfx.aftonbladet-cdn.se/image/15419059/76/normal/2bb99db0eeab4/ronnie-sandahl-byline-76.jpg width=auto align=right>'
    });


}
