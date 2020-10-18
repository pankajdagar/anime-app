import {
	FETCH_ANIME_LIST_SUCCESS,
	FETCH_ANIME_LIST_FAILURE,
	SET_ANIME_SEARCH_PARAMS,
	FETCH_ANIME_LIST_REQUEST,
	SET_ANIME_LIST_PAGE_NUMBER,
	APPEND_ANIME_LIST,
} from '../types/animeListTypes'

const initalState = {
	loading: false,
	error: false,
	pageNumber: 1,
	animeSearchParams: '',
	animeList: [],
}

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_ANIME_SEARCH_PARAMS:
			return {
				...state,
				animeSearchParams: action.payload,
			}

		case FETCH_ANIME_LIST_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			}

		case FETCH_ANIME_LIST_SUCCESS:
			const animeList = action.payload
			return {
				...state,
				animeList,
				loading: false,
				error: false,
			}

		case FETCH_ANIME_LIST_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			}

		case SET_ANIME_LIST_PAGE_NUMBER:
			return {
				...state,
				pageNumber: action.payload,
			}
		case APPEND_ANIME_LIST:
			return {
				...state,
				animeList: [...state.animeList, ...action.payload],
				loading: false,
				error: false,
			}

		default:
			return state
	}
}

export default reducer
