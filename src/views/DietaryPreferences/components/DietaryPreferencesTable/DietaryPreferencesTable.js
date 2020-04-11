import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Paper
} from '@material-ui/core';
import useDietaryPreferences from 'hooks/useDietaryPreferences'

const DietaryPreferencesTable = () => {
  const preferences = useDietaryPreferences()

  return (
    <Paper>
      <Table>
        <TableBody>
          {preferences.map(preference => (
            <TableRow
              hover
              key={preference.id}
              // selected={}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  // checked={}
                  color="primary"
                  // onChange={}
                  // value="true"
                />
                {preference.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ Table>
    </Paper>
  )
}

export default DietaryPreferencesTable;
