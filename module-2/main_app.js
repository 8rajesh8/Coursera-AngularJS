(function(){
  var base=angular.module('ShoppingListCheckOff',[]);
  base.controller('ToBuyController',toBuyC)
  .controller('AlreadyBoughtController',boughtC).service('ShoppingListCheckOffService',MyService);

  function toBuyC(ShoppingListCheckOffService){
    this.displayToBuy=ShoppingListCheckOffService.gettoBuy();

    this.buy=function(index){
      ShoppingListCheckOffService.buyItem(index);
    }

  }
  function boughtC(ShoppingListCheckOffService){

    this.displayBought=ShoppingListCheckOffService.getBought();
  }
  function MyService(){
    var toBuy=[
      {name: "chicken wings", qunatity:8},
      {name: "wine", qunatity: 2 },
      {name: "Cheese-pizza", qunatity:1 },
      {name: "thumbs-Up", qunatity:2},
      {name: "biryani", qunatity: 1}
  ];

    this.gettoBuy=function(){
      return toBuy;
    }

    var bought=[];
    this.getBought=function(){
      return bought;
    }

    this.buyItem=function(id){
      var eye=toBuy[id];
        toBuy.splice(id,1);
        bought.push(eye);


    }
  }
}
)();
