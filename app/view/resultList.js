var mapResults;

function showDetail(target, record) {

    var comp = Ext.ComponentQuery.query('#searchNav')[0];
    this.showResults = Ext.create('Accessible.view.SearchResultDetail', {title: record.get('name'), record: record});
    this.showResults.setRecord(record);
    comp.push(this.showResults);

    if (Accessible.fbLoggedIn === '1') {
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

Ext.define('Accessible.view.resultList', {
    extend: 'Ext.List',
    xtype: 'resultlist',
    requires: ['Accessible.store.SearchStore', 'Accessible.view.MapPanel'],
    config: {
        title: 'List',
        itemId: 'myList',
        indexBar: false,
        itemTpl: '{name} {address}',
        store: 'SearchStore',
        listeners:
                {
                    itemtap: function(view, index, item, record, e, eOpts) {
                        if (e !== null)
                        {
                            console.log('resultlist');
                            showDetail(index, record);
                        }
                    }
                }
    },
});