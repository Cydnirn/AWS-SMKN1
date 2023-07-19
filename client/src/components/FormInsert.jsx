const { useEffect, useState } = require("react");
import styled from "styled-components";
import axios from "@api/axios";

//Components
import Card from "@components/UI/Card";
import { Button } from "@components/UI/Button";
import { Form, Input } from "@components/UI/Form";
import Dropdown from "@components/Dropdown";

const FormMain = styled.div`
    display: flex;
    flex-direction: column;
`;

function FormInsert(props) {
    const { modalHandler } = props;

    const [username, setUsername] = useState("");
    const [type, setType] = useState("IPA");

    function parentType(value) {
        setType((prev) => (prev = value));
    }

    async function submitHandler(e) {
        e.preventDefault();
        console.log(username, type);
        try {
            await axios.post("/user", {
                username: username,
                type: type,
            });
            modalHandler("Action success", "User inserted successfully");
        } catch (err) {
            //const message = err?.response?.data?.error.split(" ");
            modalHandler("Action failed", err?.response?.data.error);
        }
    }

    return (
        <Card>
            <FormMain>
                <p>Insert User</p>
                <Form onSubmit={submitHandler}>
                    <Input
                        type='username'
                        placeholder='username'
                        required
                        onKeyUp={(e) => setUsername(e.target.value)}
                    />
                    <Dropdown parentType={parentType} />
                    <Button type='submit' $width='100%'>
                        Insert
                    </Button>
                </Form>
            </FormMain>
        </Card>
    );
}

export default FormInsert;
