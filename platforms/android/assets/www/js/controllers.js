angular.module('app.controllers', [])

// 首页
// -------------------------------
.controller('homeCtrl', ['$scope', '$rootScope', '$ionicHistory', '$timeout', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', 'sliderService',
  function($scope, $rootScope, $ionicHistory, $timeout, $ionicSlideBoxDelegate, $ionicTabsDelegate, sliderService) {
    var classify = sliderService.getClassify();
    console.log(classify);
    $scope.slides = classify;
    $scope.tabs = classify;

    // 加载数据
    var getData = function(index) {
      var c = classify[index];
      console.log(c);
      c.doRefresh();
      // 安卓平台不会自动触发加载
      if (ionic.Platform.isAndroid()) {
        c.doRefresh();
      }
      // 初始化数据，和回调函数
      c.isload = false;
      c.callback = function() {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    }
    getData(0);

    $scope.slideChanged = function(index) {
      getData(index);

      //这里使用instances[1]的原因是视图中有两个tabs
      $ionicTabsDelegate._instances[1].select(index);
    };
    $scope.$on('$ionicView.afterEnter', function() {
      //等待视图加载完成的时候默认选中第一个菜单
      $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.selectedTab = function(index) {
      //滑动的索引和速度
      $ionicSlideBoxDelegate.slide(index);
    }

    $ionicHistory.clearHistory();
  }
])
// 新闻详情
.controller('newsContentCtrl', ['$scope', '$state', '$stateParams', '$cordovaInAppBrowser', 'newsContentService',
  function($scope, $state, $stateParams, $cordovaInAppBrowser, newsContentService) {
    var objectId = $stateParams.objectId;
    console.log(objectId);
    $scope.loading = true;

    newsContentService.requestData(objectId);

    // 打开原文链接

    $scope.openUrl = function(url) {
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
      };
      $cordovaInAppBrowser.open(url, '_blank', options)
        .then(function(event) {
          // success
        })
        .catch(function(event) {
          alert("抱歉！链接出问题了");
        });
    }

    $scope.$on('newsContentServiceUpdata', function(event, data) {

      $scope.loading = !$scope.loading;
      console.log($scope.loading);
      $scope.item = data;
      console.log($scope.item);
    })
  }
])
// 公告详情
.controller('noticeContentCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 招聘详情
.controller('recruitContentCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])

// 活动
// -------------------------------
.controller('activityCtrl', ['$scope', '$timeout', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', '$ionicBackdrop',
  function($scope, $timeout, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicBackdrop) {
    $scope.exploreTabs = [{
      name: '活动'
    }, {
      name: '组织'
    }];
    $scope.flag;

    $scope.slideChanged = function(index) {
      $ionicTabsDelegate._instances[$scope.flag].select(index);
    };

    $scope.$on('$ionicView.afterEnter', function() {
      //等待视图加载完成的时候默认选中第一个菜单
      if ($scope.flag == undefined) {
        console.log($ionicTabsDelegate._instances.length);
        $scope.flag = $ionicTabsDelegate._instances.length - 1;
      };
      $ionicTabsDelegate._instances[$scope.flag].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.$on('$ionicView.leave', function() {
      console.log($scope.flag);
    });

    $scope.selectTab = function(index) {
      //滑动的索引
      $ionicSlideBoxDelegate.slide(index);
    }

    // 背景层快速拨号
    $scope.isShow = 0;
    $scope.showDial = function() {
      $scope.isShow = !$scope.isShow;
    };

  }
])

// 发现
// -------------------------------
.controller('exploreCtrl', ['$scope', '$timeout', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', '$ionicBackdrop',
  function($scope, $timeout, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicBackdrop) {
    $scope.exploreTabs = [{
      name: '精选'
    }, {
      name: '话题'
    }, {
      name: '冒泡'
    }];
    $scope.flag;

    $scope.slideChanged = function(index) {
      $ionicTabsDelegate._instances[$scope.flag].select(index);
    };

    $scope.$on('$ionicView.afterEnter', function() {
      //等待视图加载完成的时候默认选中第一个菜单
      if ($scope.flag == undefined) {
        console.log($ionicTabsDelegate._instances.length);
        $scope.flag = $ionicTabsDelegate._instances.length - 1;
      };
      $ionicTabsDelegate._instances[$scope.flag].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.$on('$ionicView.leave', function() {
      console.log($scope.flag);
    });

    $scope.selectTab = function(index) {
      //滑动的索引
      $ionicSlideBoxDelegate.slide(index);
    }

    // 背景层快速拨号
    $scope.isShow = 0;
    $scope.showDial = function() {
      $scope.isShow = !$scope.isShow;
    };

  }
])
// 精选内容页
.controller('choiceContentCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 活动海报内容页
.controller('posterContentCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 话题
.controller('topicCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])

// 工具
// -------------------------------
.controller('toolsCtrl', ['$scope', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', '$timeout',
  function($scope, $ionicSlideBoxDelegate, $ionicTabsDelegate, $timeout) {
    $scope.toolsTabs = [{
      name: '课表'
    }, {
      name: '常用'
    }, {
      name: '收藏'
    }];
    $scope.flag;

    $scope.slideChanged = function(index) {
      $ionicTabsDelegate._instances[$scope.flag].select(index);
    };

    $scope.$on('$ionicView.afterEnter', function() {
      //等待视图加载完成的时候默认选中第一个菜单

      if ($scope.flag == undefined) {
        console.log($ionicTabsDelegate._instances.length);
        $scope.flag = $ionicTabsDelegate._instances.length - 1;
      };
      $ionicTabsDelegate._instances[$scope.flag].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.$on('$ionicView.leave', function() {
      console.log($scope.flag);
    });

    $scope.selectTab = function(index) {
      //滑动的索引
      $ionicSlideBoxDelegate.slide(index);
    }
  }
])
// 课程表
.controller('courseCtrl', ['$scope', '$state', '$stateParams', 'timetalesService',
  function($scope, $stateParams, $state, timetalesService) {
    $scope.loading = true;

    timetalesService.requestData();

    $scope.$on('timetalesServiceUpdata', function(event, data) {

      $scope.loading = !$scope.loading;
      console.log($scope.loading);
      $scope.item = data;
      console.log($scope.item[7]);
    })
  }
])
// 空教室
.controller('classroomCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 查成绩
.controller('markCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 四六级
.controller('cet46Ctrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 校园卡
.controller('ecardCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 图书馆
.controller('libraryCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 报修
.controller('repairCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 社团榜
.controller('clubsCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 表白
.controller('loveCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 地图
.controller('mapCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 校历
.controller('calendarCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 代取快递
.controller('expressCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])

// 个人中心
// -------------------------------
.controller('profileCtrl', ['$rootScope', '$scope', '$ionicHistory', '$stateParams', '$cordovaStatusbar', '$cordovaToast', '$cordovaLocalNotification', '$timeout', 
  function($rootScope, $scope, $ionicHistory, $stateParams, $cordovaStatusbar, $cordovaToast, $cordovaLocalNotification, $timeout) {
    // $cordovaStatusbar.styleHex('#4e85c1');
    // $cordovaToast.showShortCenter('欢迎');
    // var ti = "重要通知";
    // $scope.scheduleSingleNotification = function () {
    //   $cordovaLocalNotification.schedule({
    //     id: 1,
    //     title: ti,
    //     text: '请升级你的app',
    //     badge: 1,
    //     data: {
    //       customProperty: 'custom value'
    //     }
    //   }).then(function (result) {
    //     console.log(result);
    //   });
    // };
    // $scope.scheduleSingleNotification();

    $scope.realName = '未登录';
    $scope.user = '';
    
    var token = localStorage.getItem("token");
    var user = localStorage.getItem("user");

    $scope.user = user;
    $scope.realName = '王江山';

    console.log("欢迎你" +　user);
    console.log(token);
    // $cordovaToast.showShortCenter(token);
    
  }
])
// 设置
.controller('settingCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 绑定
.controller('bindingCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 消息通知
.controller('messageCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 我的发布
.controller('publishCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 我的关注
.controller('followCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 密码绑定
.controller('bindingCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])
// 关于
.controller('aboutCtrl', ['$scope','$rootScope', '$ionicHistory', '$ionicModal', '$cordovaInAppBrowser',　'$cordovaToast',  
  function($scope, $rootScope, $ionicHistory, $ionicModal, $cordovaInAppBrowser, $cordovaToast) {
    // 模态窗口
    $scope.openModal = function(url) {
      $ionicModal.fromTemplateUrl(url, {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
        modal.show();
      });
    }
    $scope.closeModal = function() {
      $scope.modal.hide();
    }
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // 检查更新
    $scope.checkUpdate = function() {
      $cordovaToast.showShortCenter('已是最新版本');
    }
    // 打开链接
    $scope.openUrl = function() {
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
      };
      $cordovaInAppBrowser.open('https://github.com/jeneser/hpuHelper', '_blank', options)
        .then(function(event) {
          // success
        })
        .catch(function(event) {
          alert("抱歉！链接出问题了");
        });
    }

  }
])
// 反馈
.controller('feedbackCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])

//　搜索
// -------------------------------
.controller('searchCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

  }
])

//　登陆
// -------------------------------
.controller('loginCtrl', ['$scope', '$state', '$ionicHistory', 'loginService', 
  function($scope, $state, $ionicHistory, loginService) {
    $scope.userData = {}

    $scope.loginForm = function (form) {
      if (form.$valid) {
        console.log($scope.userData);

        loginService.login($scope.userData, function(res) {
          console.log(res);
          // 存token
          var user = res.user;
          var token = res.token;

          localStorage.setItem("user", user);
          localStorage.setItem("token", token);

          console.log("登陆成功");
          $state.go("tabsController.home", {isLogin: true});
          
        }, function() {
          console.log('err');
        });
      } else {
        console.log('表单填写错误');
      }

    }
  }
])

//　注册
// -------------------------------
.controller('signCtrl', ['$scope', '$state', 'signupService', 
  function($scope, $state, signupService) {
    $scope.userData = {}

    $scope.signupForm = function (form) {
      if (form.$valid) {
        // 注册
        console.log($scope.userData);

        signupService.signup($scope.userData, function(res) {
          console.log(res);
          // 存token
          var user = res.user;
          var token = res.token;

          localStorage.setItem("user", user);
          localStorage.setItem("token", token);

          console.log("注册成功");
          $state.go("tabsController.profile", {});
        }, function() {
          console.log('err');
        });
      } else {
        console.log('表单填写错误');
      }

    }
  }
])