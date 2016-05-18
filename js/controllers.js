angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider','ui-rangeSlider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/home-slider.jpg',
    'img/home-slider.jpg',
    'img/home-slider.jpg'
  ];
  $scope.client = [
    {
      detail: "I can now wear a new outfit for every occasion, thanks to their super quick service, and access to a huge selection of outfits by some of my favourite designers!",
      name: "Riya shah"
    },
    {
      detail: "I can now wear a new outfit for every occasion, thanks to their super quick service, and access to a huge selection of outfits by some of my favourite designers!",
      name: "Riya shah"
    }
  ];
})
.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("profile");
  $scope.menutitle = NavigationService.makeactive("Profile");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('OrdersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("orders");
  $scope.menutitle = NavigationService.makeactive("Orders");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('OrderdetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("orderdetail");
  $scope.menutitle = NavigationService.makeactive("Orderdetail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("wishlist");
  $scope.menutitle = NavigationService.makeactive("Wishlist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('AddressCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("address");
  $scope.menutitle = NavigationService.makeactive("Address");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('ChangepasswordCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("changepassword");
  $scope.menutitle = NavigationService.makeactive("Changepassword");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("cart");
  $scope.menutitle = NavigationService.makeactive("Cart");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('ProductCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("product");
  $scope.menutitle = NavigationService.makeactive("Product");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  // $scope.added = "fa-heart-o";
  // $scope.addProduct = function(){
  //   if($scope.added == "fa-heart"){
  //     $scope.added = "fa-heart-o";
  //   }else {
  //     $scope.added = "fa-heart";
  //   }
  // };

  $scope.demo2 = {
    range: {
        min: 0,
        max: 10050
    },
    minPrice: 1000,
    maxPrice: 4000
};

  $scope.shopping = [
    {
      img: "img/logo.png",
      name: "The Mashq Suit",
      price: "4500"
    },
    {
      img: "img/logo.png",
      name: "The Mashq Suit",
      price: "4500"
    }
  ];
})
.controller('ProductdetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("productdetail");
  $scope.menutitle = NavigationService.makeactive("Productdetail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.oneAtATime = true;
})

.controller('headerctrl', function($scope, TemplateService,$uibModal) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $scope.signUp = function() {
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/signup.html",
      controller: "headerctrl"
    });
  };
  $scope.logIn = function() {
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/login.html",
      controller: "headerctrl"
    });
  };
  $scope.emailSignup = function() {
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/email-signup.html",
      controller: "headerctrl"
    });
  };
  $scope.forgot = function() {
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/forgotpassword.html",
      controller: "headerctrl"
    });
  };
  $scope.oneAtATime = true;

  $scope.showCross = "";
  $scope.showMe = "menu-out";
  $scope.showMenu = function() {
    if($scope.showMe == "menu-in"){
      $scope.showMe = "menu-out";
      $scope.showCross = "";
    }else {
      $scope.showMe = "menu-in";
      $scope.showCross = "cross-ham";
    }
  }
})

.controller('languageCtrl', function($scope, TemplateService,$translate,$rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if(!$.jStorage.get("language")){
        $translate.use("hi");
        $.jStorage.set("language","hi");
      }
      else {
        if($.jStorage.get("language") == "en")
        {
          $translate.use("hi");
          $.jStorage.set("language","hi");
        }
        else {
          $translate.use("en");
          $.jStorage.set("language","en");
        }
      }
    //  $rootScope.$apply();
    };


})

;
