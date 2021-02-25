import {ACTIONS,VIEW_CONTEXT,VIEW_REDUX} from "../constants";

export const updateAction = ()=>({
	type:ACTIONS.update,
	payload:true
})

export const contextTableAction = ()=>({
	type:ACTIONS.changeTable,
	payload:{
		value:VIEW_CONTEXT
	}
})

export const reduxTableAction = ()=>({
	type:ACTIONS.changeTable,
	payload:{
		value:VIEW_REDUX
	}
})

