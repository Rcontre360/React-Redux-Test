import {ACTIONS} from "../constants";

export default (state={}, action)=> {
  switch (action.type) {
    case ACTIONS.udpate:
      return action.payload
    case ACTIONS.changeTable:
      return { ...state, view: action.value }
    default:
      return state
  }
}