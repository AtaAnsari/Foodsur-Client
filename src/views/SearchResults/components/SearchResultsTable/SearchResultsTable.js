import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core';

const SearchResultsTable = ({ searchResults }) => {

  return (
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
  )
}

export default SearchResultsTable;
