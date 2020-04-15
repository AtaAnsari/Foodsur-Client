import { useCookies } from 'react-cookie';

const [cookies, setCookie] = useCookies(['session']);

const handleCookies = (userId, userRestrictions) => {
  setCookie('session', userId, { path: '/' });
  setCookie('restrictions', userRestrictions, { path: '/' });
}

export default handleCookies;
