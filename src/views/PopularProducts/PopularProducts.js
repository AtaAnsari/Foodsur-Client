import React, { useEffect } from 'react'
import axios from 'axios'
import useLoginValidation from 'hooks/useLoginValidation'

const PopularProducts = () => {
  useLoginValidation();

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
