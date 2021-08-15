import styled from 'styled-components'

export const Container = styled.div`
height: 550px;
display: flex;
justify-content: center;
align-items: flex-end;
background-image: url(${$image => $image.img});
background-size: cover;
background-position: center;
width: auto;


.oneSideContent 
{
	text-align: center;
	padding-bottom: 1rem;
	width: 50%;
@media screen and (max-width: 800px)
{
	width: 80%;
	padding-bottom: 2rem;
}

	h3 
	{
		font-family: ${$props => $props.theme.font.fraunces};
		font-size: 2rem;
		color: ${$props => $props.color};
		margin: 1.3rem 0;
	}
	p 
	{
		font-family: ${$props => $props.theme.font.barlow};
		font-size: 1rem;
		color: ${$props=> $props.pColor};
		line-height: 1.5rem;
	}
}
`
