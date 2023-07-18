import { useEffect, useState } from "react";
import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    min-height: 1.2rem;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid var(--blue-gray-300, #cbd5e1);
    background: var(--blue-gray-50, #f8fafc);
`;

function Dropdown(props) {
    const { parentType } = props;
    const [type, setType] = useState("IPA");
    useEffect(() => {
        return parentType(type);
    }, [type]);
    return (
        <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value='IPA'>IPA</option>
            <option value='IPS'>IPS</option>
        </Select>
    );
}

export default Dropdown;
