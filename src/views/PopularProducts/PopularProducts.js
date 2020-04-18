import React, { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

const PopularProducts = () => {

const [cookies] = useCookies(['session']);
const userId = {
  id: cookies.session
  }

  const getPopularProducts = () => {
    axios.post('/api/user-data/popular-products', userId)
  }

  useEffect(() => {
    getPopularProducts()
  }, [])

  return (
    <h1>Hello</h1>
  )
}

export default PopularProducts
