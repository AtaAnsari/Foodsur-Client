import React, { useState } from 'react';
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
  const preferences = useDietaryPreferences();

  const [selectedPreferences, setSelectedPreferences] = useState([]);
  
  const handleSelect = id => {
    const selectedIndex = selectedPreferences.indexOf(id);
    let newSelectedPreferences = [];

    if (selectedIndex === -1) {
      newSelectedPreferences = [...selectedPreferences, id];
    } else {
      newSelectedPreferences = [...selectedPreferences.slice(0, selectedIndex), ...selectedPreferences.slice(selectedIndex + 1)];
    }

    setSelectedPreferences(newSelectedPreferences);
  }

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
