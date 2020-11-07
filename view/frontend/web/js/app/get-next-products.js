define(['ko',
    'Suraj_InfiniScroll/js/graphql/products-apollo'],function (ko,queryProduts){
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

    function updateProduct(product,productData){
        //console.log(productData);
        product.name = productData.name;
        product.url = '/'+ productData.url_rewrites[0].url;
        product.image = productData.image.url;
    }

   return function (n){
    const products = createEmptyProducts(n);

        queryProduts(n).then(result =>{
            result.data.products.items.forEach(productData => updateProduct(products.shift(),productData));
        })
        return products;
    }


});
