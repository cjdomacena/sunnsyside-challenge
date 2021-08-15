import React from 'react'
import { ThemeProvider } from 'styled-components';
import {theme} from '../Theme';
import {
	Container,
	TextSection,
	ImageSection,
	Button
} from './TwoSideContent.style';


const index = ({sectionHeader, sectionParagraph, order, img,color}) => {
	return (
		<ThemeProvider theme={theme}>
			<Container order={order} >
				<TextSection order = {order}>
					<div className="text-content">
					<h2>{sectionHeader}</h2>
					<p>{sectionParagraph}</p>
					<Button color={color}>
						<a href="/">Learn more</a>
						<hr></hr>
						</Button>
					</div>

				</TextSection>
				<ImageSection order = {order}>
					<img src={img}alt="egg in a yellow background" />
				</ImageSection>
			</Container>
		</ThemeProvider>
	)
}

export default index
