function getRestaurantLocation(lat,lon,restaurantId) {
    var latlon = new google.maps.LatLng(lat,lon);
    var request = {
        location: latlon,
        radius: 1
    };
    var store = Ext.getStore('SearchStore');
    var service = new google.maps.places.PlacesService(Ext.getCmp('map').getMap());
    service.nearbySearch(request, function(result, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK)
        {
            for(var i = 0; i < result.length; i++)
            {
                if(result[i].id == restaurantId)
                {
                    store.add({name: result[i].name, address: result[i].formatted_address,icon: result[i].icon, vicinty: result[i].vicinty,location: result[i].geometry.location, id: result[i].id, referenceId: result[i].reference});
                }
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

function showCommentedDetail(target, record) {
   Ext.getCmp('searchNav').remove(Ext.getCmp('search-detail'),true);
    var comp = Ext.getCmp('listNav');
    
    this.showResults = Ext.create('Accessible.view.SearchResultDetail', {title: record.get('name'), record: record});
    this.showResults.setRecord(record);
    comp.push(this.showResults);
}

Ext.define('Accessible.view.TopCommented', {
    extend: 'Ext.List',
    xtype: 'TopCommented',
    id: 'TopCommented',
    requires: ['Accessible.store.SearchStore'],
    config: {
        title: 'Commented places',
        itemId: 'TopCommentedList',
        indexBar: false,
        itemTpl: '<img src="{icon}" align="left" style="padding-right:5px; padding-bottom: 5px" width=30px height=30px</img> {name} <tpl if="address">{address}</tpl> <tpl if="commented=='+"'true'"+'"> <img src="img/chat_black1.png" align="right" width="15px" height="15px"></tpl>',
        store: 'SearchStore',
        listeners:
                {
                    painted: function(){
                        Ext.getStore('SearchStore').removeAll();

                        var store = Ext.getStore('TopCommentStore');
                        store.load();
                        for (var i = 0; i < store.getCount(); i++) {
                            getRestaurantLocation(store.getAt(i).get('lat'),store.getAt(i).get('lon'),store.getAt(i).get('restaurantId'));
                        }
                    },
                    itemtap: function(view, index, item, record, e, eOpts) {
                        this.data = record;
                        var commentStore = Ext.create('Accessible.store.CommentStore', {

                            extraParams: {

                                id: record.get('id')

                            }

                        });
                        commentStore.load({
                            params: {
                                id: record.get('id')
                            }
                        });
                        commentStore.sort('timeStamp', 'DESC');
                        showCommentedDetail(index, record);
                    }
                }
    }
});