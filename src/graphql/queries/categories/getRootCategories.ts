import {
    GraphQLList as List
  } from 'graphql';
  
  import { Category } from '../../types';
  
  const getRootCategories = {
  
    type: new List(Category),
  
    async resolve(_source: any, _args: any, { dataSources }:any ) {
      return await dataSources.categoriesAPI.getRootCategories();
    },
  };
  
  export default getRootCategories;