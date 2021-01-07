const initialState = {
  cards: [],
  detail: {data: []},
  loading: true,
  error: null
}

function cardsReducer( state = initialState, action ){
  switch(action.type) {
    case "loading/setLoading": 
      return { ...state, loading: action.loading }
    case "error/setError":
      return { ...state, error: action.error }
    case "cards/setCards":
      return { ...state, cards: action.cards }
    case "detail/setDetail":
      return { ...state, detail: action.detail }
    default:
      return state
  }
}

export default cardsReducer