import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useLoginValidation from 'hooks/useLoginValidation'
import { ProductExpander } from './components'
import { Bar } from 'react-chartjs-2';
 import palette from 'theme/palette';



const PopularProducts = () => {
  useLoginValidation();

  const [cookies] = useCookies(['session']);
  const [popularProducts, setPoplarProducts] = useState([])
  const [popularityCount, setpopularityCount] = useState([])

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
          setPoplarProducts(product.data[1]);
          setpopularityCount(product.data[0])
        }

      })
 
    return () => loggedIn = false;
  }, [])

  // const loadApiDAta = async(item) => {
  //   const ingredients = {
  //     'ingredients': [
  //       {
  //         'quantity': 1,
  //         'measureURI': "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
  //         'foodId': item
  //       }
  //     ]
  //   }

  //    const res = await axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=edc61ca8&app_key=b9f17ae7284f840d6dd1ef3cbcdcde9e`,
  //     ingredients)
  //     console.log('RES', res)

  // }
// console.log('PRODUCTLIST', popularProducts)
 
  const productList = popularProducts.map((product, idx)=> {
    // return product.name
  // })
  // console.log('productNameList', productNameList)
  // const productList = productNameList.map((productName) => {
  
  
  return <ProductExpander 
  
  productName={product.name}
  rank={idx + 1}
  // nutriFacs={nutriFacs}
  /> }
  )
  
 const productLabel = popularProducts.map((prod, idx) => {
   return idx + 1 
 })

  const data = {
  labels: productLabel,
  datasets: [
    {
      label: 'This year',
      backgroundColor: palette.primary.main,
      data: popularityCount
    }
  ]
};
console.log('popularityCount', data);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};

  return (
    <div>
             <Bar
            data={data}
            options={options}
          />
    {productList}
    </div>

  )
}

export default PopularProducts
