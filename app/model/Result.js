Ext.define('Accessible.model.Result',{
    extend: 'Ext.data.Model',
    config: {
        fields: ['location', 'address']
    },
    locationTitle: function() {
        var d= this.data,
        names = [
            d.location,
            d.address
        ];
        return names.join(" ");
    }
});