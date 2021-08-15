import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from "./OneSideContent.style"
import { theme } from './../Theme'


const index = ({ img,side,header,paragraph }) => {
	return (
		<ThemeProvider theme={theme}>
			<Container img={img} color={(side==="left" ? theme.primary_colors.desaturated_cyan : theme.primary_colors.dark_blue)} pColor={(side==="left" ? theme.primary_colors.dark_moderate_cyan : theme.primary_colors.dark_blue)} >
				<div className="oneSideContent" >
					<div className="oneSideText">
						<h3>{header}</h3>
						<p>{paragraph}</p>
					</div>
				</div>
			</Container>
		</ThemeProvider>
	)
}

export default index
