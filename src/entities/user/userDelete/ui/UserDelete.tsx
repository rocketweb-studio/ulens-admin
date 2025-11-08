import { useState } from "react";
import {useMutation} from "@apollo/client/react";
import {getUsersList} from "@/shared/graphql/queries/getUsersList.ts";
import {deleteUser} from "@/shared/graphql/mutation";


interface UserDeleteProps {
    userId: string;
    username: string;
}

export function UserDelete({ userId, username }: UserDeleteProps) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const [removeUser, { loading }] = useMutation(deleteUser, {
        refetchQueries: [getUsersList],
    });

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const handleConfirm = async () => {
        try {
            await removeUser({
                variables: { input: { userId } }
            });
            closeDialog();
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    return (
        <>
            <button onClick={openDialog} disabled={loading}>
                Delete
            </button>

            {isDialogOpen && (
                <div className="modal">
                    <div className="modal-header">
                        <h3>Are you sure?</h3>
                        <button onClick={closeDialog}>×</button>
                    </div>

                    <div className="modal-body">
                        <p>Are you sure you want to delete <strong>{username}</strong>?</p>
                    </div>

                    <div className="modal-footer">
                        <button onClick={closeDialog}>No</button>
                        <button onClick={handleConfirm} disabled={loading}>Yes</button>
                    </div>
                </div>
            )}
        </>
    );
}
