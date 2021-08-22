import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
position: absolute;
/* background-color: ${$props => $props.isScrolled ? '#90D4C5' : 'transparent'}; */
/* transition: all .1s ease-in-out;
z-index: 9999; */
li 
{
	cursor: pointer;
}
`
export const MobileNav = styled.div`

display: ${$props => $props.isOpen ? 'block' : 'none'};
.mobile-menu 
{

	.triangle-top
	{
		width: 0;
      height: 0;
      border-bottom: 20px solid white;
      border-left: 20px solid transparent;
	  position: absolute;
	  right: 0;
	  top: -20px;
	}
	ul 
	{
		background-color: white;
		width: 80%;
		border-radius: -150px;
		list-style:none;
		padding: 1.5rem;
		margin: 0 auto;
		position: relative;
		li
		{
			width: fit-content;
			margin: 2rem auto;
			padding: 1rem;
			font-family: ${$props => $props.theme.font.barlow};
			font-size: 1.2rem;
			color: ${$props => $props.theme.neutral_colors.very_dark_grayish_blue};
		}
		.mobile-button 
		{
			background-color: ${$props => $props.theme.primary_colors.yellow};
			padding-left: 2.5rem;
			padding-right: 2.5rem;
			border-radius: calc(2.5rem * 2);
			font-family: ${$props => $props.theme.font.fraunces};
			text-transform: uppercase;
			color: ${$props => $props.theme.neutral_colors.very_dark_desaturated_blue};
		}
	}
}
`
export const Nav = styled.nav`

height: 80px;
max-width: 1440px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
margin-top: 1rem;
.logo-container
{
	width: auto;
	height: auto;
	cursor: pointer;
				
	
}

.nav-links-container
{
	
	@media screen and (max-width: 800px)
		{
			display: flex;
			justify-content: center;
			align-items: center;
		}


}

.nav-links-container ul
{

	display: grid;
	grid-template-columns: repeat(4, auto);
	place-content: center;
	grid-gap: 2rem;
	color: white;
	list-style: none;

	align-items: center;
	font-family: ${props => props.theme.font.barlow};
	color: ${props => props.theme.neutral_colors.white};
	li
	{
	
		font-weight: ${props => props.theme.font_weight.bold};
		@media screen and (max-width: 800px)
		{
			display: none;
		}
		font-family: ${$props => $props.theme.font.barlow};
		font-size: 1rem;

	}
	.button 
		{
			padding: 1rem 1.5rem;
			border-radius: 2em;
			background-color: white;
			font-family: ${$props => $props.theme.font.fraunces};
			text-transform: uppercase;
			color: ${$props => $props.theme.neutral_colors.very_dark_desaturated_blue};
		}
		.button:hover 
		{
			background-color: rgba(255, 255, 255, .3);
			color: white;
		}
}
`

export const BurgerMenu = styled.div`
	svg 
	{
		display: none;
		@media screen and (max-width: 800px)
		{
				display: block;	
		}
	}
`