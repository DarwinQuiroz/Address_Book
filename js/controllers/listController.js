
addressApp.controller('listController', function($scope, $location){
	document.getElementsByTagName('html')[0].className = "listController";

	$scope.goForm = function(_id){
		$location.path('contact').search({id: _id});
	};

	$scope.btn_scroll_down = function(direction){
 	    $scope.scroll_direction = direction;
 	    $scope.scroll_timer = setInterval(scroll_exe, 10);
 	};

	$scope.btn_scroll_up = function(){
 	    clearInterval($scope.scroll_timer);
 	};

	var scroll_exe = function () {
 		var wrapper = document.getElementsByClassName("list-wrapper")[0];
 	    wrapper.scrollTo(0, wrapper.scrollTop + $scope.scroll_direction);
 	};
});