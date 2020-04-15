import { useState, useEffect } from "react"
import axios from "axios"

export default function useUserRestrictions() {
  const userRestrictions = {
    healthTags: ['SUGAR_CONSCIOUS', 'PEANUT_FREE', 'TREE_NUT_FREE', 'ALCOHOL_FREE'],
    dietTags: []
  }


  const compareRestrictions = function (product) {
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
