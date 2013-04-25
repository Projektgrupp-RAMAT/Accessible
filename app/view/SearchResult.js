Ext.define('Accessible.view.SearchResult', {
    extend: 'Ext.Panel',

    config: {
        title: 'Search Results',
        styleHtmlContent: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                itemId: 'resultList',
                itemTpl: [
                    '<div>{name} </div> '


                ],
                store: 'GooglePlacesStore'
            }
        ],
        listeners: [
            {
                fn: 'onResultListItemTap',
                event: 'itemtap',
                delegate: '#resultList'
            }
        ]
    },

    onResultListItemTap: function(dataview, index, target, record, e, eOpts) {

       this.showResults =  Ext.create('Accessible.view.SearchResultDetail', {
           title:  record.get('name')
        });

        this.showResults.setRecord(record);

        Ext.getCmp('searchNav').push(this.showResults);

    }

});