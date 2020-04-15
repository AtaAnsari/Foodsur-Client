// Returns a function which produces a set of restrictions the user has and the product meets, and a set of restrictions the user has and the product doesn't meet
export default function useUserRestrictions() {
  const userRestrictions = {
    healthTags: ['SUGAR_CONSCIOUS', 'PEANUT_FREE', 'TREE_NUT_FREE', 'ALCOHOL_FREE'],
    dietTags: ['LOW_CARB', 'HIGH_PROTEIN']
  };

  const compareRestrictions = function(product) {
    console.log('PRODUCT', product);

    const sharedRestricitions = []
    const divergentRestrictions = []

    userRestrictions.healthTags.forEach(tag => {
      if (product.healthTags.includes(tag)) {
        sharedRestricitions.push(tag)
      } else {
        divergentRestrictions.push(tag)
      }
    })
    userRestrictions.dietTags.forEach(tag => {
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
