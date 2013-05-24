/**
 * Created with JetBrains WebStorm.
 * User: Herren
 * Date: 2013-05-19
 * Time: 15:20
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Accessible.store.TopCommentStore',{
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model:'Accessible.model.TopComment',

        proxy: {
            type: 'rest',
            url : 'http://213.103.211.100:8080/api/v1/comments/topten',

            reader: {
                type: 'json',
                rootProperty: 'numberOfComment'
            }

        }


    }

});
