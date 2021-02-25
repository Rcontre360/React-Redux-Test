import React from "react";
import TableHead from '@material-ui/core/TableHead';
import {BaseRow} from "./baseRow";

export const BaseHead = ({data})=>{
	return(
        <TableHead>
        	<BaseRow data={data}/>
        </TableHead>
	);
}