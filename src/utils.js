import axios from "axios";

export const getData = async ()=>{

	return new Promise((resolve,reject)=>{
		axios.get("https://poloniex.com/public?command=returnTicker"
		).then(({data})=>{
			const fewData = Object.keys(data).slice(0,10);
			resolve({
				cryptoCurrency:fewData.map(name=>({name,...data[name]})),
				currencyFields:["name",...Object.keys(data[fewData[0]])]
			})
		}).catch(err=>{
			resolve({})
			console.log("ERR",err)
		});
	})

}