/** @format */

import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  message: string;
  closeModal: MouseEventHandler<HTMLButtonElement>;
};

const ModalComponent: React.FC<Props> = (props) => {
  const { show, message, closeModal } = props;

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
