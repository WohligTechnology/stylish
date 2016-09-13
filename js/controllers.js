var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui-rangeSlider', 'infinite-scroll', 'angular.filter'])


.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        console.log($scope.navigation);
        $scope.footerColor = "home-footer";
        $scope.subcategory = [];

        $scope.mySlides = [
            'img/home-slider.jpg',
            'img/home-slider.jpg',
            'img/home-slider.jpg'
        ];
        var temp = [];
        NavigationService.getSubcategory(function(data) {
            console.log(data);
            _.each(data.data, function(key) {
                // body...
                if (key.imagetype == 'big') {
                    if (temp.length !== 0) {
                        temp = _.chunk(temp, 2);
                        $scope.subcategory.push(temp);
                        temp = [];
                    }
                    $scope.subcategory.push(key);
                } else if (key.imagetype == 'small') {
                    temp.push(key);
                }
            });

            if (temp.length !== 0) {
                temp = _.chunk(temp, 2);
                $scope.subcategory.push(temp);
                temp = [];
            }
            console.log($scope.subcategory);

        }, function(err) {

        });

        $scope.client = [{
            detail: "I can now wear a new outfit for every occasion, thanks to their super quick service, and access to a huge selection of outfits by some of my favourite designers!",
            name: "Riya shah"
        }, {
            detail: "I can now wear a new outfit for every occasion, thanks to their super quick service, and access to a huge selection of outfits by some of my favourite designers!",
            name: "Riya shah"
        }];
    })
    .controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("profile");
        $scope.menutitle = NavigationService.makeactive("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.set = {};
        $scope.getProfile = function() {
            NavigationService.getProfile(function(data) {
                if (data.value) {
                    $scope.userdata = data.data;
                    console.log("uu", $scope.userdata);
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getProfile();


        $scope.saveProfile = function() {
            $scope.set.Profile = false;
            console.log($scope.userdata);
            NavigationService.userProfileSave($scope.userdata, function(data) {
                $scope.setProfile = false;
            });
        };
        $scope.logoutClick = function() {
            NavigationService.logout(function(data) {
                if (data.value) {
                    // NavigationService.saveUser(null);

                    // $scope.isLoggedIn = false;
                    $state.go("home");
                }
            }, function(err) {

            });
        };

    })
    .controller('OrdersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("orders");
        $scope.menutitle = NavigationService.makeactive("Orders");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

    })
    .controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("terms-condition");
        $scope.menutitle = NavigationService.makeactive("Terms Condition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

    })
    .controller('CancelationPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("cancelation-policy");
        $scope.menutitle = NavigationService.makeactive("Cancelation Policy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

    })
    .controller('PrivacyPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("privacy-policy");
        $scope.menutitle = NavigationService.makeactive("Privacy Policy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

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

        function getWishlist() {
            NavigationService.getWishlistUser(function(data) {
                $scope.wishlist = data.data.data;
            });
        }
        getWishlist();

        $scope.deleteWishlist = function(id) {
            NavigationService.deleteWishlist(id, function(data) {
                console.log(data);
                getWishlist();
            });
        };

    })
    .controller('AddressCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("address");
        $scope.menutitle = NavigationService.makeactive("Address");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.flags = {};
        $scope.flags.sameshipping = false;
        $scope.userdata = {};
        $scope.getUserAddress = function() {
            NavigationService.getProfile(function(data) {
                if (data.value) {
                    $scope.userdata = data.data;
                    console.log($scope.userdata, 'userdata');
                    $scope.billingAddress = _.find($scope.userdata.billingAddress, {
                        isDefault: true
                    });
                    $scope.shippingAddress = _.find($scope.userdata.shippingAddress, {
                        isDefault: true
                    });
                    if ($scope.billingAddress) {
                        $scope.userdata.billingAddress = $scope.billingAddress;
                    } else {
                        $scope.userdata.billingAddress = $scope.userdata.billingAddress[0];
                    }
                    if ($scope.shippingAddress) {
                        $scope.userdata.shippingAddress = $scope.shippingAddress;
                    } else {
                        $scope.userdata.shippingAddress = $scope.userdata.shippingAddress[0];
                    }
                    console.log($scope.userdata);
                } else {
                    console.log("offline");
                    if ($.jStorage.get("userData")) {
                        $scope.userdata = $.jStorage.get("userData");
                    }
                }
            }, function(err) {});
        };
        $scope.getUserAddress();
        $scope.sameShipping = function() {
            console.log("new data", $scope.userdata);
            if ($scope.flags.sameshipping) {
                $scope.userdata.shippingAddress = {};
                $scope.userdata.shippingAddress.shippingAddressFlat = $scope.userdata.billingAddress.billingAddressFlat;
                $scope.userdata.shippingAddress.shippingAddressStreet = $scope.userdata.billingAddress.billingAddressStreet;
                $scope.userdata.shippingAddress.shippingAddressLandmark = $scope.userdata.billingAddress.billingAddressLandmark;
                $scope.userdata.shippingAddress.shippingAddressPin = $scope.userdata.billingAddress.billingAddressPin;
                $scope.userdata.shippingAddress.shippingAddressCity = $scope.userdata.billingAddress.billingAddressCity;
                $scope.userdata.shippingAddress.shippingAddressState = $scope.userdata.billingAddress.billingAddressState;
                $scope.userdata.shippingAddress.shippingAddressCountry = $scope.userdata.billingAddress.billingAddressCountry;
            }
        };
        $scope.shippingCheck = function(check) {
            if (check) {
                $scope.shipAtSame = true;
                $scope.sameShipping($scope.userdata.shippingAddress);
            } else {
                $scope.shipAtSame = false;
                $scope.userdata.shippingAddress.shippingAddressFlat = "";
                $scope.userdata.shippingAddress.shippingAddressStreet = "";
                $scope.userdata.shippingAddress.shippingAddressLandmark = "";
                $scope.userdata.shippingAddress.shippingAddressPin = "";
                $scope.userdata.shippingAddress.shippingAddressCity = "";
                $scope.userdata.shippingAddress.shippingAddressState = "";
                $scope.userdata.shippingAddress.shippingAddressCountry = "";
            }
        };

        $scope.saveUserAddress = function(data) {
            console.log("dataa", data);
            if ($.jStorage.get("userLoggedIn")) {
                // NavigationService.userProfileSave($scope.userdata, function(data) {
                //     $scope.getProfile();
                // });
                $state.go("checkoutorder");
            } else {
                $.jStorage.set("userData", data)
                $state.go("checkoutorder");
            }

        };

    })
    .controller('SaveaddressCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("saveaddress");
        $scope.menutitle = NavigationService.makeactive("Saveaddress");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.modelDelete = {};
        $scope.remove = function() {
            _.pull($scope.modelDelete.collection, $scope.modelDelete.obj);
            $scope.saveProfile();
            removemod.close();
        };
        $scope.showDelete = function(data, val) {
            var collection;
            var name;
            if (val) {
                collection = $scope.userdata.shippingAddress;
                name = data.shippingTitle;
            } else {
                collection = $scope.userdata.billingAddress;
                name = data.billingTitle;
            }
            $scope.modelDelete = {
                collection: collection,
                obj: data,
                name: name
            };
            removemod = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/removeitem.html",
                scope: $scope
            });
        };
        // $scope.shippingCheck = function(check) {
        //     if (check) {
        //         $scope.shipAtSame = true;
        //         $scope.sameShipping($scope.userdata.billingAddress);
        //     } else {
        //         $scope.shipAtSame = false;
        //         userdata.billingAddress.billingAddressFlat = "";
        //         userdata.billingAddress.billingAddressStreet = "";
        //         userdata.billingAddress.billingAddressLandmark = "";
        //         userdata.billingAddress.billingAddressPin = "";
        //         userdata.billingAddress.billingAddressCity = "";
        //         userdata.billingAddress.billingAddressState = "";
        //         userdata.billingAddress.billingAddressCountry = "";
        //     }
        // };

        $scope.getProfile = function() {
            NavigationService.getProfile(function(data) {
                if (data.value) {
                    $scope.userdata = data.data;
                    if (!$scope.userdata.billingAddress) {
                        $scope.userdata.billingAddress = [];
                    }
                    if (!$scope.userdata.shippingAddress) {
                        $scope.userdata.shippingAddress = [];
                    }
                }
            }, function(err) {});
        };
        $scope.showEdit = function(data) {
            data.edit = true;
        };
        $scope.changeDefault = function(data, val) {
            var collection;
            if (val) {
                collection = $scope.userdata.shippingAddress;
            } else {
                collection = $scope.userdata.billingAddress;
            }
            if (data.isDefault) {
                _.each(collection, function(n) {
                    if (data !== n) {
                        n.isDefault = false;
                    }
                });
            }
            $scope.saveProfile();
        };
        $scope.addAddress = function(val) {
            var collection;
            if (val) {
                collection = $scope.userdata.shippingAddress;
                collection.push({
                    edit: true,
                    shippingAddressCity: "Mumbai",
                    shippingAddressState: "Maharashtra",
                    shippingAddressCountry: "India"
                });
            } else {
                collection = $scope.userdata.billingAddress;
                collection.push({
                    edit: true,
                    billingAddressCity: "Mumbai",
                    billingAddressState: "Maharashtra",
                    billingAddressCountry: "India"
                });
            }

        };
        $scope.getProfile();
        $scope.saveProfile = function(data) {
            if (data && data.isShipping) {
                data.shippingTitle = data.billingTitle;
                data.shippingAddressFlat = data.billingAddressFlat;
                data.shippingAddressStreet = data.billingAddressStreet;
                data.shippingAddressLandmark = data.billingAddressLandmark;
                data.shippingAddressPin = data.billingAddressPin;
                data.shippingAddressCity = data.billingAddressCity;
                data.shippingAddressState = data.billingAddressState;
                data.shippingAddressCountry = data.billingAddressCountry;
                $scope.userdata.shippingAddress.push(data);
            }
            _.each($scope.userdata.billingAddress, function(n) {
                n.edit = false;
            });
            _.each($scope.userdata.shippingAddress, function(n) {
                n.edit = false;
            });
            NavigationService.userProfileSave($scope.userdata, function(data) {
                $scope.getProfile();
            });
        };

    })
    .controller('BankdetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("bankdetail");
        $scope.menutitle = NavigationService.makeactive("Bankdetail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.set = {};
        $scope.getProfile = function() {
            NavigationService.getProfile(function(data) {
                if (data.value) {
                    $scope.userdata = data.data;
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getProfile();


        $scope.saveProfile = function() {
            $scope.set.Profile = false;
            console.log($scope.userdata);
            NavigationService.userProfileSave($scope.userdata, function(data) {
                $scope.setProfile = false;
            });
        };

        $scope.logoutClick = function() {
            console.log("logout clicked");
            NavigationService.logout(function(data) {
                if (data.value) {
                    // NavigationService.saveUser(null);

                    // $scope.isLoggedIn = false;
                    $state.go("home");
                }
            }, function(err) {

            });
        };

    })
    .controller('CheckoutSigninCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("checkout-signin");
        $scope.menutitle = NavigationService.makeactive("CheckoutSignin");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.goToAddress = function() {
            $state.go('address');
        }
        $scope.facebookLogin = function() {
            ref = window.open(adminURL + 'user/loginFacebook', '_blank', 'location=no');
            stopinterval = $interval(callAtIntervaltwitter, 2000);
            ref.addEventListener('exit', function(event) {
                NavigationService.getProfile(authenticatesuccess, function(err) {
                    console.log(err);
                });
                $interval.cancel(stopinterval);
            });
        };
        $scope.googleLogin = function() {
            console.log("googlelogin");
            ref = window.open(adminURL + 'user/loginGoogle', '_blank', 'location=no');
            stopinterval = $interval(callAtIntervaltwitter, 2000);
            ref.addEventListener('exit', function(event) {
                NavigationService.getProfile(authenticatesuccess, function(err) {
                    console.log(err);
                });
                $interval.cancel(stopinterval);
            });
        };


    })
    .controller('CheckoutLoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("checkout-login");
        $scope.menutitle = NavigationService.makeactive("CheckoutLogin");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.forgot = function() {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/forgotpassword.html",
                controller: "CheckoutLoginCtrl"
            });
        };
        $scope.loginmsg = {};
        $scope.login = {};
        $scope.userLogin = function() {
            $scope.loginmsg.msg = "";
            NavigationService.login($scope.login, function(data) {
                if (data.value == true) {
                    // $scope.closeAllModals();
                    $scope.isLoggedIn = true;
                    // console.log($scope.isLoggedIn, 'dsfdsfa');
                    NavigationService.saveUser(data.data);
                    $state.go('address');
                } else {
                    $scope.loginmsg.msg = "Try again Later";
                    $scope.loginmsg.class = "text-danger";
                }
            }, function() {

            });
        };
    })
    .controller('CheckoutOrderCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("checkout-orderdetail");
        $scope.menutitle = NavigationService.makeactive("Checkoutorder");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.getProfile = function() {
            NavigationService.getProfile(function(data) {
                if (data.value) {
                    $scope.userdata = data.data;
                    $scope.billingAddress = _.find($scope.userdata.billingAddress, {
                        isDefault: true
                    });
                    $scope.shippingAddress = _.find($scope.userdata.shippingAddress, {
                        isDefault: true
                    });
                    if ($scope.billingAddress) {
                        $scope.userdata.billingAddress = $scope.billingAddress;
                    } else {
                        $scope.userdata.billingAddress = $scope.userdata.billingAddress[0];
                    }
                    if ($scope.shippingAddress) {
                        $scope.userdata.shippingAddress = $scope.shippingAddress;
                    } else {
                        $scope.userdata.shippingAddress = $scope.userdata.shippingAddress[0];
                    }
                } else {
                    console.log("inn off");
                    $scope.userdata = $.jStorage.get("userData");
                }
            }, function(err) {});
        };
        $scope.getProfile();
        $scope.getCart = function() {
            NavigationService.getcart(function(data) {
                if (data.value) {
                    $scope.cartDetails = data.data.cartcount;
                    $scope.cartProduct = data.data.cartproduct;
                    console.log("cartDetails", $scope.cartDetails);
                    $scope.servicetax = parseInt($scope.cartDetails.totalrentalamount) * 0.15;
                    $scope.grandtotal = parseInt($scope.cartDetails.totalrentalamount) + parseInt($scope.servicetax) + parseInt($scope.cartDetails.totalsecuritydeposit);
                    console.log("st", $scope.servicetax, "total", $scope.grandtotal);

                } else {
                    $scope.cartProduct = [];
                    $scope.cartDetails = 0;
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getCart();
    })
    .controller('ChangepasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file


        $scope.template = TemplateService.changecontent("changepassword");
        $scope.menutitle = NavigationService.makeactive("Changepassword");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.form = {};
        $scope.changePassword = function(form) {
            NavigationService.changePassword(form, function() {
                $scope.form = {};
            });
        };

    })
    .controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("cart");
        $scope.menutitle = NavigationService.makeactive("Cart");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.variables = {};
        $scope.variables.editCart = [];
        $scope.cartProduct = [];
        $scope.isLoggedIn = false;
        $scope.date = function() {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/changedate.html",
                controller: "CartCtrl"
            });
        };
        $scope.remove = function() {
            console.log("Yes I do");
            NavigationService.removeFromCart($scope.variables.removeitem, function(data) {
                $scope.response = data;
                if ($scope.response.value === true) {
                    removemod.close();
                    $scope.getCart();
                    globalfunction.getCartCount();
                }
            });
        };
        $scope.gotocheckout = function() {
            NavigationService.getcart(function(data) {
                if (data.value) {
                    $scope.cartDetails = data.data.cartcount;
                    if ($scope.cartDetails.totalrentalamount >= 8000) {
                        if ($.jStorage.get("userLoggedIn")) {
                            $state.go('address');
                        } else {
                            $state.go('checkoutsignin');
                        }
                    } else {
                        removemod = $uibModal.open({
                            animation: true,
                            templateUrl: "views/modal/minimumorder.html",
                            scope: $scope
                        });
                    }
                }
            }, function(err) {
                console.log(err);
            });

        };
        $scope.editCartProduct = function(id) {
            $scope.variables.editCart = _.map($scope.variables.editCart, function(key) {
                return false;
            });
            $scope.variables.editCart[id] = true;
            NavigationService.getOneProduct(id, function(response) {
                if (response.value) {
                    $scope.product = response.data;
                    $scope.sizes = response.data.size
                    $scope.editable = _.find($scope.cartProduct, function(key) {
                        return key.product._id == id;
                    });
                    console.log("editable", $scope.editable);
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.closeEdit = function(id) {
            $scope.variables.editCart = _.map($scope.variables.editCart, function(key) {
                return false;
            });
            $scope.getCart();

        };

        $scope.editCart = function(data) {
            $scope.editcartpro = {};
            $scope.editcartpro.product = data.product._id;
            var d = new Date(data.timeFrom);
            $scope.editcartpro.timeFrom = d;
            $scope.editcartpro.duration = data.duration;
            $scope.editcartpro.size = data.size;
            $scope.editcartpro.deliveryTime = data.deliveryTime;
            $scope.editcartpro.pickupTime = data.pickupTime;
            var timeTo = new Date();
            $scope.editcartpro.timeTo = new Date(timeTo.setDate(d.getDate() + $scope.editcartpro.duration));
            $scope.editcartpro.by = data.by;
            console.log("final cart", $scope.editcartpro);
            NavigationService.addToCart($scope.editcartpro, function(data) {
                $scope.response = data;
                if ($scope.response.value === true) {
                    $scope.getCart();
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.openRemoveModal = function(productid) {
            $scope.variables.removeitem = productid;
            removemod = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/removeitem.html",
                scope: $scope
            });
        };
        $scope.getCart = function() {
            NavigationService.getcart(function(data) {
                if (data.value) {
                    $scope.cartDetails = data.data.cartcount;
                    $scope.cartProduct = data.data.cartproduct;
                    $scope.totalrentalamount = 0;
                    _.each($scope.cartProduct, function(n) {
                        if (n.duration == 4) {
                            $scope.totalrentalamount = $scope.totalrentalamount + parseInt(n.product.fourdayrentalamount);
                        } else {
                            $scope.totalrentalamount = $scope.totalrentalamount + parseInt(n.product.eightdayrentalamount);
                        }

                    });
                } else {
                    $scope.cartProduct = [];
                    $scope.cartDetails = 0;
                }
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getCart();

    })
    .controller('ProductCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        //Used to name the .html file
        $scope.letIn = true;
        $scope.template = TemplateService.changecontent("product");
        $scope.menutitle = NavigationService.makeactive("Product");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.filter = {};
        $scope.filter.pagenumber = 1;
        $scope.checkIt = {};
        $scope.texts = {};
        $scope.texts.msg = "";
        $scope.filter.subcategory = [];
        $scope.filter.color = [];
        $scope.filter.size = '';
        $scope.filter.pricefrom = 0;
        $scope.filter.priceto = 100000;
        $scope.letLoad = false;
        $scope.shopping = [];
        $scope.getSubcategory = function() {
            NavigationService.getSubcategory(function(data) {
                $scope.subcategory = data.data;
                if ($state.params.name) {
                    $scope.filter.subcategory.push(_.find($scope.subcategory, function(key) {
                        return key.name == $state.params.name;
                    })._id);
                    $scope.checkIt[$state.params.name] = true;
                    $scope.filter.pagenumber = 1;
                }
                $scope.getMyProducts($scope.filter);

            }, function(err) {

            });
        };
        $scope.getSubcategory();
        $scope.pushSubCategory = function(flag, id) {
            if (flag) {
                $scope.filter.subcategory.push(id);
            } else {
                $scope.filter.subcategory.splice(_.findIndex($scope.filter.subcategory, function(key) {
                    return key == id;
                }), 1);
            }
        };
        $scope.pushColor = function(flag, id) {
            if (flag) {
                $scope.filter.color.push(id);
            } else {
                $scope.filter.color.splice(_.findIndex($scope.filter.color, function(key) {
                    return key == id;
                }), 1);
            }
        };
        $scope.addTowishlist = function(product) {
            if (product.heart == "fa-heart") {
                product.heart = "fa-heart-o";
            } else {
                product.heart = "fa-heart";
            }
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/added-wishlist.html',
            });
        };

        $scope.oneAtATime = true;

        $scope.demo2 = {
            range: {
                min: 0,
                max: 100000
            }
        };

        // GET ALL PRODUCT BY CATEGORY NAME
        console.log($state.params);
        $scope.pages = [];
        var lastpage = 1;

        $scope.getMyProducts = function(filter) {
            console.log("in get products");
            if ($scope.letIn) {
                $scope.letIn = false;
                NavigationService.getProduct(filter, function(data) {
                    if (data.value) {
                        if (data.data.data.length === 0) {
                            $scope.texts.msg = "Product Not Found";
                        }
                        _.each(data.data.data, function(n) {
                            $scope.shopping.push(n);
                        });
                        lastpage = data.data.totalpages;
                        if (data.data.data.length !== 0) {
                            $scope.$broadcast('scroll.infiniteScrollComplete');

                            ++$scope.filter.pagenumber;
                        }
                        $scope.letIn = true;
                        $scope.letLoad = true;
                        if (lastpage < $scope.filter.pagenumber) {
                            $scope.letLoad = false;
                        }
                    }
                }, function(err) {

                });
            }
        };
        $scope.getColor = function() {
            NavigationService.getColor(function(data) {
                console.log("colors", data.data);
                $scope.color = data.data;
            }, function(err) {});
        };
        $scope.getColor();
        $scope.applyFilter = function() {
            // $.jStorage.set("filter",)
            $scope.filter.pagenumber = 1;
            $scope.shopping = [];
            $scope.getMyProducts($scope.filter);

        };
        $scope.resetFilter = function() {
            $scope.filter.subcategory = [];
            $scope.filter.color = [];
            $scope.filter.size = '';
            $scope.filter.pricefrom = 0;
            $scope.filter.priceto = 100000;
            $scope.filter.pagenumber = 1;
            $scope.shopping = [];
            $scope.checkIt = _.map($scope.checkIt, function(key) {
                return false;
            });
            if ($state.params.name) {
                $scope.filter.subcategory.push(_.find($scope.subcategory, function(key) {
                    return key.name == $state.params.name;
                })._id);
                $scope.checkIt[$state.params.name] = true;
            }
            $scope.letLoad = false;
            $scope.getMyProducts($scope.filter);

        };
        $scope.loadMore = function() {
            if ($scope.letLoad) {
                $scope.getMyProducts($scope.filter);
            }
        };


    })
    .controller('ProductdetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("productdetail");
        $scope.menutitle = NavigationService.makeactive("Productdetail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.product = {};
        $scope.mainImage = "";
        $scope.timestamps = [];
        $scope.cartpro = {};
        $scope.cartpro.product = $state.params.id;
        $scope.cartpro.size = '';
        $scope.cartpro.by = '';
        $scope.cartpro.duration = '';
        $scope.cartpro.timeFrom = '';
        $scope.cartpro.timeTo = '';
        $scope.cartpro.deliveryTime = '';
        $scope.cartpro.pickupTime = '';
        $scope.select = {};
        $scope.select.sizeactive = {};

        $scope.checkLogin = $.jStorage.get("user");

        //PRODUCT DETAIL ON SELECTED PRODUCT
        $scope.saveWishList = function() {
            NavigationService.saveWishlist($state.params.id, function(data) {
                console.log("$state.params.id", $state.params.id);
            });
            // NavigationService.getSession
        };
        //  $scope.saveWishList();
        NavigationService.getProductDetail($state.params.id, function(data) {
            // console.log(data);
            $scope.product = data.data.product;
            $scope.producttime = data.data.producttime;
            _.each($scope.producttime, function(key) {
                var tmpdate = new Date(key.timestampFrom);
                // tmpdate.setHours(0,0,0,0);
                var tmpto = new Date(key.timestampTo);
                var diffDays = tmpto.getDate() - tmpdate.getDate();
                console.log("aaaa", diffDays);
                start = 0;
                do {
                    $scope.timestamps.push(new Date(tmpdate));
                    tmpdate.setDate(tmpdate.getDate() + 1);
                    start++;
                } while (start <= (diffDays + 4));
            });
            $scope.mainImage = data.data.product.images[0].image;
            $scope.getRentalAmount(4);
        }, function(err) {

        });
        $scope.selectImage = function(img) {
            $scope.mainImage = img;
        };
        $scope.selectSize = function(size) {
            $scope.cartpro.size = size;
            _.each($scope.select.sizeactive, function(key, n) {
                $scope.select.sizeactive[n] = false;
            });
            $scope.select.sizeactive[size] = true;
            $scope.select.sizedetail = _.find($scope.product.size, function(key) {
                // body...
                return key.name == size;
            });
        };
        $scope.getRentalAmount = function(val) {
            console.log("valll", val);
            if (val == 8) {
                $scope.product.rentalamount = $scope.product.eightdayrentalamount;
                $scope.cartpro.duration = 8;
            } else {
                $scope.product.rentalamount = $scope.product.fourdayrentalamount;
                $scope.cartpro.duration = 4;
            }
            console.log("$scope.rentalamount", $scope.rentalamount);
        }

        $scope.addToCart = function() {

            var d = new Date($scope.cartpro.timeFrom);
            $scope.cartpro.timeTo = new Date(d.setDate(d.getDate() + $scope.cartpro.duration));
            if ($scope.product.designer == null) {
                $scope.cartpro.by = "";
            } else {
                $scope.cartpro.by = $scope.product.designer.name;
            }

            NavigationService.addToCart($scope.cartpro, function(data) {
                console.log("response cart", data);
                $scope.response = data;
                if ($scope.response.value === true) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/shop.html",
                        scope: $scope
                    });
                } else {

                }
            }, function(err) {
                console.log(err);
            });

        };
        $scope.productFull = function() {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/product-full.html",
                scope: $scope
            })
        };
        $scope.addTowishlist = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/added-wishlist.html',
            });
        };

        //calendar
        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1,
            showWeeks: false
        };

        // Disable weekend selection
        function disabled(data) {
            // console.log(data);
            var current = data.date,
                mode = data.mode;
            current.setHours(0, 0, 0, 0);
            return _.findIndex($scope.timestamps, function(key) {
                key.setHours(0, 0, 0, 0);
                current.setHours(0, 0, 0, 0);
                // console.log(new Date(key), new Date(current));
                return new Date(key).getTime() == current.getTime();
            }) !== -1;
        }
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };

    })
    .controller('CelebrityChoiceCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("celebrity-choice");
        $scope.menutitle = NavigationService.makeactive("CelebrityChoice");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;


        $scope.addCelebrity = function(celebrity) {
            if (celebrity.heart == "fa-heart") {
                celebrity.heart = "fa-heart-o";
            } else {
                celebrity.heart = "fa-heart";
            }
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/added-wishlist.html",
                scope: $scope
            })
        };

        $scope.celebrityChoice = [{
            shopName: "Choker Kundan",
            celebrityName: "Sonam Kapoor",
            img: "img/celebrities.jpg",
            secImg: "img/celebrity-choice.jpg",
            designerName: "Anita Dongre",
            price: "4,500",
            heart: "fa-heart-o"
        }, {
            shopName: "Choker Kundan",
            celebrityName: "Sonam Kapoor",
            img: "img/celebrities.jpg",
            secImg: "img/celebrity-choice.jpg",
            designerName: "Anita Dongre",
            price: "4,500",
            heart: "fa-heart-o"
        }, {
            shopName: "Choker Kundan",
            celebrityName: "Sonam Kapoor",
            img: "img/celebrities.jpg",
            secImg: "img/celebrity-choice.jpg",
            designerName: "Anita Dongre",
            price: "4,500",
            heart: "fa-heart-o"
        }, {
            shopName: "Choker Kundan",
            celebrityName: "Sonam Kapoor",
            img: "img/celebrities.jpg",
            secImg: "img/celebrity-choice.jpg",
            designerName: "Anita Dongre",
            price: "4,500",
            heart: "fa-heart-o"
        }, {
            shopName: "Choker Kundan",
            celebrityName: "Sonam Kapoor",
            img: "img/celebrities.jpg",
            secImg: "img/celebrity-choice.jpg",
            designerName: "Anita Dongre",
            price: "4,500",
            heart: "fa-heart-o"
        }];
    })
    .controller('ThankyouCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("thankyou");
        $scope.menutitle = NavigationService.makeactive("Thankyou");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        TemplateService.footer = "";
    })
    .controller('SorryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("sorry");
        $scope.menutitle = NavigationService.makeactive("Sorry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        TemplateService.footer = "";
    })

