import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Detail() {
  const params = useParams().id
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(e => setError(e))
  }, [params])
  if(error) return <h2>Error</h2>
  if(loading) return <img src='https://ak6.picdn.net/shutterstock/videos/28831216/thumb/1.jpg' alt='loadingImg' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>

  return(
    <div>
      <Navbar />
      <div className="card container mt-3" style={{width: '18rem'}}>
        <img className="card-img-top" src={data.data[0].card_images[0].image_url} alt="yugioh card" />
        <div className="card-body">
          <h5 className="card-title">{data.data[0].name}</h5>
          <p className='card-text'>{data.data[0].desc}</p>
          <p className="card-text">Rarity: {data.data[0].card_sets[0].set_rarity}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail