import React, { useEffect } from 'react'
import axios from 'axios'

const PopularProducts = () => {

  const getPopularProducts = () => {
    axios.get('/api/user-data/popular-products', (req, res) => {
      console.log('Sent...')
    })
  }

  useEffect(() => {
    getPopularProducts()
  }, [])

  return (
    <h1>Hello</h1>
  )
}

export default PopularProducts
