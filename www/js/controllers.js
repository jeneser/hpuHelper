angular.module('app.controllers', [])

// 滑动菜单
.controller('sliderCtrl', ['$scope', '$rootScope', '$timeout', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', 'sliderService', 
    function ($scope, $rootScope, $timeout, $ionicSlideBoxDelegate, $ionicTabsDelegate, sliderService) {
    var classify = sliderService.getClassify();
    console.log(classify);
    $scope.slides = classify;
    $scope.tabs = classify;

    // 加载数据
    var getData = function (index) {
        var c = classify[index];
        console.log(c);
        c.doRefresh();
        // 安卓平台不会自动触发加载
        if (ionic.Platform.isAndroid()) {
            c.doRefresh();
        }
        // 初始化数据，和回调函数
        c.isload = false;
        c.callback = function () {
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    }
    getData(0);

    $scope.slideChanged = function (index) {
        getData(index);
        
        //这里使用instances[1]的原因是视图中有两个tabs
        $ionicTabsDelegate._instances[1].select(index);
    };
    $scope.$on('$ionicView.afterEnter', function () {
        //等待视图加载完成的时候默认选中第一个菜单
        $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.selectedTab = function (index) {
        //滑动的索引和速度
        $ionicSlideBoxDelegate.slide(index);
    }
}])

// 新闻详情
.controller('newsContentCtrl', ['$scope', '$state', '$stateParams', '$cordovaInAppBrowser', 'newsContentService', 
    function($scope, $state, $stateParams, $cordovaInAppBrowser, newsContentService){
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

    $scope.$on('newsContentServiceUpdata',function(event, data){
        
        $scope.loading = !$scope.loading;
        console.log($scope.loading);
        $scope.item = data;
        console.log($scope.item);
    })
}])

// 公告详情
.controller('noticeContentCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 招聘详情
.controller('recruitContentCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 赛课
.controller('saikeCtrl', ['$scope', '$stateParams', '$cordovaBarcodeScanner', '$cordovaInAppBrowser', '$ionicPopup', '$timeout', '$cordovaNetwork', 
function ($scope, $stateParams, $cordovaBarcodeScanner, $cordovaInAppBrowser, $ionicPopup, $timeout, $cordovaNetwork) {
    // 网络检查
    $scope.getNetwork = function() {
        var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
        // var type = $cordovaNetwork.getNetwork()
        // var isOnline = $cordovaNetwork.isOnline()
        // var isOffline = $cordovaNetwork.isOffline()

        // // listen for Online event
        // $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        //   var onlineState = networkState;
        //   alert(type);
        // })

        // // listen for Offline event
        // $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        //   var offlineState = networkState;
        //   alert(offlineState);
        // })
    }

    // 对话框
    $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: '退出',
       template: '你确定要退出应用吗？'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

    $scope.loadbarcode = function() {
        console.log(1);
        alert(1);
            $cordovaBarcodeScanner
              .scan()
              .then(function(barcodeData) {
                alert(barcodeData);
                alert(barcodeData.text);
              }, function(error) {
                alert(error);
                alert('error!');
              });
    }

    // 内置浏览器
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $scope.loadurl = function() {
    $cordovaInAppBrowser.open('http://baidu.com', '_blank', options)
      .then(function(event) {
        // success
        alert(1);
      })
      .catch(function(event) {
        // error
        alert(2);
      });


    // $cordovaInAppBrowser.close();

    }

}])

// 发现
.controller('exploreCtrl', ['$scope', '$timeout', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', '$ionicBackdrop', 
function ($scope, $timeout, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicBackdrop) {
    $scope.exploreTabs = [{name:'精选'}, {name: '活动'}, {name:'生活'}];
    $scope.flag;

    $scope.slideChanged = function (index) {
        $ionicTabsDelegate._instances[$scope.flag].select(index);
    };

    $scope.$on('$ionicView.afterEnter', function () {
        //等待视图加载完成的时候默认选中第一个菜单
        if ($scope.flag == undefined) {
            console.log($ionicTabsDelegate._instances.length);
            $scope.flag = $ionicTabsDelegate._instances.length - 1;
        };
        $ionicTabsDelegate._instances[$scope.flag].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.$on('$ionicView.leave', function () {
        console.log($scope.flag);
    });

    $scope.selectTab = function (index) {
        //滑动的索引
        $ionicSlideBoxDelegate.slide(index);
    }

    // 背景层快速拨号
    $scope.isShow = 0;
    $scope.showDial = function() {
       $scope.isShow = !$scope.isShow;
    }; 

}])

// 工具
.controller('toolsCtrl', ['$scope', '$ionicSlideBoxDelegate', '$ionicTabsDelegate', '$timeout', 
function ($scope, $ionicSlideBoxDelegate, $ionicTabsDelegate, $timeout) {
    $scope.toolsTabs = [{name:'课表'}, {name: '常用'}, {name: '收藏'}];
    $scope.flag;

    $scope.slideChanged = function (index) {
        $ionicTabsDelegate._instances[$scope.flag].select(index);
    };

    $scope.$on('$ionicView.afterEnter', function () {
        //等待视图加载完成的时候默认选中第一个菜单
        
        if ($scope.flag == undefined) {
            console.log($ionicTabsDelegate._instances.length);
            $scope.flag = $ionicTabsDelegate._instances.length - 1;
        };
        $ionicTabsDelegate._instances[$scope.flag].select($ionicSlideBoxDelegate.currentIndex());
    });
    $scope.$on('$ionicView.leave', function () {
        console.log($scope.flag);
    });

    $scope.selectTab = function (index) {
        //滑动的索引
        $ionicSlideBoxDelegate.slide(index);
    }
}])

// 个人中心 
.controller('profileCtrl', ['$rootScope', '$scope', '$stateParams', '$cordovaStatusbar', '$cordovaToast', '$cordovaLocalNotification', '$timeout', 
function ($rootScope, $scope, $stateParams, $cordovaStatusbar, $cordovaToast, $cordovaLocalNotification, $timeout) {
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
    
}])

// 设置
.controller('settingCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 绑定
.controller('bindingCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 关于
.controller('aboutCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 课程表
.controller('courseCtrl', ['$scope', '$state', '$stateParams', 'timetalesService', 
function ($scope, $stateParams, $state, timetalesService) {
    $scope.loading = true;

    timetalesService.requestData();

    $scope.$on('timetalesServiceUpdata', function(event, data){
        
        $scope.loading = !$scope.loading;
        console.log($scope.loading);
        $scope.item = data;
        console.log($scope.item[7]);
    })
}])

// 空教室
.controller('classroomCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 查成绩
.controller('markCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 四六级
.controller('cet46Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 图书馆
.controller('libraryCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 报修
.controller('repairCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 表白
.controller('loveCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 地图
.controller('mapCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 校历
.controller('calendarCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

// 代取快递
.controller('expressCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])

//　搜索
   
.controller('searchCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])


.controller('ecardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('page5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page6Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('page15Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   

   
.controller('page18Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page19Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('page22Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page24Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('page31Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('page33Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('page35Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('page37Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('page40Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page42Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page44Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page45Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page27Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('page46Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



