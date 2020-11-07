define([],function (){
    "use strict";

    return function(testModuleName,sutModuleName){
  
  		require.undef(testModuleName);
  		require.undef(sutModuleName);
  		require([testModuleName,sutModuleName] ,(test,sut)=>{
  			try{


  			test(sut);
  			console.log("%c success","background:green;color:white;");
  		}catch(e){
  			console.log('%c failure:',"background:red;color:white;",e);
  		}
  	})
    }

});