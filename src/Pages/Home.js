import React from 'react'
import {
	HeroContainer, SectionContainer
} from './Home.style.js';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Components/Theme';
import Section from '../Components/TwoSideContent';
import egg from '../Assets/Images/Desktop/image-transform.jpg';
import standout from '../Assets/Images/Desktop/image-stand-out.jpg';
const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<HeroContainer>
				<div className="hero-content">
					<h1>WE ARE CREATIVES</h1>
					<div className="hero-arrow-down"><svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g></svg>
					</div>
				</div>

			</HeroContainer>
			<SectionContainer>
				<Section
				sectionHeader= 
				"Transform you brand"
				sectionParagraph="We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
				order="l2r"
				img={egg}
				color ={theme.primary_colors.yellow}
				></Section>
					<Section
				sectionHeader= 
				"Stand out to the right audience"
				sectionParagraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
				order="r2l"
				img={standout}
				color = {theme.primary_colors.soft_red}
				></Section>
			</SectionContainer>
		</ThemeProvider>


	)
}

export default Home
