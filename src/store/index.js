import { createStore } from 'redux'
import {connect} from "react-redux"
import reducer from "../redux/reducers";

export const store = createStore(reducer)
