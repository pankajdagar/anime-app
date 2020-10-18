import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAnimeList } from '../networkHandlers/animeListHandlers'
import { Snackbar } from './SnackBar'

const Toolbar = () => {
	const [animeSearchParams, setAnimeSearchParams] = useState('')
	const [openSnackBar, setOpenSnackBar] = useState(false)
	const dispatch = useDispatch()

	const searchHandler = () => {
		if (!!animeSearchParams.length) {
			dispatch(getAnimeList(animeSearchParams))
		} else {
			setOpenSnackBar(true)
			setTimeout(() => {
				setOpenSnackBar(false)
			}, 2000)
		}
	}

	return (
		<div className='toolbar' style={{ paddingBottom: '1rem' }}>
			<input
				type='text'
				onChange={event => setAnimeSearchParams(event.target.value)}
				placeholder='search for an anime, eg: Naruto'
				onKeyPress={event => {
					if (event.key === 'Enter') {
						searchHandler()
					}
				}}
			/>
			<button onClick={searchHandler}>GO</button>
			<Snackbar message={`Search text can't be empty`} isActive={openSnackBar} />
		</div>
	)
}

export default Toolbar
