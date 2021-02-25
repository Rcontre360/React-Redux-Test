import {ACTIONS,VIEW_CONTEXT,VIEW_REDUX} from "../constants";
import {getData} from "../utils";

export const updateAction = ()=>async dispatch=>{
	const payload = await getData();

	dispatch({
		type:ACTIONS.update,
		payload
	})
}

