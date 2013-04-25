Ext.define('Accessible.view.SearchResultDetail', {
    extend: 'Ext.Container',
    xtype: 'search-detail',

    config: {

        scrollable: true,
        styleHtmlContent: true,
        layout: 'vbox',
          items: [
              {
                id: 'content',
                tpl: [

                    '<img src="{icon}"</img>' ,
                    '<h3>{name}</h3>',
                    '<div> {vicinity} <br>  </div>',

                ] .join('')
              },
              {
                  xtype: 'map',
                  flex: 1,
                  mapOptions: {

                      zoom: 12
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

        record: null
    },


    updateRecord: function(newRecord) {

        if (newRecord) {
            this.down('#content').setData(newRecord.data);
            this.down('#comments').setData(newRecord.data);

            this.down('map').setMapCenter({
                latitude: newRecord.data.geometry.location.lat,
                longitude: newRecord.data.geometry.location.lng
            });


        }
    },

    initialize: function(){

    }
});

