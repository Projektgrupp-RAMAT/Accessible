Ext.define('Accessible.model.Comment', {
    extend: 'Ext.data.Model',

    config: {

        fields: ['soundLvl', 'text', 'userName', 'userId'],
        proxy: {
            type: 'rest',
            url : 'http://213.103.219.219:8080/projektgrupp_f/api/v1/restaurants/2/comments'

        }


    }
});