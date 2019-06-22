import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as List,
  GraphQLNonNull as NonNull
} from 'graphql';


const Category: ObjectType = new ObjectType({
  name: 'Category',
  description: "Represents Category",
  fields: {
    id: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    slug: { type: new NonNull(StringType) },
    parentId: { type: StringType },
    order: { type: new NonNull(IntType) },
    children: { 
      get type() { return new List(Category) }
    }
  }
});

export default Category;