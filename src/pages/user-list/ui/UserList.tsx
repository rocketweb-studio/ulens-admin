import {Input} from "@rocketweb-studio/ulens-ui-kit";
import s from "./UserList.module.css"
import {type ReactNode} from "react";


type User= {
    userId: number;
    profileLink: string;
    userName: string;
    dateAdded: string;
}

type Column= {
    key: string;
    title: string;
    dataIndex: keyof User;
    render?: (value: any, record: User) => ReactNode;
}


type TableProps= {
    data: User[];
    columns: Column[];
}

const Table= ({ data, columns }:TableProps) => {
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
            {data.map((row, index) => (
                <tr key={row.userId || index} className={s.tbody_tr}>
                    {columns.map(column => (
                        <td key={column.key} className={s.tbody_td}>
                            {column.render
                                ? column.render(row[column.dataIndex], row)
                                : row[column.dataIndex]
                            }
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export const UserList = () => {
    // const [page, setPage] = useState(1);
    // const handlePageChange = ({ page, pageSize }: { page: number; pageSize: number }) => {
    //     console.log('Переход на страницу:', page, 'Размер:', pageSize);
    // };
    const users: User[] = [
        {
            userId: 1,
            profileLink: '/user/1',
            userName: 'Алексей',
            dateAdded: '2024-01-15'
        },
        {
            userId: 2,
            profileLink: '/user/2',
            userName: 'Мария',
            dateAdded: '2024-01-16'
        },
        {
            userId: 3,
            profileLink: '/user/3',
            userName: 'Иван',
            dateAdded: '2024-01-17'
        },
        {
            userId: 4,
            profileLink: '/user/4',
            userName: 'Екатерина',
            dateAdded: '2024-01-18'
        }
    ];

    const columns: Column[] = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
            render: (name) => (
                <div style={{display:"flex",gap:"12px",flexDirection:"row"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_45764_12513)">
                            <path
                                d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                fill="white"/>
                            <line x1="7.04314" y1="19.3621" x2="17.0431" y2="4.3621" stroke="white" stroke-width="2.3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_45764_12513">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span style={{color: 'white'}}>{name}</span>
                </div>)
        },
        {
            title: 'Profile link',
            dataIndex: 'profileLink',
            key: 'profileLink',
            render: (link) => (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Перейти в профиль
                </a>
            )
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            key: 'userName',
            render: (name) => (
                <span style={{color: 'white'}}>
          {name}
        </span>
            )
        },
        {
            title: 'Date added',
            dataIndex: 'dateAdded',
            key: 'dateAdded',
            render: (date) => {
                const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                return (
                    <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span style={{color: 'white',}}>
            {formattedDate}
          </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_45764_12530)">
                                <path
                                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                    fill="white"/>
                                <path
                                    d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                                    fill="white"/>
                                <path
                                    d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_45764_12530">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                );
            }
        }
    ];

    return (
        <div>
            <h1>UserList</h1>
            <Input/>

            {/*<Select/>*/}
            <Table data={users} columns={columns}/>
            {/*<Pagination onPageChange={handlePageChange} elementCount={8}/>*/}

        </div>
    );
};
