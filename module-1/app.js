(function(){
    'use strict';
    var base=angular.module('myFirstApp',[]);

    base.run(function($rootScope){
        $rootScope.title="p-Site";
    })

    base.controller('control1',function($scope){

        $scope.input_data;
        $scope.isEmpty;
        $scope.message;



        $scope.checker=function(){

          var str=$scope.input_data;

          if(str.trim().length==0){
            $scope.isEmpty=true;
            $scope.message="Enter the data first..";
          }
          else {
            var parsing=str.split(",").filter(
              function(i){
                i.trim() !== '';
              });

              $scope.isEmpty=false;

              if(parsing.length <=3){
                $scope.message="Enjoy";
              }
              else {
                $scope.message="Too Much..!";
              }
          }


        }


    });
})();
