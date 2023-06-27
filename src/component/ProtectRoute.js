import { useEffect } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom'
import PropTypes from "prop-types";
import { useAuth } from '../utilities/auth'

const UNPROTECTED_PAGE_PATHS = [
  '/',
	'/guest',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
	'/forgot-password-verification',
	'/sign-up-verification',
  '/create-new-password',
  '/reset-password',
  '/reset-password-verification',
]

export const isUnprotected = (path) => UNPROTECTED_PAGE_PATHS.includes(path.toLowerCase())
export const isProtected = (path) => !isUnprotected(path.toLowerCase())

export const ProtectRoute = ({ children }) => {
  const {
    state: { isAuthenticated, isLoading },
  } = useAuth()

	const location = useLocation();
  const history = useNavigate()

  useEffect(() => {
    console.log(location.pathname)
    console.log("isAuthenticated =",isAuthenticated)
    console.log("this page is unProtected =",UNPROTECTED_PAGE_PATHS.includes(location.pathname))
  }, [location.pathname])

  if (isLoading) {
    return <div>LOADING</div> // <LoadingScreen />
  } else if (isAuthenticated && isUnprotected(location.pathname)) {
    history("/auth-user")
  }else if (isAuthenticated && isProtected(location.pathname)) {
    history("/auth-user")
  }else if (!isAuthenticated && isProtected(location.pathname)) {
    history("/sign-in")
  }

  return children ? children : <Outlet />;
}

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};