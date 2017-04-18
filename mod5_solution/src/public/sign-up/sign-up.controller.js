(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserInfoService'];
  function SignUpController(MenuService, UserInfoService) {
    var signUpCtrl = this;
    signUpCtrl.menuItemFound = true;
    signUpCtrl.success = false;

    signUpCtrl.submit = function () {
      signUpCtrl.menuItemName="";
      var promise = MenuService.getSingleMenuItem(signUpCtrl.user.favDish);
      promise.then(function (result) {
        signUpCtrl.menuItemName = result.name;
        signUpCtrl.menuItemFound = true;
        signUpCtrl.user.menuItem = result;
        //Add user
        addUser(signUpCtrl.user);
        signUpCtrl.success = true;
      })
      .catch(function (reason) {
        signUpCtrl.menuItemFound = false;
      });
    }

    function addUser(user) {
      UserInfoService.createUser(user.firstName, user.lastname, user.email, user.phone, user.menuItem);
    }
  }
})();
