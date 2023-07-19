import { useState, useEffect, Fragment } from "react";
import axios from "@api/axios";
import styled from "styled-components";
import FormInsert from "@components/FormInsert";

const DivCenter = styled.div`
    margin: 0 auto;
`;

function Dashboard(props) {
    const { modalHandler } = props;

    useEffect(() => {
        async function initType() {
            const res = await axios.get("/type/all", {});
            console.log(res);
            if (res?.data?.status === "failed") {
                await axios.post("/", {});
            }
        }
        initType();
    }, []);
    return (
        <Fragment>
            <DivCenter>
                <FormInsert modalHandler={modalHandler} />
            </DivCenter>
        </Fragment>
    );
}

export default Dashboard;
