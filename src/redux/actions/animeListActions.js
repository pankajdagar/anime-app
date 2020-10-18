import {
	APPEND_ANIME_LIST,
	FETCH_ANIME_LIST_FAILURE,
	FETCH_ANIME_LIST_REQUEST,
	FETCH_ANIME_LIST_SUCCESS,
	SET_ANIME_LIST_PAGE_NUMBER,
	SET_ANIME_SEARCH_PARAMS,
} from '../types/animeListTypes'

export const setAnimeSearchParams = params => ({
	type: SET_ANIME_SEARCH_PARAMS,
	payload: params,
})

export const fetchAnimeListRequest = {
	type: FETCH_ANIME_LIST_REQUEST,
}

export const fetchAnimeListSuccess = payload => ({
	type: FETCH_ANIME_LIST_SUCCESS,
	payload,
})

export const fetchAnimeListFailure = {
	type: FETCH_ANIME_LIST_FAILURE,
}

export const setAnimeListPageNumber = payload => ({
	type: SET_ANIME_LIST_PAGE_NUMBER,
	payload,
})

export const appendAnimeList = payload => ({
	type: APPEND_ANIME_LIST,
	payload,
})
