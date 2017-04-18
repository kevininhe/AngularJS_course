(function () {
  "use strict";

  angular.module('common')
  .service('UserInfoService', UserInfoService);

  function UserInfoService() {
    var service = this;
    var user = {};
    this.createUser = function (firstName, lastName, email, phone, menuItem) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phone = phone;
      user.menuItem = menuItem;
    };
    this.getUser = function () {
      return user;
    };
  }
})();
