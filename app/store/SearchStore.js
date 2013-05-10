Ext.define('Accessible.store.SearchStore',{
    extend: 'Ext.data.Store',
    
    config: {
        model:'Accessible.model.Result',
        
        grouper: function (record){
            return record.get('name')[0];
        }

    }
});
