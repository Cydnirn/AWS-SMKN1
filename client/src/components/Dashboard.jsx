import { useState, useEffect, Fragment } from "react";
import axios from "@api/axios";
import Card from "@components/UI/Card";
import FormInsert from "@components/FormInsert";

function Dashboard(props) {
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
            <FormInsert />
        </Fragment>
    );
}

export default Dashboard;