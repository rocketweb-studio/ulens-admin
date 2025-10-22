import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ApolloProvider} from "@apollo/client/react";
import './style/global.css'
import '@rocketweb-studio/ulens-ui-kit/dist/index.css'
import {RouterProvider} from "react-router";
import {router} from "./routes/routes.ts";
import { client } from '@/shared/graphql/apoloClient/ApolloClient.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
)