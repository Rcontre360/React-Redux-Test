import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Provider,connect } from 'react-redux';

import {getData} from "./utils";
import {store} from "./store";
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

	async refreshData(){
		const {cryptoCurrency,currencyFields} = await getData();
		this.setState({cryptoCurrency,currencyFields});
	}

	setTable(){
		const view = this.state.view;
		this.setState({
			view:view===VIEW_CONTEXT?VIEW_REDUX:VIEW_CONTEXT
		})
	}

	render(){
		const viewContext = this.state.view===VIEW_CONTEXT

		return(
		<MainContainer>
			<MainContext.Provider
				value={{
					cryptoCurrency:this.state.cryptoCurrency,
					currencyFields:this.state.currencyFields,
					update:this.refreshData.bind(this)
				}}
			>

				<Typography variant="h2" component="h2">
				  {this.state.view}
				</Typography>
				<Button 
					variant="contained" 
					color="secondary"
					onClick={this.setTable.bind(this)}
				>{`See table with ${viewContext?VIEW_REDUX:VIEW_CONTEXT}`}
				</Button>
				<hr/>
				{
					viewContext?
					<UsingContextTable />
					:
					<UsingReduxTable data={this.state.cryptoCurrency}/>
				}
			</MainContext.Provider>
		</MainContainer>
		);
	}
}

ReactDOM.render(
<Provider store={store}>
	<App/>
</Provider>,
document.getElementById("root"));