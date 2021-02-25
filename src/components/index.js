import React,{useContext} from "react";
import TableBody from '@material-ui/core/TableBody';

import {MainContext} from "../context";
import {BaseHead} from "./baseHead";
import {BaseRow} from "./baseRow";
import {BaseTable} from "./baseTable";

export const UsingContextTable = props=>{
	const {cryptoCurrency,currencyNames} = useContext(MainContext);

	return (
		<BaseTable>
			<BaseHead data={currencyNames}/>
			<TableBody>
				<BaseRow data={cryptoCurrency}/>
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