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
		color: ${$props =>$props.theme.neutral_colors.white};
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