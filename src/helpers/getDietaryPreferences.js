import axios from 'axios';

export default async function getDietaryPreferences() {
  const preferences = await axios.get('http://3853b041.ngrok.io/api/restrictions');

  return preferences;
}
