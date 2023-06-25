import PropTypes from 'prop-types'
import { useEffect, useReducer, useState, useMemo } from 'react'
import {
  AuthDispatch,
  DispatchContext,
  getCurrentUser,
  StateContext,
} from '../utilities/auth'

function authReducer(state, action) {
  console.log("action", action)
  switch (action.type) {
    case AuthDispatch.Authenticated:
    case AuthDispatch.SignIn: {
      const user = {
        _id: action.payload?.data._id,
        name: action.payload?.data.name,
        email: action.payload?.data.email,
        phoneNumber: action.payload?.data.phone_number,
        address: action.payload?.data.address,
        createdAt: action.payload?.data.createdAt,
        isVerified: action.payload?.data.isVerified,
        receivePromotionalEmails: action.payload?.data.receivePromotionalEmails,
        access_token: action.payload?.data.accessToken,
        refreshToken: action.payload?.data.refreshToken,
        updatedAt: action.payload?.data.updatedAt,
        photo: action.payload?.data.profilePhoto ?? '/avatar.png',
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
  const [isLoading, setIsLoading] = useState(false)

  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false })

  // useEffect(() => {
  //   const userdata = localStorage.getItem("userdata");
  //   const data = JSON.parse(userdata);

  //   try {
  //     getCurrentUser(state.user?.email)
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
  console.log("auth state",state)

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