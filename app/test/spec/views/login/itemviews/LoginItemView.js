(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/../login/itemviews/LoginItemView'
		],
		function( LoginItemviewsLoginitemview ) {

			describe('LoginItemviewsLoginitemview Itemview', function () {

				it('should be an instance of LoginItemviewsLoginitemview Itemview', function () {
					var ../login/itemviews/LoginItemView = new LoginItemviewsLoginitemview();
					expect( ../login/itemviews/LoginItemView ).to.be.an.instanceof( LoginItemviewsLoginitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );