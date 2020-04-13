
import { useState, useEffect } from "react"
import axios from "axios"
import useUserRestrictions from 'hooks/useUserRestrictions'

export default function useApiData() {

  let product = {}

  const FetchApiData = function (upcCode) {
    const upcUrl = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&upc=${upcCode}&app_id=7e7111eb&app_key=e019f6e0efdddb975bcbea5eeeb91c8c`
    let upcIngredients

    return axios.get(upcUrl)
      .then(res => {
        const name = res.data.hints[0].food.label
        product.productName = name
        upcIngredients = {
          "ingredients": [
            {
              "quantity": 1,
              "measureURI": res.data.hints[0].measures[0].uri,
              "foodId": res.data.hints[0].food.foodId
            }
          ]
        }
      })

      .then(res => axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=edc61ca8&app_key=b9f17ae7284f840d6dd1ef3cbcdcde9e`,
        upcIngredients))
      .then(res => isolateProductData(res))
      .then(res => {
        return product
      })
      .catch(err => console.log(err))
  }

  const isolateProductData = function (res) {
    const healthLabels = res.data.healthLabels;
    const dietLabels = res.data.dietLabels;
    product.healthTags = healthLabels
    product.dietTags = dietLabels
    console.log("THIS IS THE RESPONSE", res)
    console.log("THIS IS OUR PRODUCT", product)
  }

  return {
    FetchApiData,
  };

}
