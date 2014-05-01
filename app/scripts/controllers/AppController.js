define( function ( require ) {
	'use strict';

	var Marionette = require( 'backbone.marionette' );
	var _          = require( 'underscore' );

	var views = {
		'loginItemView'          : require( 'views/login/itemviews/LoginItemView' ),
		'appLayoutView'          : require( 'views/AppLayoutView' ),
		'dashboardCompositeView' : require( 'views/dashboard/DashboardCompositeView' )
	};

	return Marionette.Controller.extend( {

		'initialize' : function( options ) {
			_.bindAll( this );
			_.extend( this, options );

			return this;
		},

		'showDefault' : function () {
			this.login();
		},

		'login' : function () {
			var loginItemView = new views.loginItemView();
			this.regions.mainContent.show( loginItemView );
		},

		'homePage' : function () {
			this.appLayout( views.dashboardCompositeView );
		},

		'appLayout' : function ( View ) {
			var appLayoutView = new views.appLayoutView();
			this.regions.mainContent.show( appLayoutView );
			this.regions.content.show( new View() );
		}
	} );

} );
