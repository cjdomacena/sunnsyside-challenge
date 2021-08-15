import React from 'react'
import {
	HeroContainer
} from './Home.style.js';
import { ThemeProvider } from 'styled-components';
import {theme }from '../Components/Theme';


const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<HeroContainer>
				<div className="hero-content">
						<h1>WE ARE CREATIVES</h1>
						<div className="hero-arrow-down"><svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
						</div>
				</div>

			</HeroContainer>
		</ThemeProvider>
	)
}

export default Home
