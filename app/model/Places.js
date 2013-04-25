Ext.define('Accessible.model.Places', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'category_list'
            },
            {
                name: 'name'
            },
            {
                name: 'location'
            },
            {
                name: 'id'
            },
            {
                name: 'location.city'
            },
            {
                name: 'category_list.name'
            }
            ,
            {
                name: 'location.street'
            }
            ,
            {
                name: 'location.zip'
            }
            ,
            {
                name: 'location.country'
            },
            {
                name: 'location.latitude'
            },
            {
                name: 'location.longitude'
            }

        ]
    }
});