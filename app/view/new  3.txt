/**
 * Created with JetBrains WebStorm.
 * User: Tim
 * Date: 2013-04-09
 * Time: 20:03
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Accessible.view.MainPanel', {

    initialize: function () {


        FB.api('/me', function (response) {
            document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '!';
            document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';

        });


        this.callParent();

    },
    extend: 'Ext.tab.Panel',


    config: {

        activeItem: 0,
        items: [
            {
                xtype: 'navigationview',
                title: 'Home',
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
                                xtype: 'button',
                                width: '10%',
                                height: '10%',
                                text: 'Logout',
                                id: 'logOutButton',
                                ui: 'fbButton'
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
                                placeHolder: 'Restaurant XY',
								id: 'name'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Location',
                                placeHolder: 'Street, City',
								id: 'location'
                            },
                            {
                                xtype: 'spinnerfield',
                                label: 'Soundlevel',
                                maxValue: 5,
                                minValue: 1,
                                defaultValue: 2.5,
								id: 'sound'
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
                iconCls: 'locate',
                items: [
                    {
                        xtype: 'panel',
                        id: 'ListNavView',
                        title: 'List nearby',
                        html: "<div>[Placeholder]</div>",
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
            },
            {
                fn: 'onLogOut',
                event: 'tap',
                delegate: '#logOutButton'
            }
        ]
    },


    onSearchButtonTap: function () {
		
        Ext.getCmp('searchNav').push({
			xtype: 'searchresult'
		});

        //   console.log(Ext.getCmp('searchNav'));

        //   this.up.('navigationview').push(Ext.create('Accessible.view.SearchResult'));
        // view.push(Ext.create('Accessible.view.SearchResult'));

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
    }

});