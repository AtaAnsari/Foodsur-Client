import React from 'react'
import { Divider } from '@material-ui/core';
import useUserRestrictions from 'hooks/useUserRestrictions'


const DisplayProduct = (props) => {

  const {compareRestrictions} = useUserRestrictions();
  console.log('COMPARE RESTRICTIONS', compareRestrictions);

  const product = props.location.state.product
  const {sharedRestricitions, divergentRestrictions} = compareRestrictions(product)

  const productName = props.location.state.product.productName
  // const allHealthTags = props.location.state.product.healthTags
  // const healthTagsArray = allHealthTags.map(tag => <h2>{tag}</h2>)
const shared = sharedRestricitions.map(tag => <h2>{tag}</h2>)
const divergent = divergentRestrictions.map(tag => <h2>{tag}</h2>)

  return (
    <div>
      <h1>{productName}</h1>
      <h1>THIS PRODUCT MEETS THE FOLLOWING FOOD SAFETY CRITERIA</h1>
      <p>{shared}</p>
      <h1>THIS PRODUCT DOESN'T MEET THE FOLLOWING FOOD SAFETY CRITERIA</h1>
      <p>{divergent}</p>
    </div>
  )
}

export default DisplayProduct
