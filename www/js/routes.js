angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // 底部导航
  // -------------------------------
  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  // 首页
  // -------------------------------
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
  // -------------------------------
  .state('tabsController.saike', {
    url: '/saike',
    views: {
      'tab2': {
        templateUrl: 'templates/saike.html',
        controller: 'saikeCtrl'
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
  .state('tabsController.page35', {
    url: '/shop',
    views: {
      'tab2': {
        templateUrl: 'templates/page35.html',
        controller: 'page35Ctrl'
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

  // 发现
  // -------------------------------
  .state('tabsController.explore', {
    url: '/explore',
    views: {
      'tab3': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
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

  // 工具
  // -------------------------------
  .state('tabsController.tools', {
    url: '/tools',
    views: {
      'tab4': {
        templateUrl: 'templates/tools.html',
        controller: 'toolsCtrl'
      }
    }
  })
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
  // 空教室
  .state('tabsController.classroom', {
    url: '/classroom',
    views: {
      'tab4': {
        templateUrl: 'templates/classroom.html',
        controller: 'classroomCtrl'
      }
    }
  })
  // 查成绩
  .state('tabsController.mark', {
    url: '/mark',
    views: {
      'tab4': {
        templateUrl: 'templates/mark.html',
        controller: 'markCtrl'
      }
    }
  })
  // 四六级
  .state('tabsController.cet46', {
    url: '/cet46',
    views: {
      'tab4': {
        templateUrl: 'templates/cet46.html',
        controller: 'cet46Ctrl'
      }
    }
  })
  //校园卡
  .state('tabsController.ecard', {
    url: '/ecard',
    views: {
      'tab4': {
        templateUrl: 'templates/ecard.html',
        controller: 'ecardCtrl'
      }
    }
  })
  // 图书馆
  .state('tabsController.library', {
    url: '/library',
    views: {
      'tab4': {
        templateUrl: 'templates/library.html',
        controller: 'libraryCtrl'
      }
    }
  })
  // 报修
  .state('tabsController.repair', {
    url: '/repair',
    views: {
      'tab4': {
        templateUrl: 'templates/repair.html',
        controller: 'repairCtrl'
      }
    }
  })
  // 表白
  .state('tabsController.love', {
    url: '/love',
    views: {
      'tab4': {
        templateUrl: 'templates/love.html',
        controller: 'loveCtrl'
      }
    }
  })
  // 地图
  .state('tabsController.map', {
    url: '/map',
    views: {
      'tab4': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })
  // 校历
  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab4': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })
  // 代取快递
  .state('tabsController.express', {
    url: '/express',
    views: {
      'tab4': {
        templateUrl: 'templates/express.html',
        controller: 'expressCtrl'
      }
    }
  })
  
  // 个人中心
  // -------------------------------
  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  // 设置
  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
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

  // 搜索
  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
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
