(function(){
    'use strict';
    var base=angular.module('myFirstApp',[]);

    base.run(function($rootScope){
        $rootScope.title="p-Site";
    })

    base.controller('control1',function($scope){

        $scope.input_data='';
        $scope.message='';
        $scope.error=false;


        $scope.checker=function(){

          var str=$scope.input_data;

          if(str.trim().length === 0){

            $scope.message="Enter the data first..";
            $scope.error=true;
          }
          else {

            var sooo=str.split(',');
            var parsing=sooo.filter(
              function(i){
                return i.trim() !== '';
              });


              if(parsing.length <=3){
                $scope.message="Enjoy!";
                $scope.error=false;

              }
              else {
                $scope.message="Too much!";
                $scope.error=true;
              }
          }


        }


    });
})();
