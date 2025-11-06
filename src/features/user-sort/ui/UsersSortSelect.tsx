import type {SortValue} from "@/features/user-sort/model/types.ts";

type Props = {
    value: SortValue;
    onChange: (value: SortValue) => void;
};

export const UsersSortSelect = ({ value, onChange }: Props) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as SortValue)}
            style={{ marginBottom: "16px" }}
        >
            <option value="AZ">Name: A → Z</option>
            <option value="ZA">Name: Z → A</option>
            <option value="NEW">Date: New → Old</option>
            <option value="OLD">Date: Old → New</option>
        </select>
    );
};
