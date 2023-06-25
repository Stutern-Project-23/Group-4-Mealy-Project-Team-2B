import { useMemo } from 'react'
import PropTypes from 'prop-types'
import UserContext from '../hooks/useContext';
import useFindUser from '../hooks/useFindUser'

const AuthProvider = ({ children }) => {
  const { user, setUser, isLoading } = useFindUser();

  const authState = useMemo(
    () => ({ user, setUser, isLoading }),
    [user, isLoading],
  );
  console.log("auth state",user)

  return (
    <UserContext.Provider value={authState}>{children}</UserContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider;