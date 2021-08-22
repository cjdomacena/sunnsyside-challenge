import styled from "styled-components";

export const GalleryContainer = styled.div`
max-width: 1440px;
height: auto;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
img 
{
	width: 100%;
	height: auto;
}
@media screen and (max-width: 800px)
{
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	img 
	{
		height: 100%;
	}
}
`