import {Input,Pagination,Select} from "@rocketweb-studio/ulens-ui-kit";
import s from "./UserList.module.css"
import {useState} from "react";
import {useQuery} from "@apollo/client/react";
import {getUsersList} from "@/shared/graphql/queries/getUsersList.ts";
import {UsersSortSelect} from "@/features/user-sort";
import {mapSortToQuery} from "@/features/user-sort/model/mapper.ts";
import type {SortValue} from "@/features/user-sort/model/types.ts";
import {SortArrows} from "@/entities/user/ui/SortArrows.tsx";
import {Table} from "@/widgets/table/Table.tsx";
import type {Column} from "@/widgets/table/TableRow.tsx";
import {UserActionsMenu} from "@/pages/user-list/ui/UserActionsMenu.tsx";
import {MoreInformation} from "@/pages/more-information";

export type User = {
    id: string;
    profileLink: string;
    userName: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    isBlocked: boolean;
}

export const UserList = () => {
    const [sort, setSort] = useState<SortValue>("NEW")

    const toggleDateSort = () => {
        setSort(prev => (prev === "NEW" ? "OLD" : "NEW"));
    };

    const toggleProfileSort = () => {
        setSort(prev => (prev === "AZ" ? "ZA" : "AZ"));
    };

    const sortQuery = mapSortToQuery(sort)


    const { data, loading, error} = useQuery(getUsersList, {
        variables: {
            input: {
                pageNumber: 1,
                pageSize: 8,
                filterByStatus: 'ALL',
                search: "",
                sortBy: sortQuery.sortBy,
                sortDirection: sortQuery.sortDirection,
            }
        }
    });

    const rowsTableUsers: User[] = data?.getUsers.items.map((user) => ({
        id: user.id ,
        profileLink: `https://ulens.org/profile/${user.id}`,
        userName: user.userName  ?? "——",
        firstName: user.firstName ?? "——",
        lastName: user.lastName ??  "——",
        createdAt: user.createdAt,
        isBlocked:user.isBlocked,
    })) || [];

    const columnsTable: Column<User>[] = [
        {
            title: 'User ID',
            dataIndex: 'id',
            key: 'userId-column',
            render: (userId,{isBlocked}) => (
                <div style={{display: "flex", gap: "12px", flexDirection: "row",}}>
                    {isBlocked ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_45764_12513)">
                                <path
                                    d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="white"/>
                                <line x1="7.04314" y1="19.3621" x2="17.0431" y2="4.3621" stroke="white"
                                      strokeWidth="2.3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_45764_12513">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg> : <div style={{width: "24px"}}></div>}
                    <span style={{color: 'white'}}>{userId}</span>
                </div>)
        },
        {
            title: (
                <div className={s.sortHeader} onClick={() => toggleProfileSort()}>
                    Profile link
                    <SortArrows
                        active={sort === "AZ" || sort === "ZA"}
                        direction={sort === "AZ" ? "ASC" : "DESC"}
                    />
                </div>
            ),
            dataIndex: 'profileLink',
            key: 'profileLink-column',
            render: (_, { firstName, lastName, profileLink }) => (
                <a href={profileLink} target="_blank" rel="noopener noreferrer" className={s.link}>
                    {`${firstName} ${lastName}`}
                </a>
            )
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            key: 'userName-column',
            render: (_,  {userName}) => (
                <span style={{color: 'white'}}>  {userName}</span>
            )
        },
        {
            title: (
                <div className={s.sortHeader} onClick={() => toggleDateSort()}>
                    Date added
                    <SortArrows
                        active={sort === "NEW" || sort === "OLD"}
                        direction={sort === "NEW" ? "DESC" : "ASC"}
                    />
                </div>
            ),
            dataIndex: 'createdAt',
            key: 'dateAdded-column',
            render: (date, user, isOpenModal=false, setIsOpenModal) => {
                const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });

                return (
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        position: "relative"
                    }}>
                        <span style={{color: 'white'}}>
                            {formattedDate}
                        </span>
                        <button onClick={() => setIsOpenModal!(!isOpenModal)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_45764_12530)">
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
                        </button>
                        {isOpenModal&&<UserActionsMenu user={user} setIsOpenModal={setIsOpenModal!}/>}
                    </div>
                );
            }
        }
    ];

    if (loading) {
        return <div>Загрузка...</div>
    }
    if (error) {
        return <div style={{color: "red"}}>Ошибка: {error.message}</div>
    }

    return (
        <div>
            <div className={s.SearchPanel}>
                <Input placeholder={'Search'}/>
                <div className={s.selectContainer}>
                    <Select options={["Blocked", "Not Blocked", "All"]} placeholder={"Not Selected"}/>
                </div>
            </div>
            <MoreInformation dataUser={rowsTableUsers[0]!}/>{/* для теста */}
            <UsersSortSelect value={sort} onChange={setSort}/>
            <Table<User> rows={rowsTableUsers} columns={columnsTable} />
            <Pagination  elementCount={8} onPageChange={()=>{}}/>
        </div>
    );
};
