import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(5)
  }
}));

const SearchResultsTable = ({ searchResults }) => {
  const classes = useStyles();

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
                  onClick={() => console.log(item.food.label)}
                >
                  <TableCell>
                    {item.food.label}
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
