import React,{useContext} from "react";
import TableBody from '@material-ui/core/TableBody';

import {MainContext} from "../context";
import {BaseHead} from "./baseHead";
import {BaseRow} from "./baseRow";
import {BaseTable} from "./baseTable";

export const UsingContextTable = props=>{
	const {cryptoCurrency,currencyFields} = useContext(MainContext);
	console.log(cryptoCurrency,currencyFields)

	return (
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
	);
}

export const UsingReduxTable = props=>{

	return(
		<BaseTable>
			<BaseHead data={data}/>
			<TableBody>
				<BaseRow/>
			</TableBody>
		</BaseTable>
	);
}