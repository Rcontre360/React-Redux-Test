import styled,{css} from "styled-components";
import {hover,sizes} from "./variables";

export const stylesFunction = props=>{
	return css`
		${props.css}
	`;
}

export const customStyled = (element,styles=``)=>{
	return styled[element]`
		${css`${styles}`}
		${stylesFunction}
	`;
}

export const media = (size,styles,over=true)=>{
	const query = over?`max-width:${sizes[size]}`:`min-width:${sizes[size]}`
	return `@media (${query}){
		${styles}
	}`;
}

export const flexStyle = (dir="row",align="center")=>{
	let alignItems = `align-items:${align};`
	if (dir==="row" || dir==="row-reverse")
			alignItems = `align-items: center;`

	return`
	display: flex;
	flex-direction: ${dir};
	justify-content: ${align};
	${alignItems}
	`
}

export const hoverStyles = (type=false,target="",styles="")=>{
	return `
		transition:0.5s;
		&:hover${target}{
			transition:0.5s;
			${type? hover[type]:""}
			${styles}
		}
	`
}