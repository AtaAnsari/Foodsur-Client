import { useContext } from 'react';
import RestrictionsContext from 'context/restrictionsContext';

// Returns a function which produces a set of restrictions the user has and the product meets, and a set of restrictions the user has and the product doesn't meet
export default function useUserRestrictions() {
  const { restrictions } = useContext(RestrictionsContext);

  const compareRestrictions = function(product) {
    console.log('PRODUCT', product);

    const sharedRestricitions = []
    const divergentRestrictions = []

    restrictions.healthTags.forEach(tag => {
      if (product.healthTags.includes(tag)) {
        sharedRestricitions.push(tag)
      } else {
        divergentRestrictions.push(tag)
      }
    })
    restrictions.dietTags.forEach(tag => {
      if (product.dietTags.includes(tag)) {
        sharedRestricitions.push(tag)
      } else {
        divergentRestrictions.push(tag)
      }
    })

    return {
      sharedRestricitions,
      divergentRestrictions
    }
  }

  return {compareRestrictions}
}
