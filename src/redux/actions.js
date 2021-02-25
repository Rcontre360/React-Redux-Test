import {ACTIONS,VIEW_CONTEXT,VIEW_REDUX} from "../constants";
import {getData} from "../utils";

export const updateAction = ()=>(dispatch=>{
	console.log(ACTIONS.update)
	getData().then(res=>{
		console.log(res)
		dispatch({
			type:ACTIONS.update,
			payload:{...res}
		})
	})
	.catch(err=>{
		console.log("ERR",err)
		dispatch({});
	});
})

