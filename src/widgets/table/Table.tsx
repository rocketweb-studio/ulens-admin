import s from './Table.module.css'
import {type Column, TableRow} from "./TableRow.tsx";


export type TableProps<T extends Record<string, any>> = {
    rows: T[];
    columns: Column<T>[];
    rowKey?: keyof T;
}

export const Table = <T extends Record<string, any>>({rows, columns, rowKey = 'id' as keyof T}: TableProps<T>) => {
    return (
        <table className={s.table}>
            <thead className={s.thead}>
            <tr className={s.thead_tr}>
                {columns.map(column => (
                    <td key={column.key} className={s.thead_td}>{column.title}</td>
                ))}
            </tr>
            </thead>
            <tbody className={s.tbody}>
            {rows.map((row) => (
                <TableRow
                    key={`row-${row[rowKey]}`}
                    row={row}
                    columns={columns}
                />
            ))}
            </tbody>
        </table>
    );
};
