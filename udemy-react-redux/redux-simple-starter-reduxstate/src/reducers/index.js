import { combineReducers } from "redux";
import ActiveBook from "./reducer_active_book";
import booksReducer from "./reducer_books";

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
