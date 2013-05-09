var mapResults;

function showDetail(target, record) {
    
    var comp = Ext.ComponentQuery.query('#nearbyList')[0];
    this.showResults = Ext.create('Accessible.view.SearchResultDetail',{title: record.locationTitle(), record: record});
    this.showResults.setRecord(record);
    comp.push(this.showResults);
    
    if ( Accessible.fbLoggedIn === '1'){
        var fbPlacesStore = Ext.create('Accessible.store.PlacesStore', {
            extraParams: {
                center: record.get('location').kb + ',' + record.get('location').lb,
                access_token: FB.getAccessToken()
            }
        });
        
        fbPlacesStore.load({
            params: {
                center: record.get('location').kb + ',' + record.get('location').lb,
                access_token: FB.getAccessToken()        
            }
        })
        
    }
}

Ext.define('Accessible.view.NearbyList', {
    extend: 'Ext.List',
    xtype: 'nearbylist',
    requires: ['Accessible.store.SearchStore'],
    config: {
        title: 'Commented places',
        itemId: 'nearbyList',
        indexBar: false,
        itemTpl: '{name} {address}',
        store: 'SearchStore',
         listeners:
                {
                    itemtap: function(view,index,item,record){
                        showDetail(index,record);
                    }
                }
    },
    
   
});