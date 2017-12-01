//创建模块
var app=angular.module('app',['ionic'])
    app.config(function($ionicConfigProvider){
    // 不同平台样式兼容性配置
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
})
//运行ionic平台
app.run(function($ionicPlatform) {  //支持ionic平台
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
//路由配置
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index',{
            url:'/',
            templateUrl:'pages/message.html',
            controller:"messageCtrl"
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'pages/contact.html',
            controller:"contactCtrl"
        })
        .state('find',{
            url:'/find',
            templateUrl:'pages/find.html',
            controller:"findCtrl"
            
        })
        .state('mine',{
            url:'/mine',
            templateUrl:'pages/mine.html',
            controller:"mineCtrl"
        })
        .state("detail",{
             url:'/contact/detail/:id',
             templateUrl:'pages/detail.html',
             controller:"detailCtrl"
        })
        .state("setting",{
            url:'/mine/setting',
            templateUrl:'pages/setting.html',
            controller:"settingCtrl"
        })
        .state("settingmessage",{
            url:'/mine/settingmessage',
            templateUrl:'pages/setting_message.html',
            controller:"settingmessageCtrl"
        })
})