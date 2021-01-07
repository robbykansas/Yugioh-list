import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetail } from '../store/actions/action'

function Detail() {
  const params = useParams().id
  const dispatch = useDispatch()
  const data = useSelector(state => state.cards.detail)
  const loading = useSelector(state => state.cards.loading)
  const error = useSelector(state => state.cards.error)

  useEffect(() => {
    dispatch(fetchDetail(params))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  
  if(error) return <h2>Error</h2>
  if(loading) return <img src='https://ak6.picdn.net/shutterstock/videos/28831216/thumb/1.jpg' alt='loadingImg' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
  
  return(
    <div>
      <Navbar />
      <div className="container mt-3">
        <img style={{float: 'left', paddingRight: '10px'}} src={data?.data[0]?.card_images[0]?.image_url} alt="yugioh card" />
        <div>
          <h5>{data?.data[0]?.name}</h5>
          <p>{data?.data[0]?.desc}</p>
          <p>Rarity: {data?.data[0]?.card_sets[0]?.set_rarity}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail