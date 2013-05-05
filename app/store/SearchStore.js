Ext.define('Accessible.store.SearchStore',{
    extend: 'Ext.data.Store',
    
    config: {
        model:'Accessible.model.Result',
        sorters: 'location',
        grouper: function (record){
            return record.get('location')[0];
        }

    }
});
