import type {UserSortValue} from "@/entities/user/lib/sortUser.ts";

type Props = {
    value: UserSortValue;
    onChange: (value: UserSortValue) => void;
}

export const UserSort = ({value, onChange}: Props) => {
    return (
        <select
        value={value}
        onChange={(e) => onChange(e.target.value as UserSortValue)}
        style={{ marginBottom: 16 }}
        >
            <option value="NAME_ASC">Name: A → Z</option>
            <option value="NAME_DESC">Name: Z → A</option>
            <option value="DATE_NEW">Date: New → Old</option>
            <option value="DATE_OLD">Date: Old → New</option>
        </select>
    )
}