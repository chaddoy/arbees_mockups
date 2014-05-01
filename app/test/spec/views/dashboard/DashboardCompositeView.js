(function() {
	'use strict';

	var root = this;

	root.define([
		'views/dashboard/DashboardCompositeView'
		],
		function( DashboardDashboardcompositeview ) {

			describe('DashboardDashboardcompositeview Compositeview', function () {

				it('should be an instance of DashboardDashboardcompositeview Compositeview', function () {
					var ../dashboard/DashboardCompositeView = new DashboardDashboardcompositeview();
					expect( ../dashboard/DashboardCompositeView ).to.be.an.instanceof( DashboardDashboardcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );