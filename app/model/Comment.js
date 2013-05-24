Ext.define('Accessible.model.Comment', {
    extend: 'Ext.data.Model',

    config: {

        fields: ['soundLvl', 'text', 'userName', 'userId', 'restaurantId', 'flagged', 'id', 'timeStamp', 'lat','lon'],
        proxy: {
            type: 'rest',
            url : 'http://213.103.211.100:8080/api/v1/comments'



        }


    }
});