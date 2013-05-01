Ext.define('Accessible.store.PlacesStore', {

    extend: 'Ext.data.Store',

    requires: [
        'Accessible.model.Places'

    ],
    config: {
        autoLoad: false,
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
                distance: '1000'
            }
        }/*,
        listeners: {
            'load': function (store) {
                console.log(store.getCount());


            }
        }  */


    }
});
