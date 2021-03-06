( function() {
  'use strict';

  var configurableSvg = {
    bindings: {
      height: '<', // you should be using one-way bindings!
      width: '<'
    },
    controller: controller,
    controllerAs: 'vm',
    template: '<div class="container"></div>'
  };

  angular.module( 'ui.theoria' ).component( 'configurableSvg', configurableSvg );


  function controller( $element, $log ) {
    var vm = this;

    vm.$onChanges = $onChanges;
    vm.$onInit = $onInit;
    vm.$postLink = $postLink;


    function $onChanges( changes ) {
      var updateViewBox = false;

      if( changes.height && !changes.height.isFirstChange() ) {
        updateViewBox = true;
      }

      if( changes.width && !changes.width.isFirstChange() ) {
        updateViewBox = true;
      }

      if( updateViewBox ) {
        viewBoxUpdate();
      }
    }

    function $onInit() {
      $log.info( 'configurableSvg', configurableSvg );
    }

    function $postLink() {
      visualizationSetup();
      demoAddRect();
    }

    function demoAddRect() {
      vm.svg.append( 'rect' )
        .classed( 'little-rect', true )
        .attr( 'x', 1 )
        .attr( 'y', 1 )
        .attr( 'width', 5 )
        .attr( 'height', 5 )
    }

    function viewBoxUpdate() {
      vm.svg
        .transition()
        .duration( 750 )
        .attr( 'viewBox', '0 0 ' + vm.width + ' ' + vm.height );
    }

    function visualizationSetup() {
      vm.container = $element[0].querySelector( '.container' );

      vm.svg = d3.select( vm.container )
        .append( 'svg' );

      viewBoxUpdate();
    }
  }
} )();
