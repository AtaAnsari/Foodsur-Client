import axios from 'axios';

// Returns the 10 most relevant food items for a search term
export const getSearchResults = async(searchTerm) => {
  const url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${searchTerm}&app_id=7e7111eb&app_key=e019f6e0efdddb975bcbea5eeeb91c8c`

  let searchData;
  
  try {
    searchData = await axios.get(url)
  } catch (error) {
    console.log(error)
  }

  // Returns only the items that have a unique name (label)
  const getUniqueItems = items => {
    const uniqueItems = []
    const itemLabels = []
    
    items.forEach(item => {
      if (!itemLabels.includes(item.food.label.toLowerCase())) {
        uniqueItems.push(item);
        itemLabels.push(item.food.label.toLowerCase());
      }
    });

    return uniqueItems;
  }

  // Gets 10 unique items from searchData
  const searchResults = getUniqueItems(searchData.data.hints).slice(0, 10);

  return searchResults;
}
