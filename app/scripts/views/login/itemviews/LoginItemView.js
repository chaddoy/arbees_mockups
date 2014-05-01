define( function ( require ) {
	'use strict';

	var Marionette = require( 'backbone.marionette' );
	var _          = require( 'underscore' );
	var template   = require( 'text!tmpl/login/itemviews/loginItemView.html' );

	/* Return a ItemView class definition */
	return Marionette.ItemView.extend( {
		'events' : {
			'submit #login' : 'authenticateUser'
		},
		'template' : _.template( template ),
		'ui' : {
			'usernameField' : '#username',
			'passwordField' : '#password'
		},

		'authenticateUser' : function ( e ) {
			e.preventDefault();
			if ( this.ui.usernameField.val() === 'testfoo' && this.ui.passwordField.val() === 'testfoo' ) {
				window.location = '#home';
			}
		}

		// TODO: Error messages.
	} );

} );