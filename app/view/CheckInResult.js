Ext.define('Accessible.view.CheckInResult', {
    extend: 'Ext.Panel',
    id: 'CheckInResultId',
    alias: 'widget.CheckInResult',
    xtype: 'CheckInResult',

    config: {
        modal: true,
        hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        centered: true,
        width: '50%',
        height: '50%',

        styleHtmlContent: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Pick a nearby place'
            },
            {
                xtype: 'list',
                action: 'fbResultList',
                itemId: 'fbResultList',
                itemTpl: [
                    '<div>{name} </div> '

                ],
                store: 'PlacesStore'
            }

        ]/*,
        listeners: [
            {
                fn: 'onResultListItemTap',
                event: 'itemtap',
                delegate: '#resultList'
            }
        ]   */
    }/*,

    onResultListItemTap: function(dataview, index, target, record, e, eOpts) {


        this.tapped = 'woop'

       /*
        this.showResults =  Ext.create('Accessible.view.SearchResultDetail', {
            title:  record.get('name')
        });

        this.showResults.setRecord(record);

        Ext.getCmp('searchNav').push(this.showResults);
         */
    //}

});