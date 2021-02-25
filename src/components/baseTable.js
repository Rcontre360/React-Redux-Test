import React,{useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


const classes = makeStyles({
  table: {
    minWidth: 650,
    maxWidth:100
  },
});
/*
typography
button
context
Redux

1 - Styles
2 - Button update
3 - Comp context anidados.
4 - Title "data context" "data redux"
		   "name"."last" "name"."last"
*/
/*Basic and normal table without any features*/

export const BaseTable = props=>{
	const {children,data} = props;
	return(
	<TableContainer component={Paper}>
		<Table 
			className={classes.table} 
			size="small" 
			aria-label="a dense table"
		>
			{children}
		</Table>
	</TableContainer>
	);
}