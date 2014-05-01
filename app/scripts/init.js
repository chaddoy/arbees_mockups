require.config( {

	/* starting point for application */
	'deps' : [ 'backbone.marionette', 'bootstrap', 'main' ],

	'shim' : {
		'backbone' : {
			'deps'    : [ 'underscore', 'jquery' ],
			'exports' : 'Backbone'
		},
		'bootstrap': {
			'deps'    : [ 'jquery' ],
			'exports' : 'jquery'
		}
	},

	'paths' : {
		'jquery'     : '../libs/jquery/jquery',
		'backbone'   : '../libs/backbone-amd/backbone',
		'underscore' : '../libs/underscore-amd/underscore',

		/* alias all marionette libs */
		'backbone.marionette' : '../libs/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr'      : '../libs/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter' : '../libs/backbone.babysitter/lib/amd/backbone.babysitter',

		/* alias the bootstrap js lib */
		'bootstrap' : 'vendor/bootstrap',

		/* Alias text.js for template loading and shortcut the templates dir to tmpl */
		'text' : '../libs/requirejs-text/text',
		'tmpl' : '../templates',

		/* handlebars from the require handlerbars plugin below */
		'handlebars' : '../libs/require-handlebars-plugin/Handlebars',

		/* require handlebars plugin - Alex Sexton */
		'i18nprecompile' : '../libs/require-handlebars-plugin/hbs/i18nprecompile',
		'json2'          : '../libs/require-handlebars-plugin/hbs/json2',
		'hbs'            : '../libs/require-handlebars-plugin/hbs'
	}
} );