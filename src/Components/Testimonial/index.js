import React from 'react'
import {
	TestimonialContainer
} from './Testimonial.style'

import {theme} from './../Theme';
import { ThemeProvider } from 'styled-components';

const index = ({image,testimonial, name, position}) => {
	return (
		<ThemeProvider theme={theme}>
		<TestimonialContainer>
			<div className="testimonial-image">
				<img src={image} alt="" />
			</div>
			<div className="testimonial-text">
					<p>{testimonial}</p>
			</div>	
			<div className="testimonial-info">
				<h5>{name}</h5>
				<p>{position}</p>
			</div>
		</TestimonialContainer>
		</ThemeProvider>
	)
}

export default index
