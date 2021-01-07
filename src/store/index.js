import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import favoritesReducer from './reducers/favoritesReducer'
import cardsReducer from './reducers/cardsReducer'

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cards: cardsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store