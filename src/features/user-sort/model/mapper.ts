// import {type SortDirection} from "@/features/user-sort/model/types.ts";
//
//
// export const mapSortToQuery = (sort: SortDirection) => {
//
//     switch (sort) {
//         case 'AZ':
//             return { sortBy: 'USER_NAME', sortDirection: 'ASC'};
//
//         case 'ZA':
//             return { sortBy: 'USER_NAME', sortDirection: 'DESC'};
//
//         case 'NEW':
//             return {sortBy: 'CREATED_AT', sortDirection: 'DESC'};
//
//         case 'OLD':
//             return {sortBy: 'CREATED_AT', sortDirection: 'ASC'};
//
//             default:
//                 return {sortBy: 'CREATED_AT', sortDirection: 'DESC'};
//     }
// }

import {
    SortableTransactionFields,
    SortDirection
} from "@/shared/graphql/generated/graphql.ts";

export type LocalSort = "AZ" | "ZA" | "NEW" | "OLD";

export const mapSortToQuery = (sort: LocalSort) => {
    switch (sort) {
        case "AZ":
            return { sortBy: "USERNAME" as SortableTransactionFields, sortDirection: "ASC" as SortDirection };
        case "ZA":
            return { sortBy: "USERNAME" as SortableTransactionFields, sortDirection: "DESC" as SortDirection };
        case "NEW":
            return { sortBy: "CREATED_AT" as SortableTransactionFields, sortDirection: "DESC" as SortDirection };
        case "OLD":
            return { sortBy: "CREATED_AT" as SortableTransactionFields, sortDirection: "ASC" as SortDirection };
        default:
            return { sortBy: "CREATED_AT" as SortableTransactionFields, sortDirection: "DESC" as SortDirection };
    }
};
