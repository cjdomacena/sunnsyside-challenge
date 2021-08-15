import styled from 'styled-components'

export const Container = styled.div`
height: auto;
max-width: 1440px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
justify-content: center;
align-items: center;
margin: 0 auto;
grid-template-areas: "text image";
${props => (props.order === "r2l") && `
		grid-template-areas: "image text";
	`}
@media screen and (max-width: 1000px)
{
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto;
	grid-template-areas: 
	"image"
	"text";
	align-items: center;
}
`

export const TextSection  = styled.div`
grid-area:text;
display: grid;
place-items: center;
@media screen and (max-width: 1000px)
{
	padding: 1rem;
}
.text-content
{
	max-width:450px;
	padding: 1rem;
	h2 
	{
		font-size: 3rem;
		font-family: ${$props => $props.theme.font.fraunces};
		color: ${$props => $props.theme.neutral_colors.very_dark_desaturated_blue};
	}
	@media screen and (max-width: 1000px)
	{
		text-align: center;
	}
}
`

export const ImageSection  = styled.div`
grid-area:image;
display: grid;
place-items: center;
img 
{
	width: 100%;
	height: auto;
}
`

export const Button = styled.div`
padding-top: 2rem;

font-family: ${$props => $props.theme.font.fraunces};
text-transform: uppercase;
position: relative;
cursor: pointer;
&:hover 
{
	hr
	{
		transition: .1s ease-in-out;
		opacity: 1;
	}
}
a 
{
	font-size: 1rem;
	color: ${$props => $props.theme.neutral_colors.very_dark_desaturated_blue};
	text-decoration: none;
}
hr 
{
	z-index: -1;
	width: 140px;
	height:10px;
	background-color: ${($props => $props.color)};
	opacity: .3;
	border: none;
	padding: 0;
	position: absolute;
	bottom: -10px;
	left: -6px;
	border-radius: 10px;


	@media screen and (max-width: 1000px)
	{
		left: 0;
		right: 0;
	}

}
`