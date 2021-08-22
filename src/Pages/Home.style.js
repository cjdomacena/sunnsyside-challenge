import styled from 'styled-components'
import HeroImageDesktop from './../Assets/Images/Desktop/image-header.jpg';
import HeroImageMobile from './../Assets/Images/Mobile/image-header.jpg';
export const HeroContainer = styled.div`
width: auto;
height: 100vh;
background-image: url(${HeroImageDesktop});
background-size: cover;
background-position: center;
margin: 0 auto;
display: grid;
place-items: center;

@media screen and (max-width: 800px)
{
	background-image: url(${HeroImageMobile});
background-repeat: no-repeat;
}

.hero-content
{
	width:auto;
	margin: 0 auto;
	padding: 1rem;
	h1
	{
		width: fit-content;
		font-size: 4.5rem;
		font-family: ${$props => $props.theme.font.fraunces};
		color: ${$props => $props.theme.neutral_colors.white};
		letter-spacing: 8px;
		text-align: center;
		width: fit-content;
		@media screen and (max-width: 800px)
		{
			font-size:3rem;

		}
		margin: 0;
		padding: 0;
	}
.hero-arrow-down 
{
	padding-top: 4rem;
	width: fit-content;
	margin: 0 auto;
}
}

`

export const SectionContainer = styled.div`
height: auto;
max-width: 1440px;
margin: 0 auto;
`
export const SidebySide = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
margin: 0 auto;

@media screen and (max-width: 800px)
{
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
}
`

export const TestimonialContainer = styled.div`
height: auto;
max-width: 1440px;
margin: 0 auto;
text-align: center;
padding: 10rem 0;
h3 
{
	padding-bottom: 2rem;
	font-family: ${$props => $props.theme.font.fraunces};
	color: ${$props => $props.theme.neutral_colors.dark_grayish_blue};
	letter-spacing: 2.5px;
}
.testimony-container
{
	width: 85%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	place-items: center;
	margin: 0 auto;
	grid-gap: 2rem;
}

@media screen and (max-width: 800px)
{
	.testimony-container
	{
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 5rem;
	}

	padding: 5rem 0;

}
`