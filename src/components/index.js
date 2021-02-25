import React,{useContext} from "react";
import {connect} from "react-redux"
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

import {MainContext} from "../context";
import {updateAction} from "../redux/actions";
import {BaseHead} from "./baseHead";
import {BaseRow} from "./baseRow";
import {BaseTable} from "./baseTable";
import {mapStateToProps} from "../redux/functions";
import {store} from "../store";
import {VIEW_CONTEXT} from "../constants";

export const UsingContextTable = props=>{
	const {cryptoCurrency,currencyFields,update} = useContext(MainContext);

	return (
	<React.Fragment>
		<BaseTable>
			<BaseHead data={currencyFields}/>
			<TableBody>
				{
					cryptoCurrency.map((obj,id)=>
					<BaseRow data={Object.values(obj)} key={id}/>
					)
				}
			</TableBody>
		</BaseTable>	
		<Button 
			variant="contained" 
			color="primary"
			onClick={update}
		>
			Refresh data
		</Button>
	</React.Fragment>
	);
}


const ReduxTable = props=>{
	const {updateAction,cryptoCurrency,currencyFields} = props;

	return(
	<React.Fragment>
		<BaseTable>
			<BaseHead data={currencyFields}/>
			<TableBody>
				{
					cryptoCurrency.map((obj,id)=>
					<BaseRow data={Object.values(obj)} key={id}/>
					)
				}
			</TableBody>
		</BaseTable>	
		<Button 
			variant="contained" 
			color="primary"
			onClick={()=>updateAction()}
		>
			Refresh data
		</Button>
	</React.Fragment>	
	);
}

export const UsingReduxTable = connect(
	mapStateToProps,
	{updateAction}
)(ReduxTable);
