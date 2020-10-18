import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoreAnime } from '../networkHandlers/animeListHandlers'
import { ItemCard } from '../components/ItemCard'
import { Snackbar } from '../components/SnackBar'

const HomeScreen = () => {
	const [openSnackBar, setOpenSnackBar] = useState(false)
	const { animeList } = useSelector(state => state)
	const { animeSearchParams, pageNumber, loading } = useSelector(state => state)
	const dispatch = useDispatch()

	const handleLoadMore = () => {
		dispatch(loadMoreAnime(animeSearchParams, pageNumber + 1)).catch(e => {
			setOpenSnackBar(true)
			setTimeout(() => {
				setOpenSnackBar(false)
			}, 2000)
		})
	}
	return (
		<div>
			<Toolbar />

			<div className='content'>
				<div className='container item-container'>
					{!!loading && (
						<div className='overlay'>
							<div className='lds-dual-ring'></div>
						</div>
					)}
					{animeList.map(anime => (
						<ItemCard anime={anime} key={anime.mal_id} />
					))}
				</div>
				{!!animeList.length && (
					<button
						onClick={() => {
							handleLoadMore()
						}}
						className='load-more'
					>
						Load More
					</button>
				)}
				<Snackbar message={'No More Data'} isActive={openSnackBar} />
			</div>
		</div>
	)
}

export default HomeScreen
