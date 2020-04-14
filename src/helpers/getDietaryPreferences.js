import axios from 'axios';

export default async function getDietaryPreferences() {
  const preferences = await axios.get('http://localhost:8080/api/restrictions');

  return preferences;
}
