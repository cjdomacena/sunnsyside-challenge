import React from 'react'
import {
	Nav,
	Container

} from './Navbar.style'

import logo from '../../Assets/logo.svg';
import { ThemeProvider } from 'styled-components';
import {theme} from '../Theme';

const index = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Nav>
					<div className="logo-container">
					<img src={ logo } alt="Sunnyside logo "></img>
					</div>
					<div className="nav-links-container">
						<ul >
							<li>About</li>
							<li>Services</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
						<div>	<svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
						</div>
					</div>
				</Nav>
			</Container>
		</ThemeProvider>
	)
}

export default index
