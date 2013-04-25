Ext.define('Accessible.store.PlacesStore', {

    extend: 'Ext.data.Store',

    requires: [
        'Accessible.model.Places'

    ],
    config: {
        autoLoad: true,

        model: 'Accessible.model.Places',
        storeId: 'PlacesStore',
        proxy: {

            type: 'jsonp',
            url: 'https://graph.facebook.com/search?',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            extraParams: {

                type: 'place',
                center: '59.16775,18.14478',
                distance: '1000',
                access_token: FB.getAccessToken() //använder den från första login hela tiden
            }
        },
        listeners: {
            'load': function (store) {
                console.log(store.getCount());


            }
        }

    }
});
