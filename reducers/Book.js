import { BOOK_LIST } from '../actions/index'
const Book = (state = [], action) => {
    switch (action.type) {
        case BOOK_LIST:
           return action.payload;

        default:
            return state
    }
}

export default Book;