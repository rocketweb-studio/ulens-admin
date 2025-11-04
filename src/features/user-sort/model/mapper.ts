import {type SortDirection} from "@/features/user-sort/model/types.ts";


export const mapSortToQuery = (sort: SortDirection) => {
    switch (sort) {
        case 'AZ':
            return { sortBy: 'USERNAME', SortDirection: 'ASC'};

        case 'ZA':
            return { sortBy: 'USERNAME', SortDirection: 'DESC'};

        case 'NEW':
            return {sortBy: 'CREATED_AT', SortDirection: 'DESC'};

        case 'OLD':
            return {sortBy: 'CREATED_AT', SortDirection: 'ASC'};

            default:
                return {sortBy: 'CREATED_AT', SortDirection: 'DESC'};
    }
}