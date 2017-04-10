(function () {
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.inject = ['itemsList']
  function ItemsController(itemsList) {
    var itemCtrl = this;
    itemCtrl.categoryName = itemsList.data.category.name;
    itemCtrl.itemsList = itemsList.data.menu_items;
  }
})();
