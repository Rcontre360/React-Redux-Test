import React from "react";
import TableHead from '@material-ui/core/TableHead';
import {BaseRow} from "./baseRow";

export const BaseHead = (props)=>{

	return(
        <TableHead>
        	<BaseRow {...props}/>
        </TableHead>
	);
}