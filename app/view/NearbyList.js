function getRestaurantLocation(reference) {
    var service = new google.maps.places.PlacesService(Ext.ComponentQuery.query('map')[0].getMap());
    var request = {reference: reference};
    service.getDetails(request, function(details, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK)
        {
            console.log(details.name + '   ' + details.formatted_address);
        }

        else
        {
            console.log('Failed to turn reference to information.');
        }
    });
}

function showCommentedDetail(target, record) {

    var comp = Ext.ComponentQuery.query('#listNav')[0];
    this.showResults = Ext.create('Accessible.view.SearchResultDetail', {title: record.get('name'), record: record});
    this.showResults.setRecord(record);
    comp.push(this.showResults);
}

Ext.define('Accessible.view.NearbyList', {
    extend: 'Ext.List',
    xtype: 'nearbylist',
    requires: ['Accessible.store.CommentStore'],
    config: {
        title: 'Commented places',
        itemId: 'nearbyList',
        indexBar: false,
        itemTpl: '{userName}',
        store: 'CommentStore',
        listeners:
                {
                    itemtap: function(view, index, item, record, e, eOpts) {
                        getRestaurantLocation(record.get('restaurantId'));
                        showCommentedDetail(index, record);
                    }
                }
    }
});