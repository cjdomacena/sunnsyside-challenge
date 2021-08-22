import styled from "styled-components";

export const TestimonialContainer = styled.div`

width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
p 
{
	font-family: ${$props => $props.theme.font.barlow};

}
.testimonial-text
{
	font-size: 1rem;
	text-align: center;
	color: ${$props=> $props.theme.neutral_colors.very_dark_grayish_blue};
	p 
	{
		margin-top: 2rem;
	}
}

.testimonial-image 
{
	height:70px;
	width: 70px;
	border-radius: 50px;
	img 
	{
		width: 100%;
		height: auto;
		border-radius: 50px;
	}
}

.testimonial-info  
{
	text-align: center;
	p 
	{
		font-size: .85rem;
		color: ${$props => $props.theme.neutral_colors.dark_grayish_blue};
	}
	h5 
	{
		margin-bottom: 0;
		font-size: 1.2rem;
		font-family: ${$props => $props.theme.font.fraunces};
		color: ${$props => $props.theme.neutral_colors.very_dark_desaturated_blue};
	}
}
`