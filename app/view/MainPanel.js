/**
 * Created with JetBrains WebStorm.
 * User: Tim
 * Date: 2013-04-09
 * Time: 20:03
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Accessible.view.MainPanel', {


    extend: 'Ext.tab.Panel',
    xtype: 'mainView',
    id: 'mainViewId',

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
                        xtype: 'inputview',
                        id: 'ListNavView',
                        title: 'List nearby',

                        styleHtmlContent: true
                    }
                ]
            },
            {
                xtype: 'navigationview',
                title: 'Maps',
                id: 'mapsNav',
                iconCls: 'maps',
                items: [
                    {
                        xtype: 'panel',
                        id: 'MapsNavView',
                        title: 'Maps',
                        styleHtmlContent: true,
                        items: [

                            {
                                html: "<div>[Placeholder]</div>"
                            }


                        ]
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


        Ext.getCmp('searchNav').push(Ext.create('Accessible.view.SearchResult'));


    },
    onLogOut: function () {

        FB.logout(function (response) {
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

            action: 'logOutButton',
            xtype: 'button',
            iconCls: 'arrow_right',
            iconAlign: 'right',
            ui: 'fbButton',
            iconMask: true,
            text: 'Logout',
            align: 'right'


        })

        Ext.getCmp('homeNav').getNavigationBar().add(logOutButton)
//        Ext.getCmp('listNav').getNavigationBar().add(logOutButton)
//        Ext.getCmp('mapsNav').getNavigationBar().add(logOutButton)
//        Ext.getCmp('searchNav').getNavigationBar().add(logOutButton)

//        addButton(Ext.getCmp('homeNav'), 'logOutButton');
//        addButton(Ext.getCmp('searchNav'), 'logOutButton');
//        addButton(Ext.getCmp('listNav'), 'logOutButton');
//        addButton(Ext.getCmp('mapsNav'), 'logOutButton');


        //console.log(FB.getAccessToken());
        FB.api('/me', function (response) {

            if (Accessible.fbLoggedIn === '1') {

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '!';
                document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';
            }
            else {

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear Ronnie Sandahl';
                document.getElementById('fbPic').innerHTML = '<img src="http://gfx.aftonbladet-cdn.se/image/15419059/76/normal/2bb99db0eeab4/ronnie-sandahl-byline-76.jpg" />';

            }

        });


        this.callParent();

    }

});

function addButton(view, buttonID) {

    view.getNavigationBar().add({
        id: buttonID,
        xtype: 'button',
        //    iconCls : 'arrow_right',
        //   iconAlign: 'right',
        ui: 'fbButton',
        iconMask: true,
        text: 'Logout',
        align: 'right',
        html: '<img src= http://gfx.aftonbladet-cdn.se/image/15419059/76/normal/2bb99db0eeab4/ronnie-sandahl-byline-76.jpg width=auto align=right>'
    });


}
