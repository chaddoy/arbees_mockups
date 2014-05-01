define( function ( require ) {
	'use strict';

	var Backbone = require( 'backbone' );
	var _        = require( 'underscore' );
	var template = require( 'text!tmpl/appLayoutViewTemplate.html' );

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend( {

		'initialize' : function () {
		},

		'template' : _.template( template ),
		/* on render callback */
		'onRender' : function () {}
	} );

} );