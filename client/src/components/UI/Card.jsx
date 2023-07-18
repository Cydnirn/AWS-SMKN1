import styled from "styled-components";

const Card = styled.div`
    border-radius: ${(props) => (props.$borderRad ? props.$borderRad : "15px")};
    display: flex;
    flex-direction: ${(props) => (props.$isRow ? "row" : "column")};
    color: #1b1b1b;
    background-color: ${(props) =>
        props.$bgcolor ? props.$bgcolor : "#FAFAFA"};
    box-shadow: ${(props) => (props.$boxShadow ? props.$boxShadow : "0px 15px 25px 1px rgba(0, 0, 0, 0.15);")};
    padding: ${(props) => (props.$padding ? props.$padding : "1rem")};
`;

export default Card;