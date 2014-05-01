define( function ( require ) {
	'use strict';

	// ## Import statements

	// Libs
	var Marionette = require( 'backbone.marionette' );
	var Backbone   = require( 'backbone' );

	// App scripts
	var Router     = require( 'routers/AppRouter' );
	var Controller = require( 'controllers/AppController' );

	// App event aggregator
	var Communicator = require( 'Communicator' );

	// App instantiation
	var App = new Marionette.Application();

	/* Add application regions here */
	App.addRegions( {
		'mainContent' : '#main-content',
		'content'     : '.content .body'
	} );

	/* Add initializers here */
	App.addInitializer( function () {

		// Controller init
		App.Controller = new Controller( {
			'App'          : App,
			'Communicator' : Communicator,
			'regions'      : {
				'mainContent' : App.mainContent,
				'content'     : App.content
			}
		} );

		// Router init
		App.Router = new Router( {
			'controller': App.Controller
		} );
	} );

	// start history
	App.on( 'initialize:after', function() {
		Backbone.history.start( {
			'pushState': false
		} );
	} );

	return App;
} );
