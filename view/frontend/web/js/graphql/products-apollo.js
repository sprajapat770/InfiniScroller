define(['apollo-boost'],function (Apollo){
    "use strict";


    const client = new Apollo.ApolloClient();
    const query = Apollo.gql(`query products($pageSize:Int!)
{
  products(filter:{} sort:{name:ASC} pageSize:$pageSize){
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

    return function(pageSize){
        return client.query({
                query:query,
                variables:{
                    pageSize:pageSize
                }

        });
    }

});
