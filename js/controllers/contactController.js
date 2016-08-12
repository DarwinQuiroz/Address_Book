
addressApp.controller('contactController', function($scope , $routeParams, $location){
	document.getElementsByTagName('html')[0].className = "contactController";

	$scope.goList = function(){
		$location.path('/');
	}

	$scope.countries = window.countries;		

	$scope.new = true;
	var id_param = Number($routeParams.id);
	if(!_.isNaN(id_param)){
		$scope.savedContact = _.find($scope.contacts, function(o){
			return o.id == id_param;
		});
		$scope.contact = angular.copy($scope.savedContact);
		$scope.new = false;
	}

	$scope.add = function(){
		var new_contact = new Contact();
		_.forIn($scope.contact, function(value, key){
			new_contact[key] = value;
			returnHome();
		});
		$scope.contacts.push(new_contact);
	}

	$scope.update = function(){
		_.forIn($scope.contact, function(value, key){
			$scope.savedContact[key] = value;
		});
		returnHome();
	}

	$scope.delete = function(){
		var deleted = _.remove($scope.contacts, function(object){
			return object.id == $scope.contact.id;
		});
		returnHome();
	}

	var returnHome = function(){
		persistData();
		$scope.goList();
	}

	var persistData = function(){
		localStorage.setItem('addressApp_data', JSON.stringify($scope.contacts));
	}
});