.controller('headerctrl', function($scope, TemplateService, $uibModal, NavigationService, $interval, $timeout, $state) {
    $scope.template = TemplateService;
    $scope.template.backClass = "";
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $(".logo-view").addClass("small-logo");
        } else {
            $(".logo-view").removeClass("small-logo");
        }
    });
    var modal1 = "";
    var modal2 = "";
    var modal3 = "";
    var modal4 = "";
    $scope.cart = function() {
        $scope.loginmsg.msg = "";
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/hello.html",
            scope: $scope
        });
    };
    $scope.signUp = function() {
        $scope.loginmsg.msg = "";
        $scope.closeAllModals();
        modal1 = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/signup.html",
            scope: $scope
        });
        console.log(modal1);
    };
    $scope.logIn = function() {
        $scope.loginmsg.msg = "";
        $scope.closeAllModals();
        modal3 = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/login.html",
            scope: $scope
        });
    };
    $scope.emailSignup = function() {
        $scope.loginmsg.msg = "";
        $scope.closeAllModals();
        modal2 = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/email-signup.html",
            scope: $scope
        });
    };
    $scope.forgot = function() {
        $scope.loginmsg.msg = "";
        $scope.closeAllModals();
        modal4 = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/forgotpassword.html",
            scope: $scope
        });
    };
    $scope.oneAtATime = true;

    $scope.showCross = "";
    $scope.showMe = "menu-out";
    $scope.showMenu = function() {
        if ($scope.showMe == "menu-in") {
            $scope.showMe = "menu-out";
            $scope.showCross = "";
            $scope.template.backClass = "";
        } else {
            $scope.showMe = "menu-in";
            $scope.showCross = "cross-ham";
            $scope.template.backClass = "backdrop";
        }
    };
    $scope.checkSession = function() {
        if ($.jStorage.get("userLoggedIn")) {
            $scope.isLoggedIn = true;
        } else {
            NavigationService.getProfile(function(response) {
                if (response.value) {
                    $scope.isLoggedIn = true;
                    $.jStorage.set("userLoggedIn", true);
                } else {
                    $scope.isLoggedIn = false;
                }
            }, function(err) {
                console.log(err);
            });
        }
    };
    $scope.checkSession();
    globalfunction.getCartCount = function() {
        NavigationService.getCart(function(data) {
            console.log("cartcount", data);
            if (data.value == true) {
                $scope.cartcount = data.data.cartcount;
            } else {
                $scope.cartcount = 0;
            }
        }, function(err) {
            console.log(err);
        });
    };
    globalfunction.getCartCount();
    $scope.closeAllModals = function() {
        if (modal1) {
            modal1.close();
        }
        if (modal2) {
            modal2.close();
        }
        if (modal3) {
            modal3.close();
        }
        if (modal4) {
            modal4.close();
        }
    };

    // INTEGRATION CODE
    $scope.loginmsg = {};
    $scope.login = {};
    // if (NavigationService.getStoredUser() == null) {
    //     $scope.isLoggedIn = false;
    //
    // } else {
    //     $scope.isLoggedIn = true;
    //
    // }
    $scope.signup = {};
    // SIGNUP

    $scope.signUpNormal = function() {
            $scope.loginmsg.msg = "";
            if ($scope.signup.password === $scope.signup.confirmpswd) {

                NavigationService.signUP($scope.signup, function(data) {
                    if (data.value) {
                        $scope.closeAllModals();
                        // $scope.isLoggedIn = true;
                        $state.reload();
                        // NavigationService.saveUser(data.data);
                    } else {
                        $scope.loginmsg.msg = data.error;
                        $scope.loginmsg.class = "text-danger";
                    }
                }, function(err) {
                    console.log(err);
                })
            } else {
                $scope.loginmsg.msg = "Password And Confirm Password Should be same";
                $scope.loginmsg.class = "text-danger";
            }
        }
        // NORMAL LOGIN
    $scope.userLogin = function() {
        $scope.loginmsg.msg = "";

        NavigationService.login($scope.login, function(data) {
            if (data.value) {
                console.log("in if");
                $scope.closeAllModals();
                // $scope.isLoggedIn = true;
                // console.log($scope.isLoggedIn, 'dsfdsfa');
                // NavigationService.saveUser(data.data);
                $state.reload();
            } else {
                $scope.loginmsg.msg = "Try again Later";
                $scope.loginmsg.class = "text-danger";
            }
        }, function() {

        });
    };
    //GOOGLE LOGIN
    var checktwitter = function(data, status) {
        var repdata = {};
        if (data.value) {
            $interval.cancel(stopinterval);
            ref.close();
            $scope.closeAllModals();
            // $scope.isLoggedIn = true;
            $state.reload();
            // NavigationService.saveUser(data.data);
        } else {

        }
    };

    var callAtIntervaltwitter = function() {
        NavigationService.getProfile(checktwitter, function(err) {
            console.log(err);
        });
    };
    var authenticatesuccess = function(data, status) {
        $ionicLoading.hide();
        if (data.value) {
            $scope.closeAllModals();
            // $scope.isLoggedIn = true;
            // NavigationService.saveUser(data.data);
        }
    };
    $scope.facebookLogin = function() {

        ref = window.open(adminURL + 'user/loginFacebook', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.getProfile(authenticatesuccess, function(err) {
                console.log(err);
            });
            $interval.cancel(stopinterval);
        });
    };

    $scope.googleLogin = function() {
        console.log("googlelogin");
        ref = window.open(adminURL + 'user/loginGoogle', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.getProfile(authenticatesuccess, function(err) {
                console.log(err);
            });
            $interval.cancel(stopinterval);
        });
    };


})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
