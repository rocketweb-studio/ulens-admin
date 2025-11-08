import {type ReactNode, useState} from "react";
import s from "@/pages/user-list/ui/UserList.module.css";

export type Column<T extends Record<string, any>> = {
    key: string;
    title: string ;
    dataIndex: string;
    render: (
        value: string,
        payload: T,
        isOpenModal?: boolean,
        setIsOpenModal?: (value: boolean) => void
    ) => ReactNode;
}

export const TableRow = <T extends Record<string, any>>({row, columns}: { row: T; columns: Column<T>[]; }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <tr key={`row-${row.id}`} className={s.tbody_tr}>
            {columns.map(column => (
                <td key={`${row.id}-${column.key}`} className={s.tbody_td}>
                    {column.render
                        ? column.render(row[column.dataIndex], row, isOpenModal, setIsOpenModal)
                        : row[column.dataIndex]
                    }
                </td>
            ))}
        </tr>
    );
};
