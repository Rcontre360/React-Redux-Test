import axios from "axios";

export const getData = async ()=>{

	return new Promise((resolve,reject)=>{
		axios.get("https://poloniex.com/public?command=returnTicker"
		).then(({data})=>{
			resolve(data)
		}).catch(err=>{
			resolve({})
			console.log("ERR",err)
		});
	})

}