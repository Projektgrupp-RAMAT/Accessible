Ext.define('Accessible.view.CheckInResult', {
    extend: 'Ext.Panel',
    id: 'CheckInResultId',
    alias: 'widget.CheckInResult',
    xtype: 'CheckInResult',

    config: {
        modal: true,
        hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        centered: true,
        width: '50%',
        height: '50%',

        styleHtmlContent: true,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Check in'
            },
            {
                xtype: 'list',
                flex: 1,
                action: 'fbResultList',
                itemId: 'fbResultList',
                itemTpl: [
                    '<div>{name} </div> '

                ],
                store: 'PlacesStore'
            }

        ],
        listeners: [
            {
                fn: 'onCheckin',
                event: 'tap',
                delegate: '#submitCheckInButton'
            },
            {
                fn: 'onResultListItemTap',
                event: 'itemtap',
                delegate: '#fbResultList'
            }
        ]
    },

    onResultListItemTap: function(dataview, index, target, record, e, eOpts) {


    },
    onCheckin: function(){

        var checkInResultView = Ext.getCmp('CheckInResultId');


        var checkInId = this.data.get('id')
        var checkInLatitude = this.data.get('location.latitude')
        var checkInLongitude = this.data.get('location.longitude')
        var checkInText = this.down('#fbCommentText');
        var checkInButton = this.down('#submitCheckInButton');
        var checkInPlace = this.down('#fbPlace');


        FB.api('/me/checkins', 'post',
            {
                message: Ext.getCmp('fbCommentText').getValue(),

                place: checkInId,//this.data.get('id'),
                coordinates: {
                    'latitude': checkInLatitude ,//this.data.get('latitude'),
                    'longitude': checkInLongitude//this.data.get('longitude')
                }
            },
            function (){
                Ext.Msg.alert('Check in successful!')
                checkInText.hide();
                checkInButton.hide();
                checkInPlace.hide();

                checkInResultView.hide();

            }


        );


    }


});