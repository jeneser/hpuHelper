angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

//自定义directive
.directive('hideTabs',function($rootScope){
    return {
        restrict:'AE',
        link:function($scope){


            console.log(1111);
            $scope.$on('$ionicView.beforeEnter', function() {
                $rootScope.hideTabs = 'tabs-item-hide';

                console.log('tabs-item-hide');

            });
            $scope.$on('$destroy',function(){
                $rootScope.hideTabs = '';
                console.log('no-tabs-item-hide');

            })
        }
  } })