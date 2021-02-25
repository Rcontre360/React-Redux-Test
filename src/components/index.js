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
import {VIEW_CONTEXT} from "../constants";

export const FinalTable = props=>{
	const {children,Button,view} = props;
	
	return(
	<React.Fragment>
		<BaseTable>
		{
			view===VIEW_CONTEXT?
			UsingContextTable,
			UsingReduxTable
		}
		</BaseTable>	
		<Button/>
	</React.Fragment>
	);
}

const UsingContextTable = props=>{
	const {Button,update} = props;
	const {cryptoCurrency,currencyFields} = useContext(MainContext);

	return (
	<React.Fragment>
		<BaseHead data={currencyFields}/>
		<TableBody>
			<FinalTable>
			{
				cryptoCurrency.map((obj,id)=>
				<BaseRow data={Object.values(obj)} key={id}/>
				)
			}
			</FinalTable>
		</TableBody>
	</React.Fragment>
	);
}

const ReduxTable = props=>{

	return(
	<React.Fragment>
		<BaseTable>
			<BaseHead data={data}/>
			<TableBody>
				<BaseRow/>
			</TableBody>
		</BaseTable>
	</React.Fragment>	
	);
}

const UsingReduxTable = connect(
	mapStateToProps,
	{updateAction}
)(ReduxTable);
