import React from 'react'
import TableCard from './components/TableCard'
import useFetch from './hooks/useFetch'
import Navbar from './components/Navbar'

function App () {
  const [type, setType] = React.useState('ritual%20effect%20monster')

  const {
    data: card,
    loading,
    error
  } = useFetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${type}`)

  function changeType(data) {
    setType(data)
  }

  if(error) return <h2>Error</h2>
  if(loading) return <img src='https://ak6.picdn.net/shutterstock/videos/28831216/thumb/1.jpg' alt='loadingImg' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>

  function Detail(data) {
    console.log(data)
    console.log('detail ke click')
  }

  function Favorites() {
    console.log('favorites ke click')
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
        <button className="btn btn-outline-primary" onClick={Detail(cell)}><i className="fas fa-info-circle"></i></button>
      )
    },
    {
      Header: 'Favorites',
      Cell: ({ cell }) => (
        <button className="btn btn-outline-primary" onClick={Favorites}><i className="fas fa-star"></i></button>
      )
    }
  ]

  const data = card.data

  return (
    <div>
      <Navbar changeType={changeType}/>
      <div className='container mt-5'>
        <TableCard columns={columns} data={data} />
      </div>
    </div>
  )

}

export default App;
