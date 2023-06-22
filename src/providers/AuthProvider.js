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

  useEffect(() => {
    const sampleUser = {
      "data": {
        "name": "Enoch",
        "email": "tester6+3@test.com",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0ODhjZmJmNGUwYmIyZWIwYmJmMmQiLCJpYXQiOjE2ODc0NTYwNTMsImV4cCI6MTY4NzQ1Njk1M30.6WKT95zQaRB060dvtHTJbQJTi-R0KYHReVw4ojGmNUo"
      }
    }

    dispatch({
      type: AuthDispatch.Authenticated,
      payload: sampleUser.data,
    })
    setIsLoading(false)
    // getCurrentUser("mekepe2388@aaorsi.com")
    //   .then(async (user) => {
    //     console.log(user)
    //     if (user) {
    //       dispatch({
    //         type: AuthDispatch.Authenticated,
    //         payload: user,
    //       })
    //     }
    //   })
    //   .finally(() => setIsLoading(false))
  }, [])

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
