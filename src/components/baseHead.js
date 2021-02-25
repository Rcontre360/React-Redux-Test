import React from "react";
import TableHead from '@material-ui/core/TableHead';
import {BaseRow} from "./baseRow";

/*Basic head (head of table) that receives the same props as a BaseRow component*/

export const BaseHead = (props)=>{

	return(
        <TableHead>
        	<BaseRow {...props}/>
        </TableHead>
	);
}