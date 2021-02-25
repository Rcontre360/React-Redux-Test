import {ACTIONS} from "../constants";

export default (state={cryptoCurrency:[],currencyFields:[]}, action)=> {

  switch (action.type) {
    case "UPDATE_DATA":
	    return {...action.payload}
	default:
	    return state
  }

}