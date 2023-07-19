import { useState, useEffect } from "react";
import axios from "@api/axios";
import styled from "styled-components";
import Card from "@components/UI/Card";
import { Button } from "@components/UI/Button";

const UserParent = styled.div`
    min-width: 80vh;
    overflow: auto;
    max-height: 40vh;
    gap: 3rem;
`;

const UserChild = styled.div`
    display: flex;
    flex-direction: rows;
    gap: 1rem;
    justify-content: space-between;
`;

const UserDetail = styled.div`
    display: flex;
    flex-direction: rows;
    gap: 1rem;
    place-content: space-evenly;
`;

function UserList(props) {
    const { modalHandler } = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const res = await axios.get("/user");
                setUsers((prev) => (prev = res?.data?.message?.data));
            } catch (err) {
                console.log(err?.response?.data);
            }
        }
        const time = setTimeout(getUsers, 2000);
        return () => clearTimeout(time);
    });

    async function deleteHandler(id) {
        try {
            console.log(id);
            await axios.delete("/user", {
                data: { id },
            });
            modalHandler("Action success", "User deleted!");
        } catch (err) {
            modalHandler("Action failed", err?.response?.data.error);
        }
    }

    return (
        <Card>
            <UserParent>
                {users.map((user) => {
                    return (
                        <UserChild key={user._id}>
                            <UserDetail>
                                <p>{user.userName}</p>
                                <p>{user.type}</p>
                            </UserDetail>
                            <Button
                                $isDelete
                                onClick={() => deleteHandler(user._id)}
                            >
                                Delete
                            </Button>
                        </UserChild>
                    );
                })}
            </UserParent>
        </Card>
    );
}

export default UserList;
