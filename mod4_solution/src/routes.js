(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
  		.otherwise('/');

    $stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: 'src/home/home.html'
  			})
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories/categories.html',
        controller: 'CategoriesController as categCtrl',
        resolve: {
          categoriesList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllcategories();
          }]
        }
      })
      .state('items',{
        url: '/items/{categoryId}',
        templateUrl: 'src/items/items.html',
        controller: 'ItemsController as itemCtrl',
        resolve: {
          itemsList: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      });
  }
})();
