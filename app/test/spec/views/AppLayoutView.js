(function() {
	'use strict';

	var root = this;

	root.define([
		'views/AppLayoutView'
		],
		function( Applayout ) {

			describe('Applayout Layout', function () {

				it('should be an instance of Applayout Layout', function () {
					var ../AppLayout = new Applayout();
					expect( ../AppLayout ).to.be.an.instanceof( Applayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );