
Ext.define('Accessible.view.InputView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.inputview',
    id: 'inputViewId',
    xtype: 'inputview',


    config: {
        data: null,
        styleHtmlContent: true,
        title: 'Add comment',
        items: [
            {
                xtype: 'spinnerfield',
                id: 'commentSoundLvl',
                label: 'Soundlevel',
                labelWidth: '35%',
                minValue: 0,
                maxValue: 10,
                stepValue: 0.1,
                cycle: true
            },
            {
                xtype: 'textareafield',
                id: 'commentText',
                label: 'Comment',
                labelWidth: '35%',
                placeHolder: 'Enter your comment..'

            },

            {
                xtype: 'button',
                action: 'sendCommentButton',
                ui: 'confirm',
                text: 'Submit'
            }/*,
            {
                xtype: 'button',
                action: 'checkInButton',
                ui: 'fbButton',
                text: 'Check in at a nearby place!',
                handler: function(){
                    if(!this.overlay){
                        var view = Ext.ClassManager.instantiate('Accessible.view.CheckInResult', {
                            itemId: 'overlayView'
                        })
                        this.overlay = Ext.Viewport.add(view);

                    }
                    this.overlay.show();

                }
            }  */

        ],
        listeners: [
            {
                fn: 'onCheckin',
                event: 'tap',
                delegate: '#submitCheckInButton'
            }
        ]
    },
    onCheckin: function(){

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
            }

        );


    }


});