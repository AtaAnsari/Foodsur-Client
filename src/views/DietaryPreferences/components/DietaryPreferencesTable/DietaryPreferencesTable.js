import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Paper
} from '@material-ui/core';

const DietaryPreferencesTable = () => {
  return (
    <Paper>
      <Table>
        <TableBody>
          <TableRow
            // className={}
            // hover
            // key={}
            // selected={}
          >
            <TableCell padding="checkbox">
              <Checkbox
                // checked={}
                color="primary"
                // onChange={}
                // value="true"
              />
              Low-Fat
            </TableCell>
          </TableRow>
        </TableBody>
      </ Table>
    </Paper>
  )
}

export default DietaryPreferencesTable;
