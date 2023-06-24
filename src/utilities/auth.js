import { createContext, useContext } from "react";
import rest from './rest'

export const AuthDispatch = {
    Authenticated: 'authenticated',
    SignIn: 'sign-in',
    UpdateProfile: 'update-profile',
    SignOut: 'sign-out',
}

// export const signIn = async (username: string, password: string): Promise<CognitoUser> =>
//   Auth.signIn(username, password)

export const SignOut = async (token) => rest().post("/logout")

export const StateContext = createContext({})
StateContext.displayName = 'StateContext'

export const DispatchContext = createContext((action) => {})
DispatchContext.displayName = 'DispatchContext'

export const getCurrentUser = async (email) => rest().get(`/${email}`)

export function useAuth() {
	const state = useContext(StateContext)
	const dispatch = useContext(DispatchContext)
	if (state === undefined || dispatch === undefined) {
		throw new Error('useAuth must be used within a AuthProvider')
	}
	return { state, dispatch }
}
