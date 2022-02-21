import React, { useState } from 'react';
import Dialog from "./Dialog";
import { Button } from '../middlewares/react-bootstrap.js'

const DialogTrigger = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Add new trade
        </Button>
  
        <Dialog
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default DialogTrigger