

export type UserSortValue =
    | "NAME_ASC"
| "NAME_DESC"
| "DATA_NEW"
| "DATE_OLD";

export function sortUsers(users: User[], sort: UserSortValue): User[] {
    const copy = [...users];

    switch (sort) {
        case "NAME_ASC":
            return copy.sort((a, b) => a.userName.localeCompare(b.userName));

            case "NAME_DESC":
                return copy.sort((a, b) => b.userName.localeCompare(a.userName));

                case "DATA_NEW":
                    return copy.sort((a, b) =>
                    new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
                    );

        case "DATE_OLD":
            return copy.sort((a, b) =>
            new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime(),
            );

            default:
                return copy;
    }
}