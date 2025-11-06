import type {LocalSort} from "@/features/user-sort/model/mapper.ts";

type Props = {
    value: LocalSort;
    onChange: (value: LocalSort) => void;
};

export const UsersSortSelect = ({ value, onChange }: Props) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as LocalSort)}
            style={{ marginBottom: "16px" }}
        >
            <option value="AZ">Name: A → Z</option>
            <option value="ZA">Name: Z → A</option>
            <option value="NEW">Date: New → Old</option>
            <option value="OLD">Date: Old → New</option>
        </select>
    );
};
