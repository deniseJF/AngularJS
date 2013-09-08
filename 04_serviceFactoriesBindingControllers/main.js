// define de app
//[] - no dependencies
var myApp = angular.module('myApp',[]);

myApp.factory('GrabDataService', function(){
	return {message:"I'm data from a service"};
});

//Inject the servide and it's object into 
// each object controller using data lookup (GrabDataService)
function FirstCtrl($scope,GrabDataService){
	$scope.data = GrabDataService;
}

function SecondCtrl($scope,GrabDataService){
	$scope.data = GrabDataService;
}