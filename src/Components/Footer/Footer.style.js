import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background-color: #90D4C5;
height:350px;
display: flex;
justify-content: center;
align-items: center;

.footer-items 
{
	position: relative;
	max-width: 1440px;
	margin: 0 auto;
	height: 250px;
	@media screen and (max-width: 450px)
		{
			width: 100%;
		}
.footer-logo
{
	width: fit-content;
	margin: 0 auto;

}
	.footer-contents
	{
		width: 400px;
		@media screen and (max-width: 450px)
		{
			width: 100%;
		}
		ul 
		{
			width: 100%;
			margin-top: 3rem;
			list-style: none;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			padding-left: 0;
			li 
			{
				a
				{
					text-decoration:none;
					font-family: ${$props => $props.theme.font.barlow};
					color: ${$props=>$props.theme.primary_colors.dark_moderate_cyan}
				}
				a:hover 
				{
					color: white;
				}
			}
		}

	}
}

.footer-socials 
{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	ul 
	{
		width: 50%;
		list-style: none;
		padding-left: 0;
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
		
		svg:hover 
		{
			cursor: pointer;
			path 
			{
				fill:#fff;
			}
	
		}
	}
}
`