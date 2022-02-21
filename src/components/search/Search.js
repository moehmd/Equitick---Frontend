import React from 'react'
import './search.css'
import {
    InputGroup, 
    FormControl, 
    Button, 
    Form, 
    Row
} from '../middlewares/react-bootstrap.js';
import { dealInput, loginInput, searchReq } from '../middlewares/middlewares.js'
import { useDispatch } from 'react-redux';
import { body } from "../middlewares/reducer.js"

const Search = () => {

  const dispatch = useDispatch();
    let filter = () => {
      if(dealInput.current.value) {
        searchReq.deal = parseInt(dealInput.current.value);
      } else {
        searchReq.deal = 0;
      };
      if(loginInput.current.value) {
        searchReq.login = parseInt(loginInput.current.value);
      } else {
        searchReq.login = 0;
      };
      searchReq.pageIndex = 1;
        console.log(searchReq);
    };

  return (
    <div className="m-1">
      <Row>
        <InputGroup>
            <Form className='d-flex search-field'>
                <FormControl className="m-2" placeholder="Search by Deal" ref={dealInput} 
                aria-label="Search by Deal" 
                aria-describedby="search-field"
                type="text" 
                name="Deal" 
                />
                <FormControl className="m-2" placeholder="Search by Login" ref={loginInput} 
                aria-label="Search by Login" 
                aria-describedby="search-field"
                type="text" 
                name="Login" 
                />
                <Button className="m-2" variant="primary" id="search-field" 
                onClick={() => { 
                  filter();
                  dispatch(body());
                }}> 
                Filter </Button>
            </Form>
      </InputGroup>
      </Row>
    </div>
  )
}

export default Search