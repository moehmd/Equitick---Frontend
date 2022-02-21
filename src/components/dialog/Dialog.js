import React, { useState } from 'react'
import { 
  Modal, 
  Button, 
  Form,
  Container,
  Alert } from '../middlewares/react-bootstrap.js'
import { addReq, searchReq } from '../middlewares/middlewares'
import { useDispatch } from 'react-redux';
import { body } from "../middlewares/reducer.js"

 const Dialog = (props) => {
  const dispatch = useDispatch();
  let addTrade = () => {
    if (login) {
      addReq.login = parseInt(login);
      searchReq.login = parseInt(login);
    };
    if (entry) {
      addReq.entry = parseInt(entry);
    };
    if (action) {
      addReq.action = parseInt(action);
    };
    if (symbol) {
      addReq.symbol = symbol;
    };
    if (price) {
      addReq.price = parseInt(price);
    };
    if (profit) {
      addReq.profit = parseInt(profit);
    };
    if (volume) {
      addReq.volume = parseInt(volume);
    };
    addReq.time = new Date().toLocaleString().replace(',','');
    if(addReq.login) {
      fetch('https://localhost:5001/api/Trade/AddTrade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addReq),
      })
      .then(response => {
        if (response) {
          dispatch(body())
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  };

  const [login, setLogin] = useState('');
  const [entry, setEntry] = useState('');
  const [action, setAction] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [profit, setProfit] = useState('');
  const [volume, setVolume] = useState('');

  const loginChangeHandler = (event) => {
    setLogin(event.target.value);
  };

  const entryChangeHandler = (event) => {
    setEntry(event.target.value);
  };

  const actionChangeHandler = (event) => {
    setAction(event.target.value);
  };

  const symbolChangeHandler = (event) => {
    setSymbol(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  
  const profitChangeHandler = (event) => {
    setProfit(event.target.value);
  };
  
  const volumeChangeHandler = (event) => {
    setVolume(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
      setLogin('');
      setEntry('');
      setAction('');
      setSymbol('');
      setPrice('');
      setProfit('');
      setVolume('');

    return addTrade();

  };

  return(
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton> </Modal.Header>
      <Modal.Body>
        <Alert variant='primary'>
          <Container>
            <Form onSubmit={submitHandler}>
              <Form.Group  controlId="addReq.login">
                <Form.Control type="number" value={login} onChange={loginChangeHandler}placeholder="set login" required/>
              </Form.Group>
              <Form.Group controlId="addReq.entry">
                  <Form.Control type="number" value={entry} onChange={entryChangeHandler} placeholder="set entry"/>
              </Form.Group>
              <Form.Group  controlId="addReq.action">
                  <Form.Control type="number" value={action} onChange={actionChangeHandler} placeholder="set action"/>
              </Form.Group>
              <Form.Group  controlId="addReq.symbol">
                  <Form.Control type="text" value={symbol} onChange={symbolChangeHandler} placeholder="set symbol"/>
              </Form.Group>
              <Form.Group  controlId="addReq.price">
                  <Form.Control type="number" value={price} onChange={priceChangeHandler} placeholder="set price"/>
              </Form.Group>
              <Form.Group  controlId="addReq.profit">
                  <Form.Control type="number" value={profit} onChange={profitChangeHandler} placeholder="set profit"/>
              </Form.Group>
              <Form.Group  controlId="addReq.volume">
                  <Form.Control type="number" value={volume} onChange={volumeChangeHandler} placeholder="set volume"/>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                <Button type='submit' onClick={props.onHide}>Add</Button>
              </Modal.Footer>
            </Form>
          </Container>
        </Alert>
      </Modal.Body>
    </Modal>
  );
}
export default Dialog;