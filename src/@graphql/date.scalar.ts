import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

module.exports = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value: any) {
      console.log("VALUE PARSE", value);
      return new Date(value);
    },
    serialize(value: any) {
      console.log("VALUE SERIALIZE", value);
      return value.getTime();
    },
    parseLiteral(ast: any) {
      console.log("VALUE LITERAL", ast);
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
};
