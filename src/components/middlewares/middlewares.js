import { createRef } from 'react';

let dealInput = createRef();
let loginInput = createRef();
let searchReq = { 
    "login": 0,
    "deal": 0, 
    "pageIndex": 1,
    "pageSize": 25
};

let callFilter = () => { return searchReq };
let selectPage = (page) => { searchReq.pageIndex = Number(page) };

let addReq = { 
    "login": 0,
    "entry": 0,
    "action": 0,
    "time": 0,
    "symbol": "",
    "price": 0,
    "profit": 0,
    "volume": 0
};

let callNewTrade = () => { return addReq };

export {
    dealInput,
    loginInput,
    searchReq,
    addReq,
    callFilter,
    selectPage,
    callNewTrade
};