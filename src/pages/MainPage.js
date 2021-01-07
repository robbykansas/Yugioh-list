import React, { useEffect } from 'react'
import TableCard from '../components/TableCard'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFavorites, fetchCards } from '../store/actions/action'

function MainPage () {
  const [type, setType] = React.useState('ritual%20effect%20monster')
  const history = useHistory()
  const favorites = useSelector(state => state.favorites.favorites)
  const cards = useSelector(state => state.cards.cards)
  const error = useSelector(state => state.cards.error)
  const loading = useSelector(state => state.cards.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCards(type))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])
  
  if(error) return <h2>Error</h2>
  if(loading) return <img src='https://ak6.picdn.net/shutterstock/videos/28831216/thumb/1.jpg' alt='loadingImg' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>

  function changeType(data) {
    setType(data)
  }

  function handleDetail(id) {
    history.push(`/Detail/${id}`)
  }

  function handleFavorites(id) {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      .then(data => {
        const dupe = favorites.find(founded => founded.id === data.data[0].id)
        if (dupe) {
          console.log('data exists in favorites')
        } else {
          dispatch(setFavorites(data.data[0]))
        }
      })
      .catch(e => console.log(e))
  }

  const columns = 
  [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Image',
      accessor: 'card_images[0].image_url_small',
      Cell: (image) => {
        return (
          <div>
            <img src={image.cell.value} alt='gambar'/>
          </div>
        )
      }
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Level',
      accessor: 'level',
    },
    {
      Header: 'Atk',
      accessor: 'atk',
    },
    {
      Header: 'Def',
      accessor: 'def',
    },
    {
      Header: 'Description',
      accessor: 'desc',
    },
    {
      Header: 'Detail',
      Cell: ({ cell }) => (
        <div>
          <button className="btn btn-outline-primary" value={cell.row.original.id} onClick={() => handleDetail(cell.row.original.id)}><i className="fas fa-info-circle"></i></button>
        </div>
      )
    },
    {
      Header: 'Favorites',
      Cell: ({ cell }) => (
        <button className="btn btn-outline-warning" value={cell.row.original.id} onClick={() => handleFavorites(cell.row.original.id)}>
          {favorites.find(founded => founded.id === cell.row.original.id) ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
        </button>
      )
    }
  ]
  const data = cards.data

  return (
    <div>
      <Navbar changeType={changeType}/>
      <div className='container mt-3'>
        <TableCard columns={columns} data={data} />
      </div>
    </div>
  )

}

export default MainPage;
