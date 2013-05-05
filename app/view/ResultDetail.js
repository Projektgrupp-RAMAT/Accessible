Ext.define('Accessible.view.ResultDetail', {
    extend: 'Ext.Panel',
    
    xtype: 'searchresultdetail',
    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
        title: 'Details',
        tpl: 'Hello, {location} {address}' 
        
    }
});