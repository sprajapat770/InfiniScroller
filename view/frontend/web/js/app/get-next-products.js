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
   
    const products = {
        items:[],
        totalCount:Number.POSITIVE_INFINITY,
        returned:0
    };

   function startLoadingProducts(products,toLoad){
    const {currentPage,pageSize} = getPagingInfo(products.items.length,toLoad);
    const newProducts = createEmptyProducts(pageSize);
    products.items.push(...newProducts);

    console.log({toLoad,pageSize,overFetched: pageSize - toLoad, currentPage,numberOfKnownProducts:products.items.length});
    
    queryProduts(pageSize,currentPage).then(result =>{
            products.totalCount = result.data.products.total_count;
            result.data.products.items.forEach(productData => updateProduct(newProducts.shift(),productData));
        })
        return newProducts;
   }
   
   return function (numberOfProductsRequested){
        const toReturn = Math.min(numberOfProductsRequested,products.totalCount - products.items.length) 
        const inBuffer = products.items.length - products.returned;
        const toLoad = Math.max(0,toReturn - inBuffer);

        if (toLoad > 0) {
            startLoadingProducts(products,toLoad);
        }

        products.returned +=toReturn;
        return products.items.slice(products.returned - toReturn, products.returned);         
    }
});
