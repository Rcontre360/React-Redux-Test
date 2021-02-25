import { createStore, applyMiddleware } from 'redux'
import {connect} from "react-redux"
import thunkMiddleware from "redux-thunk"
import reducer from "../redux/reducers";

export const store = createStore(reducer,applyMiddleware(thunkMiddleware))
