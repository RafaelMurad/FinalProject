angular.module('LucasDirective',[])

.directive('navBar', function() {
  return {
    restrict: 'EA',    
    templateUrl: 'templates/directives/nav-bar.html'
  };
});

