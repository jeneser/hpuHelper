angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // 底部菜单tab
  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  // 主页面
  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'sliderCtrl'
      }
    }
  })

  // 赛课
  .state('tabsController.saike', {
    url: '/saike',
    views: {
      'tab2': {
        templateUrl: 'templates/saike.html',
        controller: 'saikeCtrl'
      }
    }
  })

  // 发现
  .state('tabsController.explore', {
    url: '/explore',
    views: {
      'tab3': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
  })

  // 工具
  .state('tabsController.tools', {
    url: '/tools',
    views: {
      'tab4': {
        templateUrl: 'templates/tools.html',
        controller: 'toolsCtrl'
      }
    }
  })
  
  // 个人中心
  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  // 新闻详情页
  .state('tabsController.newsContent', {
    url: '/newsContent/:objectId',
    views: {
      'tab1': {
        templateUrl: 'templates/newsContent.html',
        controller: 'newsContentCtrl'
      }
    }
  })

  // 公告详情页
  .state('tabsController.notice', {
    url: '/noticeContent',
    views: {
      'tab1': {
        templateUrl: 'templates/noticeContent.html',
        controller: 'noticeContentCtrl'
      }
    }
  })

  // 招聘详情页
  .state('tabsController.recruit', {
    url: '/recruitContent',
    views: {
      'tab1': {
        templateUrl: 'templates/recruitContent.html',
        controller: 'recruitContentCtrl'
      }
    }
  })

  // 周边子页面路由
  .state('tabsController.page32', {
    url: '/cet46',
    views: {
      'tab2': {
        templateUrl: 'templates/page32.html',
        controller: 'page32Ctrl'
      }
    }
  })

  .state('tabsController.page33', {
    url: '/share',
    views: {
      'tab2': {
        templateUrl: 'templates/page33.html',
        controller: 'page33Ctrl'
      }
    }
  })

  .state('tabsController.page34', {
    url: '/second_hand',
    views: {
      'tab2': {
        templateUrl: 'templates/page34.html',
        controller: 'page34Ctrl'
      }
    }
  })

  .state('tabsController.page35', {
    url: '/shop',
    views: {
      'tab2': {
        templateUrl: 'templates/page35.html',
        controller: 'page35Ctrl'
      }
    }
  })

  .state('tabsController.page36', {
    url: '/part_time',
    views: {
      'tab2': {
        templateUrl: 'templates/page36.html',
        controller: 'page36Ctrl'
      }
    }
  })

  .state('tabsController.page37', {
    url: '/exercitation',
    views: {
      'tab2': {
        templateUrl: 'templates/page37.html',
        controller: 'page37Ctrl'
      }
    }
  })

  .state('tabsController.page38', {
    url: '/b_school',
    views: {
      'tab2': {
        templateUrl: 'templates/page38.html',
        controller: 'page38Ctrl'
      }
    }
  })

  .state('tabsController.page41', {
    url: '/express',
    views: {
      'tab2': {
        templateUrl: 'templates/page41.html',
        controller: 'page41Ctrl'
      }
    }
  })

  // 工具子页面路由 tab4
  // 课程表路由
  .state('tabsController.course', {
    url: '/course',
    views: {
      'tab4': {
        templateUrl: 'templates/course.html',
        controller: 'courseCtrl'
      }
    }
  })

  .state('tabsController.page26', {
    url: '/classroom',
    views: {
      'tab4': {
        templateUrl: 'templates/page26.html',
        controller: 'page26Ctrl'
      }
    }
  })
  //一卡通
  .state('tabsController.ecard', {
    url: '/ecard',
    views: {
      'tab4': {
        templateUrl: 'templates/ecard.html',
        controller: 'ecardCtrl'
      }
    }
  })

  .state('tabsController.page29', {
    url: '/library',
    views: {
      'tab4': {
        templateUrl: 'templates/page29.html',
        controller: 'page29Ctrl'
      }
    }
  })

  .state('tabsController.page30', {
    url: '/fix',
    views: {
      'tab4': {
        templateUrl: 'templates/page30.html',
        controller: 'page30Ctrl'
      }
    }
  })

  .state('tabsController.page17', {
    url: '/mark',
    views: {
      'tab4': {
        templateUrl: 'templates/page17.html',
        controller: 'page17Ctrl'
      }
    }
  })





  .state('page5', {
    url: '/login',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/sign',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  

  .state('binding', {
    url: '/binding',
    templateUrl: 'templates/binding.html',
    controller: 'bindingCtrl'
  })

  .state('page15', {
    url: '/help',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  

  .state('tabsController.page18', {
    url: '/fsth',
    views: {
      'tab3': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('tabsController.page19', {
    url: '/game',
    views: {
      'tab3': {
        templateUrl: 'templates/page19.html',
        controller: 'page19Ctrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.page20'
      2) Using $state.go programatically:
        $state.go('tabsController.page20');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/office
      /page1/tab3/office
  */
  .state('tabsController.page20', {
    url: '/office',
    views: {
      'tab2': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

  .state('tabsController.page22', {
    url: '/community',
    views: {
      'tab3': {
        templateUrl: 'templates/page22.html',
        controller: 'page22Ctrl'
      }
    }
  })

  .state('tabsController.page24', {
    url: '/movie',
    views: {
      'tab3': {
        templateUrl: 'templates/page24.html',
        controller: 'page24Ctrl'
      }
    }
  })



  .state('page31', {
    url: '/feedback',
    templateUrl: 'templates/page31.html',
    controller: 'page31Ctrl'
  })





  .state('page40', {
    url: '/my_sign',
    templateUrl: 'templates/page40.html',
    controller: 'page40Ctrl'
  })

  .state('page42', {
    url: '/sex',
    templateUrl: 'templates/page42.html',
    controller: 'page42Ctrl'
  })

  .state('page43', {
    url: '/rank',
    templateUrl: 'templates/page43.html',
    controller: 'page43Ctrl'
  })

  .state('page44', {
    url: '/contact_me',
    templateUrl: 'templates/page44.html',
    controller: 'page44Ctrl'
  })

  .state('page45', {
    url: '/change_face',
    templateUrl: 'templates/page45.html',
    controller: 'page45Ctrl'
  })

  .state('page27', {
    url: '/forum',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })



  .state('page46', {
    url: '/real_name',
    templateUrl: 'templates/page46.html',
    controller: 'page46Ctrl'
  })

$urlRouterProvider.otherwise('/tabs/home')



});
