import React from 'react'
import useUserRestrictions from 'hooks/useUserRestrictions'
import { RestrictionCard, PassCard, SummaryCardAvoid, SummaryCardPass} from './components'
import { makeStyles } from '@material-ui/styles';


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

const {compareRestrictions} = useUserRestrictions();

const product = props.location.state.product

const {sharedRestricitions, divergentRestrictions} = compareRestrictions(product)

const formattedShared = sharedRestricitions.map(tag => tag.split('_').join(' '))

const formattedDivergent = divergentRestrictions.map(tag => tag.split('_').join(' '))

const productName = props.location.state.product.productName
const productId = props.location.state.product.productId


const shared = formattedShared.map(tag => <PassCard tag={tag} />)

const divergent = formattedDivergent.map(tag => <RestrictionCard tag={tag} />)

  return (
    <div>
      {divergent.length > 0 ?
            <SummaryCardAvoid
            productName={productName}
            shared={shared}
            divergent={divergent}
            /> :
            <SummaryCardPass
            productName={productName}
            productId={productId}
            shared={shared}
            divergent={divergent}
            />}
      
    </div>
  )
}

export default DisplayProduct
