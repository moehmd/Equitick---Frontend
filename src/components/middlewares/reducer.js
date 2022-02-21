import { createSlice } from '@reduxjs/toolkit';
import { callFilter } from './middlewares.js';

let allTrades = { 
  deal: 0, 
  login: 0, 
  pageIndex: 1,
  pageSize: 25
};

let afterFiltered =  callFilter();

export const reqBody = createSlice({
  name: 'requestBody',
  initialState: {
    allTrades
  },
  reducers: { 
    body: state => {state.allTrades = {...afterFiltered}}
  }
})

export const { body } = reqBody.actions

export default reqBody.reducer;
