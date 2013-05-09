Ext.define('Accessible.model.Result',{
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'address','icon','vicinty','location']
    },
    locationTitle: function() {
        var d= this.data,
        names = [
            d.name,
            d.address
        ];
        return names.join(" ");
    }
});