import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RestrictionsContext from 'context/restrictionsContext';
import { useCookies } from 'react-cookie';

// Checks if restrictions state is set AND cookie "session" exists
// If either does not exist, redirects to /landing
const useLoginValidation = () => {
  const history = useHistory();
  const { restrictions } = useContext(RestrictionsContext);
  const [cookies] = useCookies(['session']);

  if (!restrictions.healthTags || !cookies.session) {
    history.push('/landing');
  }
}

export default useLoginValidation;
