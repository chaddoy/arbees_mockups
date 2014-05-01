define( function ( require ) {
	'use strict';

	var Backbone = require( 'backbone' );
	var _        = require( 'underscore' );
	var template = require( 'text!tmpl/dashboard/dashboardCompositeViewTemplate.html' );

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend( {

		'initialize' : function () {
		},

		'template' : _.template( template ),

		/* on render callback */
		'onRender' : function () {}
	} );

} );
