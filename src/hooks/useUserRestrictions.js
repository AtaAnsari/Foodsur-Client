import { useContext } from 'react';
import RestrictionsContext from 'context/restrictionsContext';

// Returns a function which produces a set of restrictions the user has and the product meets, and a set of restrictions the user has and the product doesn't meet
export default function useUserRestrictions() {

  const { restrictions } = useContext(RestrictionsContext);

  const compareRestrictions = function (product) {

    const sharedRestricitions = [];
    const divergentRestrictions = [];

    restrictions.healthTags.forEach(tag => {
      let tagType = "Health Restriction"

      if (product.healthTags.includes(tag)) {
        let cardColour = "#EBFFEB"
        sharedRestricitions.push([tag, tagType, cardColour])
      } else {
        let cardColour = "#FFF0F0"
        divergentRestrictions.push([tag, tagType, cardColour])
      }
    })


    restrictions.dietTags.forEach(tag => {
      let dietTagType = "Dietary Preference"

      if (product.dietTags.includes(tag)) {
        let cardColour = "#EBFFEB"
        sharedRestricitions.push([tag, dietTagType, cardColour])
      } else {
        let cardColour = "#FEFBE7"
        divergentRestrictions.push([tag, dietTagType, cardColour])
      }
    })

    return {
      sharedRestricitions,
      divergentRestrictions
    }
  }

  return { compareRestrictions }
}
