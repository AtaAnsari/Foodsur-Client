import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useLoginValidation from 'hooks/useLoginValidation'


const PopularProducts = () => {
  useLoginValidation();

  const [cookies] = useCookies(['session']);
  const [popularProducts, setPoplarProducts] = useState([])

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
    let loggedIn = true;
    getPopularProducts()
      .then(product => {
        if (loggedIn) {
          setPoplarProducts(product.data);
        }
      });
    return () => loggedIn = false;
  }, [])

  console.log(popularProducts)

  return (
    <h1>Hello</h1>
  )
}

export default PopularProducts
