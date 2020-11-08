define(['ko',
    'Suraj_InfiniScroll/js/graphql/products-apollo',
    'Suraj_InfiniScroll/js/app/graphql-pager'],
    function (ko,queryProduts,getPagingInfo){
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

    let numberOfKnownProducts = 0;
    let totalProductCount = Number.POSITIVE_INFINITY;
   

   function startLoadingProducts(n){
    const {currentPage,pageSize} = getPagingInfo(numberOfKnownProducts,n);
    const products = createEmptyProducts(pageSize);
    numberOfKnownProducts +=pageSize;
    console.log('pageSize:',pageSize,'currentPage:',currentPage, 'knownProducts:',numberOfKnownProducts);
        queryProduts(pageSize,currentPage).then(result =>{
            totalProductCount = result.data.products.total_count;
            result.data.products.items.forEach(productData => updateProduct(products.shift(),productData));
        })
        return products;
   }
   return function (n){
    
    n = Math.min(n, totalProductCount - numberOfKnownProducts);
    return n<1? []: startLoadingProducts(n);    
    }


});
