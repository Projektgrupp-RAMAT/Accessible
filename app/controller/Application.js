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
                checkInResultView: '#checkInResult'
                //sendCommentButton: '#sendCommentButton'
                //logOutButton: '#logOutButton'
            }

        ],
        control: {




            'list[action=fbResultList]': {
                itemtap: "onListTap"
            },

            'button[action=submitCheckInButton]': {
                itemtap: "onCheckIn"
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

    sendComment: function () {

        console.log("Send comment");

        if (Accessible.fbLoggedIn === '1') {

            FB.api('/me', function (response) {

                var comment = Ext.create('Accessible.model.Comment', {text: Ext.getCmp('commentText').getValue(), soundLvl: Ext.getCmp('commentSoundLvl').getValue(), userName: response.name, userId: response.id});
                console.log(comment);
                //    comment.save(); //POST /users

            });
        }
        else {
            var comment = Ext.create('Accessible.model.Comment', {text: Ext.getCmp('commentText').getValue(), soundLvl: Ext.getCmp('commentSoundLvl').getValue(), userName: 'Guest', userId: 'GuestID'});
            console.log(comment);
            //    comment.save(); //POST /users

        }
    },

    onAddCommentTap: function () {



        console.log("Todo, implement comment handler-_- #yolo")
        if ( Accessible.fbLoggedIn === '1'){


        Ext.getCmp('searchNav').push(Ext.create('Accessible.view.InputView'))
        //    Ext.Viewport.setActiveItem(Ext.create('Accessible.view.InputView'));
        }else{
            Ext.Msg.confirm("Logged in as guest!", "As a guest you're not allowed to publish comments on places, would you like to log in using Facebook?", function(btn){
                if (btn === 'yes'){

                    guestToFbLogin();

                }
            });
        }
    },

    onCancelButtonCommentTap: function () {

        console.log("Todo, implement cancel function?? #swag");
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

    },
    onLogOut: function () {


        console.log(Accessible.fbLoggedIn);

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
    onListTap: function (dataview, index, record) {



        var store = dataview.getStore();
        record = store.getAt(index);

        var myView = Ext.getCmp('inputViewId');
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
        checkInResultView.hide();
        checkInResultView.remove();
    }
});

function guestToFbLogin(){

    var searchResultView = Ext.getCmp('SearchResultViewId');
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

                document.getElementById('myText').innerHTML = 'Welcome to Eat & Hear ' + response.name + '!';
                document.getElementById('fbPic').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';

            });

            var fbPlacesStore = Ext.create('Accessible.store.PlacesStore', {
                extraParams: {
                    center: searchResultView.data.data.geometry.location.lat + ',' + searchResultView.data.data.geometry.location.lng,
                    access_token: FB.getAccessToken()
                }

            });


            fbPlacesStore.load({
                params: {
                    center: searchResultView.data.data.geometry.location.lat + ',' + searchResultView.data.data.geometry.location.lng,
                    access_token: FB.getAccessToken()
                }
            })
        }



}