angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

// 二级菜单隐藏底部tab
.directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      scope.$on('$ionicView.beforeEnter', function() {
        scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = value;
        });
      });
      scope.$on('$ionicView.beforeLeave', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
});