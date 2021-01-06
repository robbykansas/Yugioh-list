import React from 'react'
import TableCard from '../components/TableCard'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Favorites() {
  const history = useHistory()
  function Detail(e) {
    const id = e.target.value
    if(id === undefined) {
      console.log('error')
    } else {
      history.push(`/Detail/${id}`)
    }
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
          {console.log(cell.row.original)}
          <button className="btn btn-outline-primary" value={cell.row.original.id} onClick={Detail}><i className="fas fa-info-circle"></i></button>
        </div>
      )
    }
  ]
  const data = useSelector(state => state.favorites)

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