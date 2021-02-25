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
/*
export const TestTable = props=>{
	const {data} = prop;
	const [cryptoCurrency,setCryptoCurrency] = useState([]);
	const classes = useStyles();

	useEffect(()=>{
		
		axios.get("https://poloniex.com/public?command=returnTicker"
		).then(({data})=>{
			setCryptoCurrency(createArrObj(data))
		}).catch(err=>
			console.log("ERR",err)
		);

	},[]);

	return(
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Base Volume</TableCell>
            <TableCell align="right">high 24hr</TableCell>
            <TableCell align="right">highest Bid</TableCell>
            <TableCell align="right">isFrozen</TableCell>
            <TableCell align="right">last</TableCell>
            <TableCell align="right">low 24hr</TableCell>
            <TableCell align="right">lowest Ask</TableCell>
            <TableCell align="right">percent Change</TableCell>
            <TableCell align="right">quote Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoCurrency.map((cryptoCurrency,id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {cryptoCurrency.baseVolume}
              </TableCell>
              <TableCell align="right">{cryptoCurrency.high24hr}</TableCell>
              <TableCell align="right">{cryptoCurrency.highestBid}</TableCell>
              <TableCell align="right">{cryptoCurrency.id}</TableCell>
              <TableCell align="right">{cryptoCurrency.isFrozen}</TableCell>
              <TableCell align="right">{cryptoCurrency.last}</TableCell>
              <TableCell align="right">{cryptoCurrency.low24hr}</TableCell>
              <TableCell align="right">{cryptoCurrency.lowestAsk}</TableCell>
              <TableCell align="right">{cryptoCurrency.percentChange}</TableCell>
              <TableCell align="right">{cryptoCurrency.quoteVolume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	);
}*/