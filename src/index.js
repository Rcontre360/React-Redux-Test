import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Provider,connect } from 'react-redux';

import {getData} from "./utils";
import {store} from "./store";
import {MainContext} from "./context";
import {MainContainer} from "./styledComponents";
import {FinalTable} from "./components";
import {VIEW_CONTEXT,VIEW_REDUX} from "./constants";

class App extends React.Component{

	state = {
		cryptoCurrency:[],
		currencyFields:[],
		view:VIEW_CONTEXT,
	}

	async refreshData(){
		const data = await getData();
		const fewData = Object.keys(data).slice(0,10);
			
		this.setState({
			cryptoCurrency:fewData.map(name=>({name,...data[name]})),
			currencyFields:["name",...Object.keys(data[fewData[0]])]
		});
	}

	render(){
		const viewContext = this.state.view===VIEW_CONTEXT
		const btnColor = viewContext?"primary":"secondary";
		const CustomBtn = ()=>
			<Button 
				variant="contained" 
				color={btnColor} 
				onClick={this.refreshData.bind(this)}
			>
			Refresh data
			</Button>

		return(
		<MainContainer>
			<MainContext.Provider
				value={{
					cryptoCurrency:this.state.cryptoCurrency,
					currencyFields:this.state.currencyFields,
				}}
			>
			<Provider store={store}>

				<h1>{this.state.view}</h1>
				<FinalTable 
					view={this.state.view} 
					Button={CustomBtn}
				/>

			</Provider>
			</MainContext.Provider>
		</MainContainer>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById("root"));