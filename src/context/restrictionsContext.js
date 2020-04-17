import React from 'react';

const RestrictionsContext = React.createContext({
  restrictions: {},
  setRestrictions: () => {}
})

export default RestrictionsContext;
