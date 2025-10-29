import {
  ApolloClient,
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  InMemoryCache,
  ServerError,
  split
} from "@apollo/client";
import {SetContextLink} from "@apollo/client/link/context";
import {ErrorLink} from "@apollo/client/link/error";
import {router} from "@/app/routes/routes.ts";
import {PATH} from "@/shared";
import {toast} from "react-toastify";
import {WebSocketLink} from "@apollo/client/link/ws";
import {SubscriptionClient} from "subscriptions-transport-ws";
import {getMainDefinition} from "@apollo/client/utilities";


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

const errorLink = new ErrorLink(({ error }) => {
  // GraphQL errors: extensions.code
  if (CombinedGraphQLErrors.is(error)) {
    for (const err of error.errors) {
      const message = err.message;
      switch (message) {
        case 'FORBIDDEN':
          // показать экран "нет прав"/логирование
          break;
        case 'BAD_USER_INPUT':
          // отдать ошибки валидации в UI
          break;
        case 'Unauthorized':
          console.log('Unauthorized error')
          localStorage.removeItem('adminAccessToken')
          router.navigate(PATH.main, { replace: true })
          // отдать ошибки валидации в UI
          break;
        default:
        // централизованное логирование / алертинг
          toast.error(message)
      }
    }
  } else if (ServerError.is(error)) {
    // Network/server HTTP
    const status = error.statusCode;
    if (status === 401) {
      console.log('401')
      // сессия истекла → разлогин или запуск refresh-потока
    } else if (status === 403) {
      // нет прав
    } else if (status === 429 || status === 503) {
      // здесь обычно ничего: RetryLink уже выполнит ретрай
    }
  } else {
    // JSON parse / другие ошибки среды
    // например: показать тост "Проблема соединения"
  }
  // вернуть ничего → ошибка пойдёт дальше вверх по цепочке
});



const wsClient = new SubscriptionClient(import.meta.env.VITE_BASE_WS_URL);
const wsLink = new WebSocketLink(wsClient);

// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: import.meta.env.VITE_BASE_WS_URL
//   })
// );
//
//
const httpLink = new HttpLink({ uri: import.meta.env.VITE_BASE_URL });
//
// const splitLink = split(
//   ({ operationType }) => {
//     return operationType === OperationTypeNode.SUBSCRIPTION;
//   },
//   wsLink,
//   httpLink
// );





const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return def.kind === 'OperationDefinition' && def.operation === 'subscription';
  },
  wsLink,
  httpLink
);



export const client = new ApolloClient({
  link:  ApolloLink.from([authLink,errorLink,splitLink]),
  cache: new InMemoryCache(),
});