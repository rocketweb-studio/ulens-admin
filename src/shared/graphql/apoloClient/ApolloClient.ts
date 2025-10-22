import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";
import {SetContextLink} from "@apollo/client/link/context";

const authLink = new SetContextLink(async (prevContext) => {
  const token = localStorage.getItem('adminAccessToken')
  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    credentials: 'include',
  };
});

const httpLink = new HttpLink({ uri: import.meta.env.VITE_BASE_URL });



export const client = new ApolloClient({
  link:  ApolloLink.from([authLink,httpLink ]),
  cache: new InMemoryCache(),
});