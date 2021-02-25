import {css,keyframes} from "styled-components";

export const sizes = {
	tiny:"300px",
	small:"450px",
	medium:"600px",
	normal:"750px",
	large:"900px",
	huge:"1100px"
}

export const colors = {
	primary:"#2B2E4A",
	secondary:"#E84545",
	auxiliar:"#903749",
	clear:"#53354A",
	text:"#FF8965"
}

export const hover = {
	scale:css`transform:scale(1.2); color:white;`,
	colors:css`transition:0.5s; color:white;`,
	rotate3d:css`transform:rotate3d(0, 1, 0, 360deg);;`,
	appear:css`opacity:1;`
}


export const fadeAnimation = keyframes`
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
`

export const moveAnimation = keyframes`
	from {
		transform:translateX(100%);
	}
	to {
		transform:translateX(0);
	}
`

export const rotateAnimation = keyframes(`
	from {
		transform: rotate(260deg);
	}
	to {
		transform: rotate(0deg);
	}
`);

export const moveRotateAnimation = keyframes`
	from {
		transform:translateX(100%) rotate(260deg);
	}
	to {
		transform:translateX(0) rotate(0deg);
	}
`

export const rotateOutAnimation = keyframes`
	from {
		backface-visibility:hidden;
		transform: rotate3d(1, 0, 0, 180deg);
	}
	to {
		backface-visibility:hidden;
		transform: rotate3d(1, 0, 0, 0deg);
	}
`;

export const scaleAnimation = keyframes`
	from {
		transform:scaleX(0);
		transform-origin:left;
	}
	to {
		translate:scale(1);
		transform-origin:left;
	}
`;
