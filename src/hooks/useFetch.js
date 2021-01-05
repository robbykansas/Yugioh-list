import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
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
  }, [url])

  return {
    data,
    loading,
    error
  }
}

export default useFetch