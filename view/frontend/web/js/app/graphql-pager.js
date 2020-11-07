define([],function (){
    "use strict";


    function findNextDivisor(known,toLoad){
    	if (known % toLoad === 0) return toLoad;
    	return findNextDivisor(known,toLoad+1);
    }

    return function(known,toLoad){
    	if (known < 0 || toLoad <= 0) {
  		return {pageSize:0,currentPage:1};

    	}
    	if ( toLoad >known) {
    		return {pageSize: known+toLoad,currentPage:1};
    	}
    	const pageSize = findNextDivisor(known,toLoad);
    	return {pageSize:pageSize,currentPage:(known/pageSize)+1};
    }

});
