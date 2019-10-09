import { SchemaDirectiveVisitor } from "apollo-server";
import { defaultFieldResolver, GraphQLString } from "graphql";

class CurrencyDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormats } = this.args;

    field.args.push({
      name: "format",
      type: GraphQLString
    });

    field.resolve = async function(...args: any) {
      const result = await resolve.apply(this, args);
      return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    field.type = GraphQLString;
  }
}

export { CurrencyDirective };
