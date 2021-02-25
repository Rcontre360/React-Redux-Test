import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/*Basic row with "data" as an array of values (strings)*/

export const BaseRow = props=>{
	const {data,cellProps} = props;

	return(
	<TableRow>
	{
		data && data.length>0 
		&& 
		data.map((element,id)=>
			<TableCell 
				key={id}
				{...cellProps} 
			>
				{element}
			</TableCell>
		)
	}
	</TableRow>
	);
}