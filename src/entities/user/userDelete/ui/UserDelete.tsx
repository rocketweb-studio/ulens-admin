import {useMutation} from "@apollo/client/react";
import {getUsersList} from "@/shared/graphql/queries/getUsersList.ts";
import {deleteUser} from "@/shared/graphql/mutation";
import {Button, Modal} from "@rocketweb-studio/ulens-ui-kit";


type UserDeleteProps = {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
    username: string
}

export const UserDelete = ({ isOpen, onClose, userId, username }: UserDeleteProps) => {

    const [removeUser, { loading }] = useMutation(deleteUser, {
        refetchQueries: [getUsersList],
    });

    const handleConfirm = async () => {
        try {
            await removeUser({
                variables: { input: { userId } }
            });
            onClose();
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    return (
        <Modal
            className="flex flex-col"
            isOpen={isOpen}
            onClose={onClose}
            modalTitle="Delete user"
            hideDefaultButton
        >
            <p>
                Are you sure you want to delete <strong>{username}</strong>?
            </p>

            <div className="flex justify-between mt-12">
                <Button className="w-[130px]" onClick={onClose}>
                    No
                </Button>

                <Button
                    className="w-[130px]"
                    variant="outline"
                    onClick={handleConfirm}
                    disabled={loading}
                >
                    Yes
                </Button>
            </div>
        </Modal>
    );
}
