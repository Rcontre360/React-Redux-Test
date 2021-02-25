import React from "react";

/*maxParticles:350,
sizeVariations:5,
speed:5,
minDistance:100*/

export const shortenRouterPath = (str)=>{
	let res="";
	str.split("/").forEach((el,i)=>{
		if (i<str.split("/").length-1)
			res = `${res+str.split("/")[i]}/`;
	})
	return res;
}

export const isElementVisible = (element,visibility=0)=>{
	if (!element || !element.getBoundingClientRect)
		return true;
	const rect = element.getBoundingClientRect();
	
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < visibility || rect.top - viewportHeight >= -visibility);
}

export const useWindowResize = (size)=>{
	const [isBigger,setIsBigger] = React.useState(window.innerWidth>size)

	React.useEffect(()=>{

		const handleRenderedItem = ()=>{
			if (window.innerWidth>size && !isBigger)
				setIsBigger(true);
			else if (window.innerWidth<=size && isBigger)
				setIsBigger(false);
		}
		window.addEventListener("resize", handleRenderedItem)

		return()=>{
			window.removeEventListener("resize",handleRenderedItem);
		}
	},[isBigger]);

	return isBigger;
}

export const setRelativeUrl = str=>{
	const alreadyHasPath = "/"+str.split("/")[1]===process.env.REACT_APP_BASE_PATH;
	return alreadyHasPath? str: process.env.REACT_APP_BASE_PATH + str;
}
