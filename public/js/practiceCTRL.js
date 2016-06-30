angularApp.controller('practiceCTRL',['$scope','PracticeSvc', function( $scope, PracticeSvc ) {
    
    $scope.names = PracticeSvc.getNames();
  
    $scope.remove = function(index){
        PracticeSvc.removeName(index)
    } 
    
    $scope.text = "";

    $scope.addUser = function(){
        
        if($scope.text === ""){
            return;
        }
        
        PracticeSvc.addPerson($scope.text)
        $scope.text = "";
    }

}]);
