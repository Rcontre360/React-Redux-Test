import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import {MainContext} from "./context";
import {MainContainer} from "./styledComponents";
import {UsingContextTable,UsingReduxTable} from "./components";
import {VIEW_CONTEXT,VIEW_REDUX} from "./constants";

class App extends React.Component{

	state = {
		cryptoCurrency:[],
		view:VIEW_CONTEXT
	}

	render(){
		const viewContext = this.state.view===VIEW_CONTEXT
		const btnColor = viewContext?"primary":"secondary";

		return(
		<MainContainer>
			<MainContext.Provider
				value={{
					cryptoCurrency:this.state.cryptoCurrency,
				}}
			>
				<h1>{this.state.view}</h1>
				<UsingContextTable data={this.state.cryptoCurrency}/>
				<Button 
					variant="contained" 
					color={btnColor}
				>
					Refresh data
				</Button>
			</MainContext.Provider>
		</MainContainer>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById("root"));