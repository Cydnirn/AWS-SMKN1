import { Fragment, useState } from "react";
import "./app.css";
import styled from "styled-components";
import Dashboard from "@components/Dashboard";
import TypeDash from "@components/TypeDash";
import UserList from "@components/UserList";
import { ErrorModal } from "@components/UI/Modal";

const DashRows = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

function App() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState({});

    function modalHandler(status, message) {
        setShowModal(true);
        setModalMessage({ status: status, message: message });
    }

    function modalButtonHandler() {
        setShowModal(false);
        setModalMessage("");
    }

    return (
        <Fragment>
            <div className='App'>
                <DashRows>
                    {showModal && (
                        <ErrorModal
                            title={modalMessage.status}
                            message={modalMessage.message}
                            errorHandler={modalButtonHandler}
                        />
                    )}
                    <TypeDash />
                    <Dashboard modalHandler={modalHandler} />
                </DashRows>

                <UserList modalHandler={modalHandler}/>
            </div>
        </Fragment>
    );
}
export default App;
