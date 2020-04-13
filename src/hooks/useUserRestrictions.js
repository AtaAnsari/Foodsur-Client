import { useState, useEffect } from "react"
import axios from "axios"

export default function useUserRestrictions() {
  const [userRestrictions, setUserRestrictions] = useState({
    healthTags: ["SUGAR_CONSCIOUS", "PEANUT_FREE", "TREE_NUT_FREE", "ALCOHOL_FREE", "STONE_FREE"],
    dietTags: []
  });


  const compareRestrictions = function (product) {

    console.log(product);

    const sharedRestricitions = []
    const divergentRestrictions = []
    product.healthTags.forEach(tag => {
      if (userRestrictions.healthTags.includes(tag)) {
        sharedRestricitions.push(tag)
      } else {
        divergentRestrictions.push(tag)
      }
    })
    const restrictionData = {
      sharedRestricitions,
      divergentRestrictions
    }
    return restrictionData
  }

  return compareRestrictions
}
