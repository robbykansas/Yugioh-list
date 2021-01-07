export function setFavorites(payload){
  return (dispatch, getState) => {
    dispatch({
      type: 'favorites/setFavorites',
      payload
    })
  }
}

export function editFavorites(list){
  return (dispatch, getState) => {
    dispatch({
      type: 'favorites/editFavorites',
      list
    })
  }
}

export function fetchDetail(id) {
  return (dispatch, getState) => {
    dispatch({
      type: "loading/setLoading",
      loading: true
    })
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      .then(data => {
        dispatch({
          type: "detail/setDetail",
          detail: data
        })
        dispatch({
          type: "loading/setLoading",
          loading: false
        })
      })
      .catch(e => {
        dispatch({
          type: "error/setError",
          error: e
        })
      })
  }
}

export function fetchCards(type) {
  return (dispatch, getState) => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${type}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      .then(data => {
        dispatch({
          type: "cards/setCards",
          cards: data
        })
        dispatch({
          type: "loading/setLoading",
          loading: false
        })
      })
      .catch(e => {
        dispatch({
          type: "error/setError",
          error: e
        })
      })
  }
}