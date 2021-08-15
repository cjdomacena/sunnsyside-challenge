import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
position: fixed;
`

export const Nav = styled.nav`

height: 80px;
max-width: 1440px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
.logo-container
{
	width: auto;
	height: auto;
}

.nav-links-container
{
	
	@media screen and (max-width: 800px)
		{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	svg 
	{
		display: none;
		@media screen and (max-width: 800px)
		{
				display: block;	
		}
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
	}

}
`

