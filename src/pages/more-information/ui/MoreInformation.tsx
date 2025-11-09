import type {User} from "@/pages/user-list";
import {Button} from "@rocketweb-studio/ulens-ui-kit";
import {useNavigate} from "react-router";

type Props = {
    dataUser: User;
    // posts or images
}


export const MoreInformation = (user:Props) => {
const navigate = useNavigate();
    return (
        <div>
            <Button variant={'text-white'} onClick={()=>navigate(-1)}>Back to Users List</Button>
            <div>
                {/*<img src="" alt="avatar"/>*/}
                { user.dataUser.firstName } {user.dataUser.lastName}
                {user.dataUser.userName}{user.dataUser.profileLink}
                {user.dataUser.id}
                {user.dataUser.createdAt}
            </div>
            <div>images</div>
        </div>
    );
};

