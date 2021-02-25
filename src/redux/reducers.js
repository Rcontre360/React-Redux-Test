import {ACTIONS} from "../constants";

export default async (state={}, action)=> {
  switch (action.type) {
    case ACTIONS.udpate:
    	console.log(action)
	    return {data:action.payload}
	default:
	    return state
  }
}