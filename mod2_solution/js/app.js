(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    buyList.toBuyList = ShoppingListCheckOffService.getToBuyList();
    buyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyAnItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.alBoughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var shopService = this;
    //To buy List
    var toBuyList = [
      {name: "cookies", quantity: 10},
      {name: "bottles of milk", quantity: 3},
      {name: "bars of chocolate", quantity: 2},
      {name: "candies", quantity: 10},
      {name: "bottles of juice", quantity: 5}
    ];
    shopService.getToBuyList = function () {
      return toBuyList;
    };

    //Bought List
    var boughtList = [];

    shopService.buyAnItem = function (itemIndex) {
      var boughtItem = toBuyList[itemIndex];
      boughtList.push(boughtItem);
      toBuyList.splice(itemIndex, 1);
    };
    shopService.getBoughtList = function () {
      return boughtList;
    };
  }

})();
