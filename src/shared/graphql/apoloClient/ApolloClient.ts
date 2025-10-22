import {ApolloClient, ApolloLink, CombinedGraphQLErrors, HttpLink, InMemoryCache, ServerError} from "@apollo/client";
import {SetContextLink} from "@apollo/client/link/context";
import {ErrorLink} from "@apollo/client/link/error";

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
  debugger
  if (CombinedGraphQLErrors.is(error)) {
    for (const err of error.errors) {
      const code = err.message;
      switch (code) {
        case 'FORBIDDEN':
          // показать экран "нет прав"/логирование
          break;
        case 'BAD_USER_INPUT':
          // отдать ошибки валидации в UI
          break;
        case 'Unauthorized':
          console.log('Unauthorized error')
          // отдать ошибки валидации в UI
          break;
        default:
        // централизованное логирование / алертинг
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


const httpLink = new HttpLink({ uri: import.meta.env.VITE_BASE_URL });



export const client = new ApolloClient({
  link:  ApolloLink.from([authLink,errorLink,httpLink]),
  cache: new InMemoryCache(),
});