(function(){
    'use strict';
    var base=angular.module('myFirstApp',[]);

    base.run(function($rootScope){
        $rootScope.title="p-Site";
    })

    base.controller('control1',function($scope,goodFilter){

        $scope.input_data='';
        $scope.message='';
        $scope.error=false;
        $scope.specialMess='';


        $scope.checker=function(){

          var str=$scope.input_data;

          var x=JSON.stringify(str);
          $scope.specialMess=goodFilter(x);

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

    base.filter('good',myFilter);

    function myFilter(){
      return function(mess){
        if(mess.search(/sybil/i)!=-1){
          return "fuck that b***h...";
        }
        else{
          return '';
        }
      }
    }

    base.controller('control2',fu);

    function fu(){
      this.raja="ponnaganti";
    }
})();
