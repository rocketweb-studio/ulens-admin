import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import './global.css'
import App from './App.tsx'
import '@rocketweb-studio/ulens-ui-kit/dist/index.css'

const client = new ApolloClient({
  link: new HttpLink({ uri: import.meta.env.VITE_BASE_URL }),
  cache: new InMemoryCache(),
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </StrictMode>,
)