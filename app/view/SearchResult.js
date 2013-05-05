Ext.define('Accessible.view.SearchResult', {
    extend: 'Ext.navigation.View',
    xtype: 'searchresult',
    config: {
        //title: 'Search Results',
//        styleHtmlContent: true,
//        layout: {
//            type: 'fit'
//        },
        items: [
            {
                xtype: 'resultlist'
            }
        ]
        
//        listeners: [
//            {
//                fn: 'onResultListItemTap',
//                event: 'itemtap',
//                delegate: '#resultList'
//            }
//        ]
    },
    painted: function()
    {
        console.log('test2');
    },
//    onResultListItemTap: function(dataview, index, target, record, e, eOpts) {
//
//       this.showResults =  Ext.create('Accessible.view.SearchResultDetail', {
//           title:  record.get('name')
//        });
//
//        this.showResults.setRecord(record);
//
//        Ext.getCmp('searchNav').push(this.showResults);
//
//    }
  back: function() {
    console.log("I am BACK!");
        Ext.ComponentQuery.query('resultlist')[0].getStore().removeAll();
//            Ext.ComponentQuery.query('resultlist')[0].destroy();
        }
});