var mapResults;

function getResultList() {
	var comp = Ext.ComponentQuery.query('Gmaps')[0];
    console.log('Comp:'+comp);
 
    var request = {
        query: Ext.ComponentQuery.query('#nameField')[0].getValue()+' in '+Ext.ComponentQuery.query('#locationField')[0].getValue(),
    };
    var service = new google.maps.places.PlacesService(comp.getMap());
    service.textSearch(request, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            detailResult(results[i]);
        }
		}
		 if (status === google.maps.places.PlacesServiceStatus.ERROR) {
            console.log("Error");
        }
        if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
            console.log("Invalid");
        }
        if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
            console.log("Over query");
        }
        if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
            console.log("not found");
        }
        if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
            console.log("request denied");
        }
        if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
            console.log("unknown error");
        }
        if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            console.log("Zero");
        }

    });
   console.log("getresult4!");
}

function detailResult(result) {
	var store = Ext.ComponentQuery.query('resultlist')[0].getStore();
	var service = new google.maps.places.PlacesService(Ext.ComponentQuery.query('Gmaps')[0].getMap());
    var request1 = {reference: result.reference};
    service.getDetails(request1, function(details, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK)
        {
            store.add({location: details.name, address: details.formatted_address});
        }
        else
        {
            store.add({location: result.name, address: 'N/A'});
        }

    });
	
}
function showDetail(list, record) {
    console.log("PRessed!");
    var comp = Ext.ComponentQuery.query('#searchNav')[0];
    comp.push({
        xtype: 'searchresultdetail',
        title: record.locationTitle(),
        data: record.data
    });


}
Ext.define('Accessible.view.resultList', {
    extend: 'Ext.List',
    xtype: 'resultlist',
    requires: ['Accessible.store.SearchStore','Accessible.view.MapPanel'],
    config: {
        title: 'List',
        id: 'myList',
        grouped: true,
        indexBar: false,
        itemTpl: '{location} {address}',
        store: 'SearchStore',
        onItemDisclosure: true,
        listeners: {
            disclose: function(list, record) {
                showDetail(list, record);
            },
			painted: function() {
				getResultList();
                                
			}
        },
        back: function() {
    console.log("I am BACK!");
        Ext.ComponentQuery.query('resultlist')[0].getStore().removeAll();
//            Ext.ComponentQuery.query('resultlist')[0].destroy();
        }

    },
});