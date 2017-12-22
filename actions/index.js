export const BOOK_LIST = 'BOOK_LIST'
export const ADD_BOOK = 'ADD_BOOK'

import axios from 'axios';

export const getAllBooks = () => {
    const request = axios.get("http://10.0.28.180:3002/api/getBookList");
    return {
        type: BOOK_LIST,
        payload: request
    }
}
export const addnewbook = (books) => {
    const request = axios.post("http://10.0.28.180:3002/api/getBookList",books);
    return {
        type: ADD_BOOK,
        payload: request
    }
}