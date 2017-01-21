angular.module('app.services', [])

//　滑动菜单
// -------------------------------
.service('sliderService', ['$rootScope', '$http',
  function($rootScope, $http) {

    this.getClassify = function() {
      return [{
        name: '推荐',
        isload: true,
        page: 1,
        rows: 20,
        url: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page + '&callback=JSON_CALLBACK',
        items: [],
        loadMore: function() {
          $this = this;
          console.log("正在加载更多数据..." + this.page);
          $http.jsonp(this.url).success(function(response) {
            $this.items = $this.items.concat(response.result);

            if (response.length < 20) {
              $this.isload = false;
            }
            $this.page++;
            console.log($this);
            $this.callback();
          });
        },
        doRefresh: function() {
          $this = this;
          console.log("正在执行refresh操作...");
          $http.jsonp(this.url).success(function(response) {
            $this.page = 2;

            $this.items = response.result;
            $this.callback();
          });
        },
        callback: function() {
          //回掉函数
        }
      }, {
        name: '新闻',
        isload: true,
        limit: 3,
        skip: 6,
        items: [],
        loadMore: function() {
          $this = this;
          console.log("正在加载更多数据...");
          var url = $rootScope.BASEURL + 'api/v1/news?limit=' + this.limit + '&skip=' + this.skip;

          $http.get(url)
            .success(function(res) {
              $this.items = $this.items.concat(res);
              $this.skip += 3;
            })
            .finally(function() {
              $this.cb();
            });
        },
        doRefresh: function() {
          $this = this;
          console.log("正在执行refresh操作...");
          var url = $rootScope.BASEURL + 'api/v1/news?limit=' + $this.skip + '&skip=0';

          $http.get(url)
            .success(function(res) {
              console.log(res);
              $this.items = res;
            })
            .finally(function() {
              $this.cb();
            });
        },
        cb: function() {}
      }, {
        name: '后勤',
        isload: true,
        limit: 3,
        skip: 6,
        items: [],
        loadMore: function() {
          $this = this;
          console.log("正在加载更多数据...");
          var url = $rootScope.BASEURL + 'api/v1/logistics?limit=' + this.limit + '&skip=' + this.skip;

          $http.get(url)
            .success(function(res) {
              $this.items = $this.items.concat(res);
              $this.skip += 3;
            })
            .finally(function() {
              $this.cb();
            });
        },
        doRefresh: function() {
          $this = this;
          console.log("正在执行refresh操作...");
          var url = $rootScope.BASEURL + 'api/v1/logistics?limit=' + $this.skip + '&skip=0';

          $http.get(url)
            .success(function(res) {
              console.log(res);
              $this.items = res;
            })
            .finally(function() {
              $this.cb();
            });
        },
        cb: function() {}
      }, {
        name: '公告',
        isload: true,
        page: 1,
        rows: 20,
        items: [],
        loadMore: function(callback) {
          $this = this;
          console.log("正在加载更多数据..." + this.page);
          // var url= 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=15&page='+this.page+'&callback=JSON_CALLBACK';

          $http.jsonp(url).success(function(response) {
            $this.items = $this.items.concat(response.result);
            $this.page++;
            if (response.length < 20) {
              $this.isload = false;
            }
            $this.callback();
          });
        },
        doRefresh: function() {
          $this = this;
          console.log("正在执行refresh操作...");
          $http.jsonp(this.url).success(function(response) {
            $this.page = 2;
            $this.items = response.result
            $this.callback();
          });
        },
        callback: function() {
          //回掉函数
        }
      }, {
        name: '招聘',
        isload: true,
        limit: 3,
        skip: 6,
        items: [],
        loadMore: function() {
          $this = this;
          console.log("正在加载更多数据...");
          var url = $rootScope.BASEURL + 'api/v1/job?limit=' + this.limit + '&skip=' + this.skip;

          $http.get(url)
            .success(function(res) {
              $this.items = $this.items.concat(res);
              $this.skip += 3;
            })
            .finally(function() {
              $this.cb();
            });
        },
        doRefresh: function() {
          $this = this;
          console.log("正在执行refresh操作...");
          var url = $rootScope.BASEURL + 'api/v1/job?limit=' + $this.skip + '&skip=0';

          $http.get(url)
            .success(function(res) {
              console.log(res);
              $this.items = res;
            })
            .finally(function() {
              $this.cb();
            });
        },
        cb: function() {}
      }]
    }
  }
])

//　新闻内容
// -------------------------------
.service('newsService', function($http, $rootScope) {
  var item = '';
  return {
    requestData: function(objectId) {

      var newsUrl = $rootScope.BASEURL + 'api/v1/news/' + objectId;

      $http.get(newsUrl)
        .success(function(res) {
          item = res;
          console.log(res);

          $rootScope.$broadcast('newsServiceUpdata', item);
        })
        .error(function() {
          console.log('数据获取失败!');
        });
    }
  }
})

//　后勤内容
// -------------------------------
.service('logisticsService', function($http, $rootScope) {
  var item = '';
  return {
    requestData: function(objectId) {

      var logisticsUrl = $rootScope.BASEURL + 'api/v1/logistics/' + objectId;

      $http.get(logisticsUrl)
        .success(function(res) {
          item = res;
          console.log(res);

          $rootScope.$broadcast('logisticsServiceUpdata', item);
        })
        .error(function() {
          console.log('数据获取失败!');
        });
    }
  }
})

//　招聘内容
// -------------------------------
.service('recruitContentService', function($http, $rootScope) {
  var item = '';
  return {
    requestData: function(objectId) {

      var recruitContentUrl = $rootScope.BASEURL + 'api/v1/job/' + objectId;

      $http.get(recruitContentUrl)
        .success(function(res) {
          item = res;
          console.log(res);

          $rootScope.$broadcast('recruitContentServiceUpdata', item);
        })
        .error(function() {
          console.log('数据获取失败!');
        });
    }
  }
})

// 获取课程表
.service('timetalesService', ['$http', '$rootScope', function($http, $rootScope) {
  var timetales = '';
  return {
    requestData: function() {

      var newsUrl = 'http://jenes.site/hpu/public/timetables';

      $http.get(newsUrl).success(
        function(response) {
          timetales = response;
          // console.log(response.Other);
          //广播告诉 controller数据请求完成
          $rootScope.$broadcast('timetalesServiceUpdata', timetales);
        }
      ).error(function() {
        console.log('数据获取失败!');
      });
    }
  }
}])

//　注册
// -------------------------------
.service('signupService', ['$rootScope', '$http',
  function($rootScope, $http) {
    return {
      signup: function(userDate, success, err) {
        $http.post($rootScope.BASEURL + 'user/signup', userDate).success(function(res) {
          // console.log(res);
          success(res);
        }).error(function() {
          // console.log('授权失败');
          err();
        });
      }
    }

  }
])

//　登陆
// -------------------------------
.service('loginService', ['$rootScope', '$http',
  function($rootScope, $http) {
    return {
      login: function(userDate, success, err) {
        $http.post($rootScope.BASEURL + 'user/signin', userDate).success(function(res) {
          // console.log(res);
          success(res);
        }).error(function() {
          // console.log('授权失败');
          err();
        });
      }
    }

  }
])
