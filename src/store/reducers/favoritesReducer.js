const initialState = {
  favorites: []
}

function favoriteReducer( state = initialState, action ){
  switch(action.type) {
    case "favorites/setFavorites":
      return { ...state, favorites: [...state.favorites, action.payload] }
    case "favorites/editFavorites":
      return { ...state, favorites: action.list}
    default:
      return state
  }
}

export default favoriteReducer