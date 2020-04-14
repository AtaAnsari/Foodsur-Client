import React from 'react'
import useUserRestrictions from 'hooks/useUserRestrictions'
import { RestrictionCard } from './components'
import { PassCard } from './components'
import {Typography} from '@material-ui/core';

const DisplayProduct = (props) => {

  const {compareRestrictions} = useUserRestrictions();
  

  const product = props.location.state.product
  const {sharedRestricitions, divergentRestrictions} = compareRestrictions(product)
const formattedShared = sharedRestricitions.map(tag => tag.split('_').join(' '))
const formattedDivergent = divergentRestrictions.map(tag => tag.split('_').join(' '))
console.log('formatted', formattedShared);
  const productName = props.location.state.product.productName
  const shared = formattedShared.map(tag => <PassCard tag={tag} />)
  const divergent = formattedDivergent.map(tag => <RestrictionCard tag={tag} />)


  return (
    <div>
      {/* <Typography variant="h3">{productName}</Typography> */}
      <div>{shared}</div>
      <div>{divergent}</div>
    </div>
       
  )
}

export default DisplayProduct
