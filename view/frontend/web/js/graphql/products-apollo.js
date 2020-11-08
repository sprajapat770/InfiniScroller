define(['apollo-boost'],function (Apollo){
    "use strict";


    const client = new Apollo.ApolloClient();
    const query = Apollo.gql(`query products($pageSize:Int! $currentPage:Int!)
{
  products(filter:{} sort:{name:ASC} pageSize:$pageSize currentPage:$currentPage){
    total_count
    items{
      name
      url_rewrites{
        url
      }
      image{
        url
      }
    }
  }
}`);

    return function(pageSize,currentPage){
        return client.query({
                query:query,
                variables:{
                    pageSize,
                    currentPage
                }

        });
    }

});
