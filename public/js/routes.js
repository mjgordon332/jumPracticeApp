angularApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $locationProvider.html5Mode(true);
    
    $stateProvider 
    .state('example', {
        url: '/',
        templateUrl: 'pages/example.html',
        controller: 'practiceCTRL'
    })

}]);

//Sets the endpoint to which all get/post req are made which you won't use yet
//testApp.run(['$rootScope',function($rootScope){
//	$rootScope.endPoint = 'http://localhost:3000';
//}]);
