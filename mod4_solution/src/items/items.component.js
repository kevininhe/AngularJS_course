(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/items/listOfItems.html',
    bindings: {
      itemsList: '<'
    }
  });
})();
