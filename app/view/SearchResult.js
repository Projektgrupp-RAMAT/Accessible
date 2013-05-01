Ext.define('Accessible.view.SearchResult', {
    extend: 'Ext.Panel',
    xtype: 'SearchResult',
    id: 'SearchResultViewId',

    config: {
        data: null,
        title: 'Search Results',
        styleHtmlContent: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                itemId: 'resultList',
                itemTpl: [
                    '<div>{name} </div> '


                ],
                store: 'GooglePlacesStore'
            }
        ],
        listeners: [
            {
                fn: 'onResultListItemTap',
                event: 'itemtap',
                delegate: '#resultList'
            }
        ]
    },

    onResultListItemTap: function(dataview, index, target, record, e, eOpts) {

        this.data = record; //används i controller för guest to fb login
       this.showResults =  Ext.create('Accessible.view.SearchResultDetail', {
           title:  record.get('name')
        });

        this.showResults.setRecord(record);

        Ext.getCmp('searchNav').push(this.showResults);
        if ( Accessible.fbLoggedIn === '1'){
        var fbPlacesStore = Ext.create('Accessible.store.PlacesStore', {
            extraParams: {
                center: record.data.geometry.location.lat + ',' + record.data.geometry.location.lng,
                access_token: FB.getAccessToken()
            }

        });


        fbPlacesStore.load({
            params: {
                center: record.data.geometry.location.lat + ',' + record.data.geometry.location.lng,
                access_token: FB.getAccessToken()
            }
        })
        }
    }

});