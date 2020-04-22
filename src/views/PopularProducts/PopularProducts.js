import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useLoginValidation from 'hooks/useLoginValidation'
import { ProductExpander } from './components'
import { Bar } from 'react-chartjs-2';
import palette from 'theme/palette';
import { makeStyles } from '@material-ui/styles';
import { Typography, CardHeader, Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  graph: {
    backgroundColor: 'white',
    marginLeft: '35px',
    marginRight: '35px',
    position: 'relative',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  subtitle: {
    backgroundColor: 'white',
    marginBottom: '20px'
  },
  background: {
    backgroundColor: 'white'
  },
  list: {
    textTransform: 'capitalize'
  }

}));

const PopularProducts = () => {

  const classes = useStyles();
  useLoginValidation();
  const [cookies] = useCookies(['session']);
  const [popularProducts, setPoplarProducts] = useState([])
  const [popularityCount, setpopularityCount] = useState([])
  const [userFavourites, setUserFavourites] = useState([])

  console.log('User Favourites', userFavourites)

  const userId = {
    id: cookies.session
  }

  const getPopularProducts = async() => {
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
          setpopularityCount(product.data[0]);
          setPoplarProducts(product.data[1]);
          setUserFavourites(product.data[2])
        }

      })

    return () => loggedIn = false;
  }, [])



  const productList = popularProducts.map(function(product, idx) {

    let isFavourited = false
    userFavourites.forEach(favourite => {
      if (favourite.favouriteId === product.id) {
        isFavourited = true
      }
    })

    const productName = product.name.toLowerCase()
    return <ProductExpander
      apiId={product.apiId}
      isFavourited={isFavourited}
      productId={product.id}
      productName={productName}
      rank={idx + 1}
           />
  }
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
    <div className={classes.background}>
      <div className={classes.header}>
        <Typography
          align={'center'}
          color="black"
          gutterBottom
          variant="h1"
        >
          Popular Items
        </Typography>
      </div>
      <div className={classes.graph}>
        <div style={{position:'absolute', top: '41%', left: '-26%'}}>
          <img
            alt="Logo"
            className= {classes.logoWidth}
            src="/images/misc/ylabel.png"
            style={{width:'132px', transform:'rotate(-90deg)'}}
          />
        </div>
        <div>
          <Bar
            data={data}
            options={options}

          />
        </div>
      </div>

      <div className={classes.subtitle}>
        <Typography
          align={'center'}
          color="black"
          gutterBottom
          variant="h6"
        >
          Popular Products by Rank
        </Typography>
      </div>
      <div>
        <Divider />
        <CardHeader
          title="Items favourited by users with your dietary restrictions (ordered by rank in popularity):"
        />
        <Divider />
      </div>
      <div className={classes.list}>
        {productList}
      </div>
    </div>
  )
}

export default PopularProducts
