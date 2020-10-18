import {
	appendAnimeList,
	fetchAnimeListFailure,
	fetchAnimeListRequest,
	fetchAnimeListSuccess,
	setAnimeListPageNumber,
	setAnimeSearchParams,
} from '../redux/actions/animeListActions'

const searchAnime = async (searchParam, pageNumber) => {
	const [error, response] = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchParam}&limit=21&page=${pageNumber}`)
		.then(async response => {
			if (response.status === 200) return [null, await response.json()]
			else throw new Error('Something Went Wrong')
		})
		.catch(error => [error, null])
	return [error, response]
}

export const getAnimeList = (searchParam, pageNumber = 1) => async dispatch => {
	dispatch(fetchAnimeListRequest)
	dispatch(setAnimeSearchParams(searchParam))
	dispatch(setAnimeListPageNumber(1))
	const [error, response] = await searchAnime(searchParam, pageNumber)
	if (error || !response.results.length) {
		dispatch(fetchAnimeListFailure)
	} else {
		dispatch(fetchAnimeListSuccess(response.results))
	}
}

export const loadMoreAnime = (searchParam, pageNumber) => async dispatch => {
	dispatch(fetchAnimeListRequest)
	dispatch(setAnimeListPageNumber(pageNumber))
	const [error, response] = await searchAnime(searchParam, pageNumber)
	if (error || !response.results.length) {
		dispatch(fetchAnimeListFailure)
		return Promise.reject(error)
	} else {
		dispatch(appendAnimeList(response.results))
	}
}
