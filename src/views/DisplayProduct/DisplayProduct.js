import React from 'react'
import useUserRestrictions from 'hooks/useUserRestrictions'
import { RestrictionCard } from './components'
import { PassCard } from './components'

const DisplayProduct = (props) => {

  const {compareRestrictions} = useUserRestrictions();
  console.log('COMPARE RESTRICTIONS', compareRestrictions);

  const product = props.location.state.product
  const {sharedRestricitions, divergentRestrictions} = compareRestrictions(product)

  const productName = props.location.state.product.productName
  // const allHealthTags = props.location.state.product.healthTags
  // const healthTagsArray = allHealthTags.map(tag => <h2>{tag}</h2>)
const shared = sharedRestricitions.map(tag => <PassCard tag={tag} />)
const divergent = divergentRestrictions.map(tag => <RestrictionCard tag={tag} />)


  return (
    <div>
      {/* <h1>{productName}</h1> */}
      <div>{shared}</div>
      <div>{divergent}</div>
    </div>
       
  )
}

export default DisplayProduct
