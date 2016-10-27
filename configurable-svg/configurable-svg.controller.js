( function() {
  'use strict';

  // This controller is only used to drive the demo
  // I will use the variables contained in this controller for setting the SVG attributes
  angular.module( 'ui.engineering' ).controller( 'ConfigurableSvgController', ConfigurableSvgController );

  function ConfigurableSvgController( $log ) {
    var vm = this;

    vm.$onInit = $onInit;


    function $onInit() {
      $log.info( 'ConfigurableSvgController', vm );

      vm.height = 1000;
      vm.width = 2000;

      vm.marginBottom = 0;
      vm.marginLeft = 0;
      vm.marginRight = 0;
      vm.marginTop = 0;
    }
  }
} )();
