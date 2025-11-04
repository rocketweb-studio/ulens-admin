import type {UserModel} from "@/shared/graphql/generated/graphql.ts";

export type UserSortValue = "AZ" | "ZA" | "NEW" | "OLD";

export const sortUsers = (users: UserModel[], sort: UserSortValue): UserModel[] => {

    switch (sort) {
        case "AZ":
            return [...users].sort((a, b) => (a.userName ?? '').localeCompare(b.userName ?? ''));

        case "ZA":
            return [...users].sort((a, b) => (b.userName ?? '').localeCompare(a.userName ?? ''));

        case "NEW":
            return [...users].sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
            );

        case "OLD":
            return [...users].sort((a, b) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
            );

        default:
            return users;
    }
}