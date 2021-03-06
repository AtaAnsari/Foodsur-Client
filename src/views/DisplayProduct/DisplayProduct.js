import React, { useState, useEffect } from 'react'
import useUserRestrictions from 'hooks/useUserRestrictions'
import { RestrictionCard, PassCard, SummaryCardAvoid, SummaryCardPass } from './components'
import { makeStyles } from '@material-ui/styles';
import axios from 'axios'
import { useCookies } from 'react-cookie';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  largeIcon: {
    width: "150px",
    height: "150px",
    color: theme.palette.error.main
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }

}));

const DisplayProduct = (props) => {

  const classes = useStyles();
  const [cookies] = useCookies(['session'])
  const [isFavourited, setIsFavourited] = useState(false)
  const [doneLoading, setDoneLoading] = useState(false)


  const checkIfFavourited = async () => {

    const apiId = {
      id: props.location.state.product.productId,
      user: cookies.session
    }

    const isFav = await axios.get('/api/user-data/check-favourites', { params: apiId })
    return isFav
  }
  console.log(doneLoading)

  useEffect(() => {
    checkIfFavourited()
      .then(res => {
        setIsFavourited(res.data)
        setDoneLoading(true)
      })
  }, [])
  console.log(doneLoading)

  console.log('This is our state from the back end: ', isFavourited)
  const { compareRestrictions } = useUserRestrictions();

  const product = props.location.state.product

  const { sharedRestricitions, divergentRestrictions } = compareRestrictions(product)

  const healthRestriction = function (divergentRestrictions) {
    for (const restriction of divergentRestrictions) {
      if (restriction[1] === "Health Restriction") {
        return true
      }
    }
  }

  const hasHealthRestriction = healthRestriction(divergentRestrictions)

  const formattedShared = sharedRestricitions.map(tagArray => [tagArray[0].split('_').join(' '), tagArray[1], tagArray[2]])

  const formattedDivergent = divergentRestrictions.map(tagArray => [tagArray[0].split('_').join(' '), tagArray[1], tagArray[2]])

  const productName = props.location.state.product.productName
  const productId = props.location.state.product.productId


  const shared = formattedShared.map(tagArray => <PassCard tag={tagArray[0]} tagType={tagArray[1]} cardColour={tagArray[2]} />)

  const divergent = formattedDivergent.map(tagArray => <RestrictionCard tag={tagArray[0]} tagType={tagArray[1]} cardColour={tagArray[2]} />)

  return (
    <div>
      {doneLoading && divergent.length > 0 &&
        <SummaryCardAvoid
          productName={productName}
          shared={shared}
          divergent={divergent}
          hasHealthRestriction={hasHealthRestriction}
          product={product}
          productId={productId}
          isFavourited={isFavourited}
        />}
      {doneLoading && divergent.length === 0 &&
        <SummaryCardPass
          productName={productName}
          productId={productId}
          product={product}
          shared={shared}
          divergent={divergent}
          isFavourited={isFavourited}
        />}

    </div>
  )
}

export default DisplayProduct
