Ext.define('Accessible.view.LoginPanel', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'LoginPanel',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'emailfield',
                id: 'emailField',
                label: 'E-mail',
                placeHolder: 'name@domain.com'

            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Login'
            },
            {
                xtype: 'passwordfield',
                id: 'passwordField',
                label: 'Password'
            },
            {
                xtype: 'button',
                ui: 'greyButton',
                text: 'Login as guest',
                id: 'loginButton'

            },
            {
                xtype: 'button',
                width: '40%',
                height: '40%',
                text: 'Login using Facebook',
                id: 'fButton',
                ui: 'fbButton',
                margin: 'auto'

            }
        ],
        listeners: [
            {
                fn: 'onLoginButtonTap',
                event: 'tap',
                delegate: '#loginButton'
            },
            {
                fn: 'onFacebookInit',
                event: 'tap',
                delegate: '#fButton'
            }
        ]
    },

    onLoginButtonTap: function() {

        Ext.Msg.confirm("Login as guest", "Logging in as guest limits what you can do using this app, are you sure you want to continue?", function(btn){
            if (btn === 'yes'){
                var me = this;
                me.main = Ext.create('Accessible.view.MainPanel', {

                });
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

                Ext.Viewport.setActiveItem(me.main);
            }
        });



     //   this.destroy();
    },

    onFacebookInit: function() {

        console.log("FB login button pressed.")   ;

        //FB KOD

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
        function onLogin() {//create instance of main view and set it to active view
            var me = this;
            Accessible.fbLoggedIn = '1';

            me.main = Ext.create('Accessible.view.MainPanel', {

            });
            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

            Ext.Viewport.setActiveItem(me.main);



        }
    },
    initialize: function(){
        Accessible.fbLoggedIn = '0';

    }





});