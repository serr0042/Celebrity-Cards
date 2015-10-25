angular.module('Booya')

.controller('DetailsCtrl', function($scope, $routeParams, Items){
	$scope.itemId = $routeParams.itemNum;
	$scope.item = {}
	
	Items.getOne($scope.itemId)
	.then(function(response){
		//success
		var items = response.data.items;
		items.forEach(function( i ){
			if( i.id == $routeParams.itemNum){
				$scope.item = i;
			}
		});
		
	}, function(response){
		//error
		
	});
	
});