import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-us-west-2.graphcms.com/v2/cl4smf76l298d01yxgbq29kc1/master",
    cache: new InMemoryCache()
})