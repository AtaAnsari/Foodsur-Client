import React, { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useLoginValidation from 'hooks/useLoginValidation'


const PopularProducts = () => {
  useLoginValidation();

  const [cookies] = useCookies(['session']);
  const userId = {
    id: cookies.session
  }

  const getPopularProducts = async () => {
    const popularData = await axios.get('/api/user-data/popular-products', {
      params: userId
    })
    return popularData
  }

  useEffect(() => {
    getPopularProducts()
  }, [])

  return (
    <h1>Hello</h1>
  ).then(res => console.log(res.data))
}

export default PopularProducts
