angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

// 滑动菜单
.service('sliderService', function($http) {
    this.getClassify = function() {
        return [
            {
                name: '推荐',
                isload: true,
                page: 1,
                rows: 20,
                url: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page + '&callback=JSON_CALLBACK',
                items: [],
                loadMore: function() {
                    $this = this;
                    console.log("正在加载更多数据..." + this.page);
                    $http.jsonp(this.url).success(function (response) {
                        $this.items = $this.items.concat(response.result);

                        if(response.length<20){
                            $this.isload=false;
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
                        $log($this);
                        $this.callback();
                    });
                },
                callback: function() {
                    //回掉函数
                }
            },
            {
                name: '新闻',
                isload: true,
                limit: 3,
                skip: 0,
                items: [],
                loadMore: function(callback) {
                    $this = this;
                    console.log("正在加载更多数据...");
                    var url = 'http://jenes.site/hpu/public/getNewsList/json/' + this.limit + '/' + this.skip;

                    $http.get(url).success(function(response) {
                        $this.items = $this.items.concat(response.results);
                        $this.skip += 3;
                        $this.callback();
                    });
                },
                doRefresh: function() {
                    $this = this;
                    console.log("正在执行refresh操作...");
                    var url = 'http://jenes.site/hpu/public/getNewsList/json/6/0';

                    $http.get(url).success(function(response) {
                        $this.items = response.results;
                        $this.callback();
                        console.log("刷新完成");
                    });
                },
                callback: function() {
                    //回掉函数
                }
            },
            {
                name: '后勤',
                isload: true,
                limit: 3,
                skip: 0,
                items: [],
                loadMore: function(callback) {
                    $this = this;
                    console.log("正在加载更多数据...");
                    var url = 'http://jenes.site/hpu/public/getWeiBo/json/' + this.limit + '/' + this.skip;

                    $http.get(url).success(function(response) {
                        $this.items = $this.items.concat(response.results);
                        console.log($this.items);
                        $this.skip += 3;
                        $this.callback();
                    });
                },
                doRefresh: function() {
                    $this = this;
                    console.log("正在执行refresh操作...");
                    var url = 'http://jenes.site/hpu/public/getWeiBo/json/3/0';

                    $http.get(url).success(function(response) {
                        $this.items = response.results;
                        $this.callback();
                        console.log("刷新完成");
                    });
                },
                callback: function() {
                    //回掉函数
                }
            },
            {
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
                        if(response.length<20){
                            $this.isload=false;
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
            },
            {
                name: '招聘', isload: true,

                page: 1, rows: 20,
                items: [],
                loadMore: function() {
                    $this = this;
                    var url= 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page+'&callback=JSON_CALLBACK';
                    console.log("正在加载更多数据..." + this.page);
                    $http.jsonp(url).success(function(response) {
                        $this.items = $this.items.concat(response.result);
                        $this.page++;
                        $this.callback();
                    });
                },
                doRefresh: function() {
                    $this = this;
                    console.log("正在执行refresh操作...");
                    $http.jsonp(this.url).success(function(response) {
                        $this.page = 2;
                        if(response.length<20){
                            $this.isload=false;
                        }
                        $this.items = response.result
                        $this.callback();
                    });
                },
                callback: function() {
                    //回掉函数
                }
            }
        ]
    }
})

// 新闻内容
.service('newsContentService', function($http, $rootScope) {
    var item = '';
    return {
        requestData: function(objectId) {

            var newsContentUrl = 'http://jenes.site/hpu/public/getNewsContent/json/' + objectId;

            $http.get(newsContentUrl).success(
                function(response){
                    item = response;
                    console.log(response);
                    //广播告诉 controller数据请求完成
                    
                    $rootScope.$broadcast('newsContentServiceUpdata', item);
                }
            ).error(function(){
                    console.log('数据获取失败!');
            });
        }
    }
})

// 获取课程表
.service('timetalesService', ['$http', '$rootScope', function ($http, $rootScope) {
    var timetales = '';
    return {
        requestData: function() {

            var newsContentUrl = 'http://jenes.site/hpu/public/timetables';

            $http.get(newsContentUrl).success(
                function(response){
                    timetales = response;
                    // console.log(response.Other);
                    //广播告诉 controller数据请求完成
                    $rootScope.$broadcast('timetalesServiceUpdata', timetales);
                }
            ).error(function(){
                    console.log('数据获取失败!');
            });
        }
    }
}])

