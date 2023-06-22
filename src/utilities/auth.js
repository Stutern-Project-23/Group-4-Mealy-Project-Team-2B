import { createContext, useContext } from "react";
import get from './rest'
// import PropTypes from "prop-types";
// import useSignIn from "./SignInHook";
// import useSignUp from "./SignUpHook";
import signOut from "../hooks/SignOut";

export const AuthDispatch = {
    Authenticated: 'authenticated',
    SignIn: 'sign-in',
    UpdateProfile: 'update-profile',
    SignOut: 'sign-out',
}

// export const signIn = async (username: string, password: string): Promise<CognitoUser> =>
//   Auth.signIn(username, password)

export const SignOut = async () => signOut()

export const StateContext = createContext({})
StateContext.displayName = 'StateContext'

export const DispatchContext = createContext((action) => {})
DispatchContext.displayName = 'DispatchContext'

export const getCurrentUser = (email) => get('/user/', {email})

export function useAuth() {
	const state = useContext(StateContext)
	const dispatch = useContext(DispatchContext)
	if (state === undefined || dispatch === undefined) {
		throw new Error('useAuth must be used within a AuthProvider')
	}
	return { state, dispatch }
}
