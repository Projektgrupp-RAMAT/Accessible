/**
 * Created with JetBrains WebStorm.
 * User: Herren
 * Date: 2013-04-17
 * Time: 13:36
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Accessible.model.User', {
    extend: 'Ext.data.Model',

    config: {


        fields: [

            {
                name: 'userName'

            },
            {
                name: 'userId'
            }
        ]
    }
});