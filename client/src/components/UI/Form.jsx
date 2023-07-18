import styled from "styled-components";

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    align-items: center;
`;

const Input = styled.input`
    width: 95%;
    min-height: 1.2rem;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid var(--blue-gray-300, #CBD5E1);
    background: var(--blue-gray-50, #F8FAFC); 
`

export { Form, Input };
