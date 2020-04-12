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

const DietaryPreferencesTable = props => {
  const { handleSelect, selectedPreferences } = props;

  const preferences = useDietaryPreferences();

  return (
    <Paper>
      <Table>
        <TableBody>
          {preferences.map(preference => (
            <TableRow
              key={preference.id}
              onClick={() => handleSelect(preference.id)}
              selected={selectedPreferences.indexOf(preference.id) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedPreferences.indexOf(preference.id) !== -1}
                  color="primary"
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
