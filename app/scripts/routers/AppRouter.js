define( function ( require ) {
	'use strict';

	var Marionette = require( 'backbone.marionette' );

	return Marionette.AppRouter.extend( {
		/* Backbone routes hash */
		'appRoutes' : {
			''      : 'showDefault',
			'login' : 'login',
			'home'  : 'homePage'
		}
	} );
} );
