import { ApolloClient, InMemoryCache } from "@apollo/client";

// rootのディレクトリとservices/index.tsで利用している
export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});
