var mapResults;

function showDetail(target, record) {
    Ext.getCmp('listNav').remove(Ext.getCmp('search-detail'),true);
    var comp = Ext.getCmp('searchNav');
    this.showResults = Ext.create('Accessible.view.SearchResultDetail', {title: record.get('name'), record: record, store: 'Accessible.store.CommentStore'});
    this.showResults.setRecord(record);
    comp.push(this.showResults);

    if (Accessible.fbLoggedIn === '1') {
        var fbPlacesStore = Ext.create('Accessible.store.PlacesStore', {
            extraParams: {
                center: record.get('location').jb + ',' + record.get('location').kb,
                access_token: FB.getAccessToken()
            }
        });

        fbPlacesStore.load({
            params: {
                center: record.get('location').jb + ',' + record.get('location').kb,
                access_token: FB.getAccessToken()
            }
        })

    }
}

Ext.define('Accessible.view.ResultList', {
    extend: 'Ext.List',
    xtype: 'resultlist',
    id: 'resultlist',
    requires: ['Accessible.store.SearchStore', 'Accessible.view.MapPanel', 'Accessible.store.CommentStore'],
    config: {
        data:null,
        title: 'Search Results',
        itemId: 'searchResultList',
        indexBar: false,
        itemTpl: '<img src="{icon}" align="left" style="padding-right:5px; padding-bottom: 5px" width=30px height=30px</img> {name} <tpl if="address">{address}</tpl> <tpl if="commented=='+"'true'"+'"> <img src="img/chart1.png" align="right" width="30px" height="30px"></tpl>',
        store: 'SearchStore',
        listeners:
                {
                    itemtap: function(view, index, item, record, e, eOpts) {
                        if (e !== null)
                        {

                            this.data = record;
                            var commentStore = Ext.create('Accessible.store.CommentStore', {

                                extraParams: {

                                    restaurangId: record.get('id')

                                }

                                    });
                            commentStore.load({
                                params: {
                                    id: record.get('id')
                                }
                            });
                          commentStore.sort('timeStamp', 'DESC');
                            showDetail(index,record);

                        }
                    }
                }
    }
});