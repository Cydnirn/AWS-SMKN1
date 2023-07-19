import { Fragment } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Card from "@components/UI/Card";
import { Button } from "@components/UI/Button";
import Backdrop from "@components/UI/Backdrop";

const Modal = styled.div`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }
`;

const Content = styled.div`
    padding: 1rem;
    border-radius: 0.4rem 0.4rem 0 0;

    &.head {
        color: black;
    }

    &.head h2 {
        margin: 0;
    }

    &.actions {
        display: flex;
        justify-content: space-between;
    }

    &.acknowledge {
        display: flex;
        justify-content: flex-end;
    }
`;
function ErrorModalChild(props) {
    const { title, message, errorHandler } = props;
    return (
        <Modal>
            <Card>
                <Content className='head'>
                    <h2>{title}</h2>
                </Content>
                <Content>
                    <p>{message}</p>
                </Content>
                <Content className='acknowledge'>
                    <Button onClick={errorHandler}>Okay</Button>
                </Content>
            </Card>
        </Modal>
    );
}

function ErrorModal(props) {
    const { title, message, errorHandler } = props;
    return (
        <Fragment>
            {createPortal(
                <Backdrop />,
                document.getElementById("backdrop-root")
            )}
            {createPortal(
                <ErrorModalChild
                    title={title}
                    message={message}
                    errorHandler={errorHandler}
                />,
                document.getElementById("modal-root")
            )}
        </Fragment>
    );
}

function ConfirmModalChild(props) {
    const { title, message, confirmHandler } = props;
    return (
        <Modal>
            <Card>
                <Content className='head'>
                    <h2>{title}</h2>
                </Content>
                <Content>
                    <p>{message}</p>
                </Content>
                <Content className='actions'>
                    <Button $secondary onClick={confirmHandler}>
                        Ok
                    </Button>
                </Content>
            </Card>
        </Modal>
    );
}

function ConfirmModal(props) {
    const { title, message, confirmHandler } = props;
    return (
        <Fragment>
            {createPortal(
                <Backdrop />,
                document.getElementById("backdrop-root")
            )}
            {createPortal(
                <ConfirmModalChild
                    title={title}
                    message={message}
                    confirmHandler={confirmHandler}
                />,
                document.getElementById("modal-root")
            )}
        </Fragment>
    );
}

export { ErrorModal, ConfirmModal };
