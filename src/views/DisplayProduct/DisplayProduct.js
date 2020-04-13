import React from 'react'
import { Divider } from '@material-ui/core';

const DisplayProduct = (props) => {
  const productName = props.location.state.product.productName
  const allHealthTags = props.location.state.product.healthTags
  const healthTagsArray = allHealthTags.map(tag => <h2>{tag}</h2>)

  return (
    <div>
      <h1>{productName}</h1>
      {healthTagsArray}
    </div>
  )
}

export default DisplayProduct
