import { useState, useEffect, Fragment } from "react";
import axios from "@api/axios";
import Card from "@components/UI/Card";

function TypeDash(props) {
    const [typeDash, setTypeDash] = useState([]);

    useEffect(() => {
        async function initType() {
            try {
                const res = await axios.get("/type/all", {});
                if (res?.data?.message?.data.message.data.length == 0) {
                    await axios.post("/", {});
                }
                setTypeDash(res?.data?.message?.data);
            } catch (err) {
                await axios.post("/", {});
            }
        }
        const time = setTimeout(initType, 1000);
        return () => clearTimeout(time);
    });
    return (
        <Card $width='15%'>
            <h2>Total Type</h2>
            {typeDash.map((type) => {
                return (
                    <div key={type._id}>
                        <p>
                            {type._id} : {type.totalMember}
                        </p>
                    </div>
                );
            })}
        </Card>
    );
}

export default TypeDash;
