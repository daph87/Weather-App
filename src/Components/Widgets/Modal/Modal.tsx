import React, { MouseEventHandler, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
    show: boolean;
    handleClose:MouseEventHandler<HTMLButtonElement>;
    message: string
  };
  
const ModalComponent : React.FC<Props> = (props) => {
    const {show,handleClose, message} = props

    return(
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Ok
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    )

}

export default ModalComponent