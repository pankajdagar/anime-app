import React from 'react'

export const ItemCard = ({ anime }) => {
	return (
		<a href={anime.url} className='item-card' key={anime.mal_id}>
			<div className='card-img'>
				<img src={anime.image_url} alt={anime.title} loading='lazy' />
			</div>
			<div className='card-title'>
				<span>{anime.title}</span>
			</div>
		</a>
	)
}
