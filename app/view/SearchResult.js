


Ext.define('Accessible.view.SearchResult', {
    extend: 'Ext.navigation.View',
    requires: ['Accessible.store.SearchStore','Accessible.view.resultList'],
    xtype: 'searchresult',
    id: 'SearchResultViewId',
    config: {
        data: null,
        items: [
            {
                xtype: 'resultlist',
                
            }
        ]
    }
});