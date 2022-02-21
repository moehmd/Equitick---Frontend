import React, { useEffect, useState } from 'react';
import DialogTrigger from '../dialog/DialogTrigger';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Container, Row, Col, Pagination } from '../middlewares/react-bootstrap.js'
import { body } from "../middlewares/reducer.js"
import { selectPage } from '../middlewares/middlewares.js';
import "./trades.css"

let tradesCount = [];
let totalCount = 0;

const Trades = () => {
  const dispatch = useDispatch();

  let setPagination = (res) => {
      let active = res.pageNumber;
      let tradesNumber = [];
      for (let number = 1; number <= res.totalPages; number++) {
          tradesNumber.push(
            <Pagination.Item key={number} active={number === active} 
              onClick={(p) => { 
                selectPage(p.target.text);
                dispatch(body());
              }}>
              {number}
            </Pagination.Item>,
        );
      };
      return tradesNumber;
  };

  const reqBody = useSelector(state => state.reqBody.allTrades);
  const [success, setSuccess] = useState(false);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/Trade/Trades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    .then(response => response.json())
    .then(response => {
      totalCount = response.totalTrades;
      tradesCount = setPagination(response);
      setTrades(response.trades);
      setSuccess(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [reqBody]);
    
  return (
    <>
    <Row>
      <div className="d-flex justify-content-between m-2">
        <p>total count of trades found: {totalCount}</p>
        <DialogTrigger />
      </div>
    </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Deal</th>
            <th>Login</th>
            <th>Entry</th>
            <th>Action</th>
            <th>Time</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Profit</th>
            <th>Volume</th>
          </tr>
        </thead>
        {success ? (trades.map((trade) => {
          return <tbody key={`${trade.deal}`}>
            <tr>
                <td>{`${trade.deal}`}</td>
                <td>{`${trade.login}`}</td>
                <td>{`${trade.entry}`}</td>
                <td>{`${trade.action}`}</td>
                <td>{`${trade.time}`}</td>
                <td>{`${trade.symbol}`}</td>
                <td>{`${trade.price}`}</td>
                <td>{`${trade.profit}`}</td>
                <td>{`${trade.volume}`}</td>
            </tr>
          </tbody>
        })
        ) : (
          <tbody>
            <tr>
              <td>loading trades ...</td>
            </tr>
          </tbody>
        )}
        </Table>
        <Container>
          <Row className="justify-content-center">
            <Col md="auto">
              <Pagination>
                {tradesCount}
              </Pagination>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Trades