import styled from "styled-components";

const Button = styled.button`
    background-color: #fafafa;
    width: ${(props) => (props.$width ? props.$width : "")};
    color: #1b1b1b;
    border-radius: 9px;
    border: 1px solid #2e2e2e;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    transition: 0.5s ease-in-out;

    &:disabled {
        border: 1px solid #858585;
        color: #858585;
    }
    
    &:hover {
        background-color: #2e2e2e;
        color: #fafafa;
        transition: 0.5s ease-in-out;
    }
`;

export { Button };
