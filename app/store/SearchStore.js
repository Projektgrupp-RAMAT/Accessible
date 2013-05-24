Ext.define('Accessible.store.SearchStore',{
    extend: 'Ext.data.Store',
    
    config: {
        model:'Accessible.model.Result',



        listeners: {
            exception: function(proxy, response, operation){
                console.log(response.message + 'searchStore');
            }
        }

    }

});
