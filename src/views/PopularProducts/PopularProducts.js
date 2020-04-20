import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useLoginValidation from 'hooks/useLoginValidation'
import { ProductExpander } from './components'
import { Bar } from 'react-chartjs-2';
import palette from 'theme/palette';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  graph: {
    backgroundColor: "white",
    marginLeft: "20px",
    marginRight: "20px"
  },
  header: {
    backgroundColor: "white",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  subtitle: {
    backgroundColor: "white",
    marginBottom: "20px"
  },
  background: {
    backgroundColor: "white"
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


  const productList = popularProducts.map((product, idx) => {
    console.log('product', product);

    const productName = product.name.toLowerCase()
    return <ProductExpander
      productName={productName}
      rank={idx + 1}
      apiId={product.apiId}
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
        <Typography variant='h1' gutterBottom={true} align={'center'} color='black'>
          Popular Items
        </Typography>
      </div>
      <div className={classes.graph}>
        <Bar
          data={data}
          options={options}
        />
      </div>
      <div className={classes.subtitle}>
        <Typography variant='h6' gutterBottom={true} align={'center'} color='black'>
          Rank
        </Typography>
      </div>
      <div>
        <Typography variant='h5' gutterBottom={true} align={'start'} color='black' style={{ paddingLeft: '20px' }}>
          Ranked Items That Meet your Requirements:
        </Typography>
      </div>
      <div className={classes.list}>
        {productList}
      </div>
    </div>
  )
}

export default PopularProducts
