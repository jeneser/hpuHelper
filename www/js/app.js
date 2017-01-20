// Ionic Starter App
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])

.run(function($rootScope, $ionicPlatform, $state, $ionicHistory, $timeout, $cordovaToast, $cordovaLocalNotification) {
  $ionicPlatform.ready(function() {
    // 键盘配置
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    // 状态栏
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (cordova.platformId == 'android') {
      StatusBar.backgroundColorByHexString("#166eb8");
    } else {
      $cordovaStatusbar.overlaysWebView(false);
      $cordovaStatusbar.style(1);
      StatusBar.styleLightContent();
      $cordovaStatusbar.styleColor('#166eb8');
    }
    //启动极光推送服务
    window.plugins.jPushPlugin.init();
    window.plugins.jPushPlugin.setDebugMode(true);
    var onReceiveMessage = function(event) {
      try {
        var jid = window.plugins.jPushPlugin.receiveMessage.extras.id || 1;
        var jtitle = window.plugins.jPushPlugin.receiveMessage.extras.title || 'HPU';
        var message;
        if (device.platform == "Android") {
          // console.log(event.extras.cn.jpush.android.MSG_ID);
          message = event.message;
          var scheduleSingleNotification = function() {
            $cordovaLocalNotification.schedule({
              id: jid,
              title: jtitle,
              text: message,
              badge: 1,
              data: {
                customProperty: 'custom value'
              }
            }).then(function(result) {
              // console.log(result);
            });
          };
          scheduleSingleNotification();
        } else {
          message = event.content;
        }
      } catch (exception) {
        console.log("err" + exception);
      }
    };
    document.addEventListener("jpush.receiveMessage", onReceiveMessage, false);

  });
  // 双击退出
  $ionicPlatform.registerBackButtonAction(function(e) {
    if ($rootScope.backButtonPressedOnceToExit) {
      ionic.Platform.exitApp();
    } else if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    } else {
      $rootScope.backButtonPressedOnceToExit = true;
      $cordovaToast.showShortBottom('再按一次退出');
      setTimeout(function() {
        $rootScope.backButtonPressedOnceToExit = false;
      }, 2000);
    }
    e.preventDefault();
    return false;
  }, 101);

  //　接口配置
  $rootScope.baseUrl = 'http://45.76.162.124:3000/';
  // $rootScope.baseUrl = 'http://localhost:1337/localhost:4000/';
})

.config(function($ionicConfigProvider, $httpProvider) {
  // 原生滚动
  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
  // 平台样式
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  // Authorization
  $httpProvider.interceptors.push(['$q', '$location',
    function($q, $location) {
      return {
        'request': function(config) {
          var token = localStorage.getItem('token');
          config.headers = config.headers || {};
          if (token) {
            config.headers.Authorization = 'Bearer ' + token;
          }
          return config;
        },
        'responseError': function(response) {
          if (response.status === 401 || response.status === 403) {
            $location.path('/login');
          }
          return $q.reject(response);
        }
      }
    }
  ]);
});
