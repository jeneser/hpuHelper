angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // 底部导航
  // -------------------------------
    .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract: true
  })

  // 首页
  // -------------------------------
  .state('tabsController.home', {
      url: '/home',
      views: {
        'tab1': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
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

  // 活动
  // -------------------------------
  .state('tabsController.activity', {
      url: '/activity',
      views: {
        'tab2': {
          templateUrl: 'templates/activity.html',
          controller: 'activityCtrl'
        }
      }
    })
    // 活动海报内容页
    .state('tabsController.posterContent', {
      url: '/posterContent',
      views: {
        'tab2': {
          templateUrl: 'templates/posterContent.html',
          controller: 'posterContentCtrl'
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
    // 精选内容页
    .state('tabsController.choiceContent', {
      url: '/choiceContent',
      views: {
        'tab3': {
          templateUrl: 'templates/choiceContent.html',
          controller: 'choiceContentCtrl'
        }
      }
    })
    // 话题
    .state('tabsController.topic', {
      url: '/topic',
      views: {
        'tab3': {
          templateUrl: 'templates/topic.html',
          controller: 'topicCtrl'
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
    // 社团榜
    .state('tabsController.clubs', {
      url: '/clubs',
      views: {
        'tab4': {
          templateUrl: 'templates/clubs.html',
          controller: 'clubsCtrl'
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
    .state('tabsController.setting', {
      url: '/setting',
      views: {
        'tab5': {
          templateUrl: 'templates/setting.html',
          controller: 'settingCtrl'
        }
      }
    })
    // 消息通知
    .state('tabsController.message', {
      url: '/message',
      views: {
        'tab5': {
          templateUrl: 'templates/message.html',
          controller: 'messageCtrl'
        }
      }
    })
    // 我的发布
    .state('tabsController.publish', {
      url: '/publish',
      views: {
        'tab5': {
          templateUrl: 'templates/publish.html',
          controller: 'publishCtrl'
        }
      }
    })
    // 我的关注
    .state('tabsController.follow', {
      url: '/follow',
      views: {
        'tab5': {
          templateUrl: 'templates/follow.html',
          controller: 'followCtrl'
        }
      }
    })
    // 密码绑定
    .state('tabsController.binding', {
      url: '/binding',
      views: {
        'tab5': {
          templateUrl: 'templates/binding.html',
          controller: 'bindingCtrl'
        }
      }
    })
    // 关于
    .state('tabsController.about', {
      url: '/about',
      views: {
        'tab5': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })
    // 反馈
    .state('tabsController.feedback', {
      url: '/feedback',
      views: {
        'tab5': {
          templateUrl: 'templates/feedback.html',
          controller: 'feedbackCtrl'
        }
      }
    })

  //　搜索
  // -------------------------------
  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  //　登陆
  // -------------------------------
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  //　注册
  // -------------------------------
  .state('sign', {
    url: '/sign',
    templateUrl: 'templates/sign.html',
    controller: 'signCtrl'
  })

  $urlRouterProvider.otherwise('/tabs/home')

});
