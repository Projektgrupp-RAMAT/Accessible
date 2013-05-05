Ext.define('Accessible.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'LoginPanel',
            'MainPanel',
            'SearchResult',
            'LoginPanel',
            'MapPanel',
            'resultList',
            'SearchResultDetail'
             
        ],
        refs: {
            resultlist: 'resultlist',
            main: 'mainpanel'
        },
        control: {
            resultlist: {

                disclose: 'onDiscloseEvent'
                 
            }
        }
    },
    onDiscloseEvent: function(list, record, target, index, event, eOpts) {
        console.log('Disclose event fired.');

    }
});