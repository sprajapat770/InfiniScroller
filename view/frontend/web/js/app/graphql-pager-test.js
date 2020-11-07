define(['Suraj_InfiniScroll/js/test'],function (test){
    "use strict";

    return function(getPagingInfo){
        function assertGetPagingInfoFor(known,toLoad,expected){
            test.assertEquals(expected,getPagingInfo(known,toLoad),{known,toLoad});        
        }
        //degenerate test cases
        assertGetPagingInfoFor(0,-1,{pageSize:0,currentPage:1});
        assertGetPagingInfoFor(-1,1,{pageSize:0,currentPage:1});
        assertGetPagingInfoFor(0,0,{pageSize:0,currentPage:1});

        //zero known products
        assertGetPagingInfoFor(0,1,{pageSize:1,currentPage:1});
        assertGetPagingInfoFor(0,5,{pageSize:5,currentPage:1});

        // known is evenly divideable by toLoad
        assertGetPagingInfoFor(3,3,{pageSize:3,currentPage:2});
        assertGetPagingInfoFor(10,5,{pageSize:5,currentPage:3});
        assertGetPagingInfoFor(6,1,{pageSize:1,currentPage:7});

        // known is NOT evenly divideable by toLoad
        assertGetPagingInfoFor(3,2,{pageSize:3,currentPage:2});
        assertGetPagingInfoFor(6,4,{pageSize:6,currentPage:2});
        assertGetPagingInfoFor(20,6,{pageSize:10,currentPage:3});
        assertGetPagingInfoFor(11,3,{pageSize:11,currentPage:2});
        //zero < known < toLoad
        //assertGetPagingInfoFor(10,14,{pageSize:24,currentPage:1});
        //assertGetPagingInfoFor(5,7,{pageSize:12,currentPage:1});
    }

});
