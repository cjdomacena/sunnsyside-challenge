import React from 'react'

import { GalleryContainer } from './Gallery.style'
const index = ({images}) => {


	return (
		<GalleryContainer>
			{images.map((image) =>
			
			<div className="gallery-image-container">
					<img src={image} alt="" />
			</div>
			
			)}
		</GalleryContainer>
	)
}

export default index
