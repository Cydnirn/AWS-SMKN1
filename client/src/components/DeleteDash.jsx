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
    const [username, setUsername] = useState("");
    const [type, setType] = useState("IPA");
    const [isError, setIsError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    function parentType(value) {
        setType((prev) => (prev = value));
    }

    async function submitHandler(e) {
        e.preventDefault();
        console.log(username, type);
        try {
            await axios.delete("/user", {
                username: username,
            });
            setIsValid(true);
        } catch (err) {
            console.log(err);
            setIsError(true);
        }
    }
    useEffect(() => {
        console.log(isError);
    }, [isError]);

    return (
        <Card>
            <FormMain>
                {isError && <p>What the hell?</p>}
                <p>Insert User</p>
                <Form onSubmit={submitHandler}>
                    <Input
                        type='username'
                        placeholder='username'
                        required
                        onKeyUp={(e) => setUsername(e.target.value)}
                    />
                    <Button type='submit' $width='100%'>
                        Insert
                    </Button>
                </Form>
            </FormMain>
        </Card>
    );
}

export default FormInsert;
