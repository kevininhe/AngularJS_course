(function () {
  'use strict';
  angular.module('Data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.inject = ['$http','ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var menuData = this;
    this.getAllcategories = function () {
      var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
      });

      return response;
    };
    this.getItemsForCategory = function (categoryShortName) {
      var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {category: categoryShortName}
      });

      return response;
    };
  }
})();
