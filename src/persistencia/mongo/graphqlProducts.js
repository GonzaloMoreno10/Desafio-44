import { ProductTC } from '../../services/productos';
const { SchemaComposer } = require('graphql-compose');

const ProductsQuery = {
  productMany: ProductTC.getResolver('findMany'),
};

const ProductsMutation = {
  productCreateOne: ProductTC.getResolver('createOne'),
};

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...ProductsQuery,
});

schemaComposer.Mutation.addFields({
  ...ProductsMutation,
});

export const graphQLMainSchema = schemaComposer.buildSchema();
