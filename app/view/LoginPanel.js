Ext.define('Accessible.view.LoginPanel', {
    extend: 'Ext.form.Panel',
    requires: 'Ext.Img',
    config: {
        id: 'LoginPanel',
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Eat & Hear'
            },
            {
                xtype: 'image',
                src: 'img/eah.png',
                height: '147px',
                width: '300px',
                margin: 'auto'
            },
            {
                html: '<br><div align="center"><b>Welcome to Eat & Hear </b><br> A webapplication created by a group of students at Royal Institue of Techonology in a course called HI1028 Software development, project course.</div><br>'
            },
            {
                xtype: 'button',
                width: '100%',
                height: '40px',
                ui: 'greyButton',
                text: 'Guest login',
                id: 'loginButton',
                padding: '10 10 10 10'

            },
            {
                xtype: 'button',
                width: '100%',
                height: '40px',
                text: 'Facebook login',
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