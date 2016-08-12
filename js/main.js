
var addressApp = angular.module('addressApp',[
	'ngRoute',
	'ngAnimate'
])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/list.html',
		controller: 'listController',
		reloadOnSearch: false,
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'contactController',
		reloadOnSearch: false,
	})
})
.directive('listReadyDirective', function($timeout){
	return{
		restrict: 'A',
		link: function($scope, elem, attrs){
			if ($scope.$last === true){
				$timeout(function(){
					var wrapper = document.getElementsByClassName('list-wrapper')[0];
					var ul = document.getElementsByTagName('ul')[0];
					var _display = 'none';
					if(ul.offsetHeight > wrapper.offsetHeight){
						_display = 'block';
					}
					document.getElementsByClassName('scroll-bar')[0].style.display = _display;
				}, 10)
			}
		}
	}
})