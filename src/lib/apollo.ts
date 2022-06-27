import { ApolloClient, InMemoryCache } from "@apollo/client";
import { MediaType } from "@vime/core";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
    },
    cache: new InMemoryCache()
})