import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from '@material-ui/core/Button';
import {MainContext} from "./context";
import {MainContainer} from "./styledComponents";
import {UsingContextTable,UsingReduxTable} from "./components";
import {VIEW_CONTEXT,VIEW_REDUX} from "./constants";

class App extends React.Component{

	state = {
		cryptoCurrency:[],
		currencyFields:[],
		view:VIEW_CONTEXT,
	}

	refreshData(){
		axios.get("https://poloniex.com/public?command=returnTicker"
		).then(({data})=>{
			/*
			instead of apply slice twice to the initial big input, we store it in a variable and apply slice only once.
			*/
			const fewData = Object.keys(data).slice(0,10);
			this.setState({
				cryptoCurrency:fewData.map(name=>{
					return {name,...data[name]}
				}),
				currencyFields:["name",...Object.keys(data[fewData[0]])]
			});
		}).catch(err=>
			console.log("ERR",err)
		);
	}

	render(){
		const viewContext = this.state.view===VIEW_CONTEXT
		const btnColor = viewContext?"primary":"secondary";

		return(
		<MainContainer>
			<MainContext.Provider
				value={{
					cryptoCurrency:this.state.cryptoCurrency,
					currencyFields:this.state.currencyFields
				}}
			>
				<h1>{this.state.view}</h1>
				<UsingContextTable data={this.state.cryptoCurrency}/>
				<Button 
					variant="contained" 
					color={btnColor}
					onClick={this.refreshData.bind(this)}
				>
					Refresh data
				</Button>
			</MainContext.Provider>
		</MainContainer>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById("root"));