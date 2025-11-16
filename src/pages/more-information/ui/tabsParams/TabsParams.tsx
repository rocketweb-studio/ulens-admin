// import { useSearchParams } from 'react-router'
// import type { ReactNode } from 'react'
//
// export const TabsParams = ({userId,activeTab,children}:{userId:string,activeTab:string,children:ReactNode}) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//
//   // Получить параметр
//   const userId = searchParams.get('q');
//   const activeTab = searchParams.get('page') || '1';
//
//   // Установить параметры
//   const updateSearch = (newQuery) => {
//     setSearchParams({ q: newQuery, page: '1' });
//   };
//
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }
//
