import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useApiData from 'hooks/useApiData';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(5)
  },
  foodItem: {
    textTransform: 'capitalize'
  }
}));

const SearchResultsTable = ({ searchResults }) => {
  const classes = useStyles();

  const history = useHistory();

  const { isolateProductData } = useApiData()

  // Gets product data from the item and sends it to /display-product
  const handleClick = async item => {
    history.push({
      pathname: '/loading'
    })
    const product = {
      productName: item.food.label,
      productId:item.food.foodId
    }
    const ingredients = {
      'ingredients': [
        {
          'quantity': 1,
          'measureURI': item.measures[0].uri,
          'foodId': item.food.foodId
        }
      ]
    }
    const productData = await isolateProductData(ingredients, product);

    history.replace({
      pathname: '/display-product',
      state: { product: productData}
    })
  }

  return (
    <>
      <Typography
        align="center"
        variant="h4"
      >
        {searchResults.length === 0 ?
          'No results. Please try a different search term' :
          'Please choose the food item you would like to see:'
        }
      </Typography>
      <div className={classes.content}>
        <Paper>
          <Table>
            <TableBody>
              {searchResults.map((item, idx) => (
                <TableRow
                  key={idx}
                  onClick={() => handleClick(item)}
                >
                  <TableCell className={classes.foodItem}>
                    {item.food.label.toLowerCase()}
                  </TableCell>
                  <TableCell
                    align="right"
                  >
                    <i className="fas fa-chevron-right"/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ Table>
        </Paper>
      </div>
    </>
  )
}

export default SearchResultsTable;
