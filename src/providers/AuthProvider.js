import PropTypes from 'prop-types'
import { useEffect, useReducer, useState, useMemo } from 'react'
import {
  AuthDispatch,
  DispatchContext,
  getCurrentUser,
  StateContext,
} from '../utilities/auth'

function authReducer(state, action) {
  console.log(action)
  switch (action.type) {
    case AuthDispatch.Authenticated:
    case AuthDispatch.SignIn: {
      const user = {
        id: action.payload?.id,
        name: action.payload.name,
        firstName: action.payload?.firstName,
        lastName: action.payload?.lastName,
        email: action.payload?.email,
        phoneNumber: action.payload?.phone_number,
        address: action.payload?.address,
        photo: action.payload?.picture ?? '/avatar.png',
      }

      return {
        isLoading: false,
        isAuthenticated: true,
        user,
      }
    }
    case AuthDispatch.UpdateProfile: {
      const user = action.payload
      return { ...state, user }
    }
    case AuthDispatch.SignOut: {
      return { isAuthenticated: false }
    }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false })

  // useEffect(() => {
  //   const userdata = localStorage.getItem("userdata");
  //   const data = JSON.parse(userdata);

  //   try {
  //     getCurrentUser(state.user?.user.email)
  //     .then(async(user) => {
  //       // console.log(user)
  //       if (user) {
  //         dispatch({
  //           type: AuthDispatch.Authenticated,
  //           payload: user.data,
  //         })
  //       }
  //       return null;
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   } finally{
  //     setIsLoading(false)
  //   }
  // }, [])

  const authState = useMemo(
    () => ({ ...state, isLoading }),
    [state, isLoading],
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={authState}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider;