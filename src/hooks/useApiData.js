import {useState, useEffect} from "react"
import axios from "axios"

export function useApiData () {
  const [state, setState] = useState({
    healthTags: [],
    dietTags: [],
    productName: ""
  });


  const FetchApiData = function(upcCode) {
    const upcUrl = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&upc=${upcCode}&app_id=${process.env.FOOD_DB_ID}&app_key=${process.env.FOOD_DB_KEY}`
    let upcIngredients
    Promise.new([
      axios.get(upcUrl)
    .then(res => {
           upcIngredients = {"ingredients": [
        {
          "quantity": res.data.parsed[0].quantity,
          "measureURI": res.data.parsed[0].measure.uri,
          "foodId": res.data.parsed[0].food.foodId
        }
      ]}
    })
    .then(res => axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=${process.env.NUTRITION_DB_ID}&app_key=${process.env.NUTRITION_DB_KEY}`,
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
