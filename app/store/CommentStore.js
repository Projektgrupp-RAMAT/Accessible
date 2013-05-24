


Ext.define('Accessible.store.CommentStore',{
    extend: 'Ext.data.Store',
    config: {
        id: 'commentstore',
        storeId: 'commentstore',
        model:'Accessible.model.Comment',
        autoload: false,
        proxy: {
            type: 'rest',
            url : 'http://213.103.211.100:8080/api/v1/comments/restaurantId',
            reader: {
                type: 'json',
                rootProperty: 'comment'
            },

            listeners: {
                exception: function(proxy, response, operation){
                    console.log(response.message);
                }
            }


        }
    }
});





