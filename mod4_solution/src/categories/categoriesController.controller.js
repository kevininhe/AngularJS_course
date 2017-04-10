(function () {
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.inject = ['categoriesList']
  function CategoriesController(categoriesList) {
    var categCtrl = this;
    categCtrl.categoriesList = categoriesList.data;
  }
})();
