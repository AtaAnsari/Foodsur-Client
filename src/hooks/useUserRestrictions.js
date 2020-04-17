import { useState, useEffect } from "react"
import axios from "axios"

export default function useUserRestrictions() {
  const [userRestrictions, setUserRestrictions] = useState({
    healthTags: ["SUGAR_CONSCIOUS", "PEANUT_FREE", "TREE_NUT_FREE", "ALCOHOL_FREE"],
    dietTags: []
  });


  const compareRestrictions = function (product) {

    const sharedRestricitions = []
    const divergentRestrictions = []
    userRestrictions.healthTags.forEach(tag => {
      let tagType = "Health Restriction"
      if (product.healthTags.includes(tag)) {
        let cardColour = "#EBFFEB"
        sharedRestricitions.push([tag, tagType, cardColour])
      } else {
        let cardColour = "#FFF0F0"
        divergentRestrictions.push([tag, tagType, cardColour])
      }
    })
    userRestrictions.dietTags.forEach(tag => {
      let dietTagType = "Dietary Preference"
      if (product.dietTags.includes(tag)) {
        let cardColour = "#EBFFEB"
        sharedRestricitions.push([tag, dietTagType, cardColour])
      } else {
        let cardColour = "#FEFBE7"
        divergentRestrictions.push([tag, dietTagType, cardColour])
      }
    })
    console.log('SHARED-RESTRICTIONS', sharedRestricitions);
    console.log('DIVERGENT-RESTRICTIONS', divergentRestrictions);

    return {
      sharedRestricitions,
      divergentRestrictions
    }
  }

  return { compareRestrictions }
}
