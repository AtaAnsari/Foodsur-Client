import { useState, useEffect } from "react"
import axios from "axios"

export function useApiData() {
  const [state, setState] = useState({
    healthTags: [],
    dietTags: [],
    productName: ""
  });


  const FetchApiData = function (upcCode) {
    const upcUrl = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&upc=${upcCode}&app_id=7e7111eb&app_key=e019f6e0efdddb975bcbea5eeeb91c8c`
    let upcIngredients

    axios.get(upcUrl)
      .then(res => {
        upcIngredients = {
          "ingredients": [
            {
              "quantity": 1,
              "measureURI": res.data.hints[0].measures[0].uri,
              "foodId": res.data.hints[0].food.foodId
            }
          ]
        }
        console.log(upcIngredients);
      })
      .then(res => axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=edc61ca8&app_key=b9f17ae7284f840d6dd1ef3cbcdcde9e`,
        upcIngredients))
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  //   // Determines which day is currently selected by the user
  //   function getDayFromDays(day, daysArray){
  //     for (const d of daysArray){
  //       if(d.name === day){
  //         return d.spots
  //       }
  //     }
  //   }
  //   // Determine the index of the currently selected day in the array of days. 
  //   function getDayIndex(day, daysArray){
  //     for (const d of daysArray){
  //       if(d.name === day){
  //         return daysArray.indexOf(d)
  //       }
  //     }
  //   }
  // // subtracts from the number of spots remaining when a user books a new appointment. 
  //   function subtractSpot(day) {
  //     const spots = getDayFromDays(day, state.days) - 1
  //     const index = getDayIndex(day, state.days)

  //     setState((state) => ({

  //       ...state,
  //       ...state.days[index ]["spots"]=spots

  //     })
  //     )
  // }
  // // adds to the number of spots remaining when a user cancels an appointment. 
  // function addSpot(day) {
  //   const spots = getDayFromDays(day, state.days) + 1
  //   const index = getDayIndex(day, state.days)

  //   setState((state) => ({

  //     ...state,
  //     ...state.days[index ]["spots"]=spots

  //   })
  //   )
  // }
  // // submits a put request to the api to update the db with the details of a new appt
  //   function bookInterview(id, interview) {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: { ...interview }
  //     };

  //   return  axios.put(`/api/appointments/${id}`, appointment)
  //     .then(
  //       (res) => {
  //         setState((state) => ({

  //           ...state,
  //           appointments: {
  //             ...state.appointments,
  //             [id]: appointment
  //           }
  //         })
  //         )
  //       }

  //     )
  // }
  // // submits a delete request to the api to update the db when and appointment is deleted
  // function deleteInterview(id) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   };

  // return  axios.delete(`/api/appointments/${id}`)
  //   .then(
  //     (res) => {
  //       setState((state) => ({

  //         ...state,
  //         appointments: {
  //           ...state.appointments,
  //           [id]: appointment
  //         }
  //       })
  //       )
  //     }

  //   )
  // }

  return {
    FetchApiData
  };

}
