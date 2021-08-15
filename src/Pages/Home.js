import React from 'react'
import {
	HeroContainer,
	SectionContainer,
	SidebySide

} from './Home.style.js';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Components/Theme';
import Section from '../Components/TwoSideContent';
import egg from '../Assets/Images/Desktop/image-transform.jpg';
import egg_mobile from '../Assets/Images/Mobile/image-transform.jpg';
import standout from '../Assets/Images/Desktop/image-stand-out.jpg';
import standout_mobile from '../Assets/Images/Mobile/image-stand-out.jpg';

import graphic_design from '../Assets/Images/Desktop/image-graphic-design.jpg';
import graphic_design_mobile from '../Assets/Images/Mobile/image-graphic-design.jpg';

import photography from '../Assets/Images/Desktop/image-photography.jpg';
import photography_mobile from '../Assets/Images/Mobile/image-photography.jpg';

import OneSideContent from './../Components/OneSideContent'
import { useState, useEffect } from 'react';

function useWindowSize() {

	const [windowSize, setWindowSize] = useState({
		width: undefined,
	});
	useEffect(() => {

		function handleResize() {

			setWindowSize({
				width: window.innerWidth,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

const Home = () => {
	const size = useWindowSize();
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
					img={(size.width > 1000) ? egg : egg_mobile}
					color={theme.primary_colors.yellow}
				></Section>
				<Section
					sectionHeader=
					"Stand out to the right audience"
					sectionParagraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
					order="r2l"
					img={(size.width > 1000) ? standout : standout_mobile}
					color={theme.primary_colors.soft_red}
				></Section>
			</SectionContainer>

			<SectionContainer>
				<SidebySide>
					<OneSideContent
						img={(size.width > 800 ? graphic_design : graphic_design_mobile)}
						side="left"
						header="Graphic Design"
						paragraph="Great Design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.
						"
					></OneSideContent>
					<OneSideContent
						img={(size.width > 800 ? photography : photography_mobile)}
						side="right"
						header="Photography"
						paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
						"
					></OneSideContent>

				</SidebySide>
			</SectionContainer>


		</ThemeProvider>



	)
}

export default Home
