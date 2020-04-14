import React from 'react'
import useUserRestrictions from 'hooks/useUserRestrictions'
import { RestrictionCard, PassCard, ProductExpander } from './components'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }

}));

const DisplayProduct = (props) => {

const classes = useStyles();

const {compareRestrictions} = useUserRestrictions();

const product = props.location.state.product

const {sharedRestricitions, divergentRestrictions} = compareRestrictions(product)

const formattedShared = sharedRestricitions.map(tag => tag.split('_').join(' '))

const formattedDivergent = divergentRestrictions.map(tag => tag.split('_').join(' '))

const productName = props.location.state.product.productName

const shared = formattedShared.map(tag => <PassCard tag={tag} />)

const divergent = formattedDivergent.map(tag => <RestrictionCard tag={tag} />)

  return (
    <div>
      <div className={classes.root}>
        <ProductExpander productName={productName}/>
        <div>{shared}</div>
        <div>{divergent}</div>
      </div>
    </div>
  )
}

export default DisplayProduct
