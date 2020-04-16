import axios from 'axios';

export default async function getDietaryPreferences() {
  const preferences = await axios.get('/api/restrictions');

  return preferences;
}
