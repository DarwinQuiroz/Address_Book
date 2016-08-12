
addressApp.controller('mainController', function($scope){
	var datos = localStorage.getItem("addressapp_data");
	if(datos != null){
		$scope.contacts = [];
		var rawContacts = JSON.parse(datos);
		_(rawContacts).forEach(function(value){
			$scope.contacts.push(new Contact(value));
		});
	}
	else{
		$scope.contacts = [
			new Contact({first_name: "Darwin", last_name: "Quiroz", email: "darwin_quiroz04@hotmail.com", country: "EC"}),
			new Contact({first_name: "Pedro", last_name: "Quijije", email: "pedro@hotmail.com", country: "ES"}),
			new Contact({first_name: "Jose", last_name: "Pita", email: "jose@hotmail.com", country: "DE"}),
			// new Contact({first_name: "Maria", last_name: "Sanchez", email: "maria@hotmail.com", country: "Mexico"}),
			// new Contact({first_name: "Darwin", last_name: "Quiroz", email: "darwin_quiroz04@hotmail.com", country: "Ecuador"}),
			// new Contact({first_name: "Pedro", last_name: "Quijije", email: "pedro@hotmail.com", country: "España"}),
			// new Contact({first_name: "Jose", last_name: "Pita", email: "jose@hotmail.com", country: "Argentina"}),
			// new Contact({first_name: "Maria", last_name: "Sanchez", email: "maria@hotmail.com", country: "Mexico"}),
			// new Contact({first_name: "Jose", last_name: "Pita", email: "jose@hotmail.com", country: "Argentina"}),
			// new Contact({first_name: "Maria", last_name: "Sanchez", email: "maria@hotmail.com", country: "Mexico"}),
			// new Contact({first_name: "Jose", last_name: "Pita", email: "jose@hotmail.com", country: "Argentina"}),
			// new Contact({first_name: "Maria", last_name: "Sanchez", email: "maria@hotmail.com", country: "Mexico"}),
		];
	}
	// console.debug($scope.contacts);
})