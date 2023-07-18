import { useState, useEffect, Fragment } from "react";
import axios from "@api/axios";
import Card from "@components/UI/Card";
import FormInsert from "@components/FormInsert";

function TypeDash(props) {
    const [typeDash, setTypeDash] = useState([]);

    useEffect(() => {
        async function initType() {
            try {
                const res = await axios.get("/type/all", {});
                setTypeDash(res?.data?.message?.data);
            } catch (err) {
                await axios.post("/", {});
            }
        }
        const time = setTimeout(initType, 2500);
        return () => clearTimeout(time);
    });
    return (
        <Card>
            {typeDash.map((type) => {
                return (
                    <div key={type._id}>
                        <p>{type._id}</p>
                        <p>{type.totalMember}</p>
                    </div>
                );
            })}
        </Card>
    );
}

export default TypeDash;
