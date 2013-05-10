Ext.define('Accessible.store.CommentStore',{
    extend: 'Ext.data.Store',
    config: {
        model:'Accessible.model.Recieve',
        autoload: true,
        proxy: {
            type: 'rest',
            url : 'http://213.103.211.100:8080/projektgrupp_f/api/v1/comments',
            reader: {
                type: 'json',
                rootProperty: 'comment'
            }
        }
    }
});
