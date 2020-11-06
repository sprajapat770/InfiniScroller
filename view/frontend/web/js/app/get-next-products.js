define(['ko'],function (ko){
    "use strict";


    function createEmptyProduct(){
        return ko.track({
            name:'...',
            url:'',
            image:require.toUrl('Magento_Catalog/images/product/placeholder/image.jpg')
        });
    }

     function createEmptyProducts(n){
       const products = [];
        while(n -- > 0){ 
            products.push(createEmptyProduct());
        }

        return products;
    }
   return function (n){
    const products = createEmptyProducts(n);

        return products;
    }


});
