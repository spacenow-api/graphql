import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver, GraphQLString } from "graphql";
import formatDate from "dateformat";

class CurrencyDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args: any) {
      const result = await resolve.apply(this, args);
      if (typeof result === "string") {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

class FormattableDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.args.push({
      name: "format",
      type: GraphQLString
    });

    field.resolve = async function(
      source: any,
      { format, ...otherArgs }: any,
      context: any,
      info: any
    ) {
      const date = await resolve.call(this, source, otherArgs, context, info);
      return formatDate(date, format || defaultFormat);
    };

    field.type = GraphQLString;
  }
}

export { CurrencyDirective, FormattableDateDirective };
