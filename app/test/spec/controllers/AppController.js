(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/AppController'
		],
		function( Appcontroller ) {

			describe('Appcontroller Controller', function () {

				it('should be an instance of Appcontroller Controller', function () {
					var AppController = new Appcontroller();
					expect( AppController ).to.be.an.instanceof( Appcontroller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );