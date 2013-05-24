Ext.define('Accessible.controller.Application', {
    extend: 'Ext.app.Controller',


    config: {
        refs: [
            {

                main: 'mainview',
                search: 'searchNav',
                showResults: 'search-detail',
                searchResults: 'searchResult',
                commentButton: '#commentButton',
                cancelButtonComment: '#cancelButtonComment',
                inputView: 'inputview',
                checkInResultView: '#checkInResult',
                sendCommentButton: '#sendCommentButton'
            }

        ],
        control: {




            'list[action=fbResultList]': {
                itemtap: "onListTap"
            },
            'list[action=commentList]': {
                itemtap: "onReport"
            },

            'button[action=submitCheckInButton]': {
                itemtap: "onCheckIn"
            },

            'button[action=checkInButton]': {
                tap: "checkIn"
            },



            'button[action=sendCommentButton]': {
                tap: "sendComment"
            },

            'button[action=logOutButton]': {
                tap: "onLogOut"
            },

            'button[action=commentButton]': {
                tap: "onAddCommentTap"
            },
            cancelButtonComment: {

                tap: 'onCancelButtonCommentTap'

            },

            logOutButton: {

                tap: 'onLogOut'
            },


            sendCommentButton: {

                tap: 'sendComment'

            }

        }

    },

    checkIn: function(){

        if(Accessible.fbLoggedIn === '0'){
        Ext.Msg.confirm("Logged in as guest!", "As a guest you're not allowed to publish check in, would you like to log in using Facebook?", function(btn){
            if (btn === 'yes'){

                guestToFbLogin();

            }
        });}
    }
        ,

    sendComment: function (dataview) {

        if (Accessible.fbLoggedIn === '1') {

            FB.api('/me', function (response) {

                var comment = Ext.create('Accessible.model.Comment', {
                    text: Ext.getCmp('commentText').getValue(),
                    soundLvl: Ext.getCmp('commentSoundLvl').getValue(),
                    userName: response.name,
                    userId: response.id,
                    lat: Ext.getCmp('content').getData().location.jb,
                    lon: Ext.getCmp('content').getData().location.kb,
                    restaurantId: Ext.getCmp('content').getData().id });


                comment.save();





                Ext.Msg.alert('', 'Comment submitted!', function(btn){
                    if (btn == 'ok'){

                        Ext.getCmp('searchNav').pop();
                        Ext.getCmp('commentList').getStore().load({
                            params:{
                                id: Ext.getCmp('content').getData().id
                            }
                        });
                    }
                });



            });
        }
        else {
            var comment = Ext.create('Accessible.model.Comment', {text: Ext.getCmp('commentText').getValue(), soundLvl: Ext.getCmp('commentSoundLvl').getValue(), userName: 'Guest', userId: 'GuestID', restaurantId: Ext.getCmp('content').getData().id});

                comment.save();

        }
    },

    onAddCommentTap: function (dataview) {
        var activeTab = Ext.Viewport.getActiveItem().getActiveItem();
        if ( Accessible.fbLoggedIn === '1'){
        activeTab.push(Ext.create('Accessible.view.InputView'))
        }else{
            Ext.Msg.confirm("Logged in as guest!", "As a guest you're not allowed to publish comments on places, would you like to log in using Facebook?", function(btn){
                if (btn === 'yes'){

                    guestToFbLogin();

                }
            });
        }
    },

    onCancelButtonCommentTap: function () {

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

    },
    onLogOut: function () {



        if ( Accessible.fbLoggedIn === '1'){
        FB.logout(function (response) {


            // user is now logged out

        });
        }

        var me = this;
        me.login = Ext.create('Accessible.view.LoginPanel', {
        });

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(me.login);

        Ext.Viewport.setActiveItem(me.login);


    },

    onReport: function(list, index, target, record, event){



        if(Accessible.fbLoggedIn === '1'){
        if(event.target.id === 'repBtn'){

            Ext.Msg.confirm("Report comment", "Are you sure you want to report this comment?",
                function(btn){
                    if (btn === 'yes'){


                        var comment = Ext.create('Accessible.model.CommentReport', {

                           flagged: true,
                           id: record.get('id'),
                           restaurantId: record.get('restaurantId'),
                           soundLvl: record.get('soundLvl'),
                           text: record.get('text'),
                           userId: record.get('userId'),
                           userName: record.get('userName'),
                           timeStamp: record.get('timeStamp'),
                           referenceId: record.get('referenceId'),
                            lat: Ext.getCmp('content').getData().location.jb,
                            lon: Ext.getCmp('content').getData().location.kb,
                            extraParams: {

                                id: record.get('id')

                            }



                        });

                        comment.save();




                    }});



        }

        }
    },
    onListTap: function (dataview, index, record) {



        var store = dataview.getStore();
        record = store.getAt(index);

        var myView = Ext.getCmp('CheckInResultId');
        var checkInResultView = Ext.getCmp('CheckInResultId');

        myView.data = record;

        var placeId = Ext.create('Ext.form.FieldSet', {

            itemId: 'fbPlace',
            title: record.get('name')


        });

        var text = Ext.create('Ext.field.TextArea', {

            itemId: 'fbCommentText',
            label: 'Check in message:',
            labelWidth: '35%'

        });

        var button = Ext.create('Ext.Button', {
            text: 'Check in!',
            ui: 'fbButton',
            itemId: 'submitCheckInButton'


        });
        if (myView.down('#fbPlace')){
            myView.down('#fbPlace').setTitle(record.get('name'));
            myView.down('#fbPlace').show();
            myView.down('#fbCommentText').reset();
            myView.down('#fbCommentText').show();
            myView.down('#submitCheckInButton').show();

        }else{
        myView.add(placeId);
        myView.add(text);
        myView.add(button);
        }
        //checkInResultView.hide();
        //checkInResultView.remove();
    }
});

function guestToFbLogin(){

    var searchResultView = Ext.getCmp('resultlist');
    FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                // connected
                onLogin();


            } else if (response.status === 'not_authorized') {
                // not_authorized
                login();
            } else {
                login();
                // not_logged_in
            }

        });


        function login() {
            FB.login(function(response) {
                    if (response.authResponse) {
                        Accessible.fbLoggedIn = '1';
                        // connected
                        onLogin();
                    } else {
                        // cancelled
                    }
                },
                {scope: 'publish_checkins'});//facebook user permissions

        }
        function onLogin() {
            Accessible.fbLoggedIn = '1';

            FB.api('/me', function (response) {

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '! <br> Navigate by using the controls below, the <b>Search tab</b> will give you options to search for locations, the <b>Top Commented</b> tab will show you the most commented locations, and last the <b>Maps tab </b>  will show you a map with markers for sorrounding locations.';
                document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';

            });

            var fbPlacesStore = Ext.create('Accessible.store.PlacesStore', {
                extraParams: {
                    center: searchResultView.data.get('location').jb + ',' + searchResultView.data.get('location').kb,
                    access_token: FB.getAccessToken()
                }

            });


            fbPlacesStore.load({
                params: {
                    center: searchResultView.data.get('location').jb + ',' + searchResultView.data.get('location').kb,
                    access_token: FB.getAccessToken()
                }
            })
        }



}
