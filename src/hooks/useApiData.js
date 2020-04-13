import { useState, useEffect } from "react"
import axios from "axios"
import useUserRestrictions from 'hooks/useUserRestrictions'

export default function useApiData() {

  const FetchApiData = async function (upcCode) {
    const upcUrl = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&upc=${upcCode}&app_id=7e7111eb&app_key=e019f6e0efdddb975bcbea5eeeb91c8c`
    let upcIngredients
    const res = await axios.get(upcUrl)
        const name = res.data.hints[0].food.label
        upcIngredients = {
          "ingredients": [
            {
              "quantity": 1,
              "measureURI": res.data.hints[0].measures[0].uri,
              "foodId": res.data.hints[0].food.foodId
            }
          ]
        }
      const product = {productName: name}
      return {
        upcIngredients,
        product
        }
      
    }
  

  const isolateProductData = async function (upcIngredients, product) {
      const ingredients = upcIngredients

      const res = await axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=edc61ca8&app_key=b9f17ae7284f840d6dd1ef3cbcdcde9e`,
        ingredients)
      const healthLabels = res.data.healthLabels;
      const dietLabels = res.data.dietLabels;
      product.healthTags = healthLabels
      product.dietTags = dietLabels
      // .catch(err => console.log(err))
      return product
  }

  return {
    FetchApiData,
    isolateProductData
  };

}
