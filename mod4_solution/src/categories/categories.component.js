(function () {
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/categories/listOfCategories.html',
    bindings: {
		  categoriesList: '<'
    }
  });
})();
