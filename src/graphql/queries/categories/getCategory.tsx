import {
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
  } from 'graphql';
  
  import { Category } from '../../types';
  
  const getCategory = {
  
    type: Category,
  
    args: {
      id: { type: new NonNull(StringType) },
    },
  
    async resolve(_source: any, _args: any, { dataSources }:any ) {
      return await dataSources.categoriesAPI.getCategory(_args.id)
    },
  };
  
  export default getCategory;