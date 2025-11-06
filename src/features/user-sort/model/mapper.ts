import type { SortDirection, SortabeFieldsForUsers } from "@/shared/graphql/generated/graphql";

export type LocalSort = "AZ" | "ZA" | "NEW" | "OLD";

export const mapSortToQuery = (sort: LocalSort): {
    sortBy: SortabeFieldsForUsers;
    sortDirection: SortDirection;
} => {
    switch (sort) {
        case "AZ":
            return {
                sortBy: "USER_NAME",
                sortDirection: "ASC"
            };

        case "ZA":
            return {
                sortBy: "USER_NAME",
                sortDirection: "DESC"
            };

        case "NEW":
            return {
                sortBy: "CREATED_AT",
                sortDirection: "DESC"
            };

        case "OLD":
            return {
                sortBy: "CREATED_AT",
                sortDirection: "ASC"
            };

        default:
            return {
                sortBy: "CREATED_AT",
                sortDirection: "DESC"
            };
    }
};