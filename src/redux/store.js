import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import animeListReducer from './reducers/animeListReducers'

const store = createStore(animeListReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
