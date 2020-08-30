(function (){
  'use strict';
  var base=angular.module('second',[]);

  base.run(function($rootScope){
  $rootScope.title="Week-2";
  })

  base.controller('AddingList',control1)
  .controller('ShowingList',control2)
  .service('MyService',ShopService)

  function control1(MyService){
    this.itemName="";
    this.itemQuantity="";
    this.addItem=function(){
      MyService.addItem(this.itemName,this.itemQuantity);
    }


  }

  function control2(MyService){
    this.items=MyService.getItems();

    this.removeItem=function(index){
      MyService.removeI(index);
    };
  }
  function ShopService(){
    var items=[];

    this.addItem=function(itemName,itemQuantity){
      var item={
        name:itemName,

        quantity:itemQuantity
      };
      items.push(item);
    };

    this.getItems=function(){
      return items;
    }

    this.removeI=function(ind){
      items.splice(ind,1);
    }
  }

})();
