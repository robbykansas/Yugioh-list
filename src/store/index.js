import { createStore } from 'redux'

const initialState = {
  favorites: []
}

function reducer( state = initialState, action ){
  switch(action.type) {
    case "favorites/setFavorites":
      return { ...state, favorites: [...state.favorites, action.payload] }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store