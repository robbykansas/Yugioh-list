import React from 'react'
import TableCard from '../components/TableCard'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { editFavorites } from '../store/actions/action'
import { useHistory } from 'react-router-dom'

function Favorites() {
  const history = useHistory()
  const dispatch = useDispatch()
  const data = useSelector(state => state.favorites.favorites)

  function handleDetail(id) {
    history.push(`/Detail/${id}`)
  }
  function handleUnfavorites(id) {
    // const index = data.findIndex(founded => founded.id === id)
    // data.splice(index, 1)
    let list = data.filter(post => {return post.id !== Number(id)})
    dispatch(editFavorites(list))
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
      Header: 'Unfavorites',
      Cell: ({ cell }) => (
        <button className="btn btn-outline-danger" value={cell.row.original.id} onClick={() => handleUnfavorites(cell.row.original.id)}><i className="fas fa-eraser"></i></button>
      )
    }
  ]

  return (
    <div>
      <Navbar />
      <div className='container mt-3'>
        <TableCard columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Favorites