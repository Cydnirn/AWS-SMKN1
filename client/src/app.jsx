import "./app.css";
import Dashboard from "@components/Dashboard";
import TypeDash from "@components/TypeDash";
import styled from "styled-components";

const DashRows = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

function App() {
    return (
        <DashRows className='App'>
            <TypeDash />
            <Dashboard />
            <Dashboard />
        </DashRows>
    );
}
export default App;
