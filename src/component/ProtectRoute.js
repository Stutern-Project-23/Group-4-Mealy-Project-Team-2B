import { useLocation, Navigate, Outlet } from 'react-router-dom'
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

export const isUnprotected = (path) => UNPROTECTED_PAGE_PATHS.includes(path)
export const isProtected = (path) => !isUnprotected(path)

export const ProtectRoute = ({ children }) => {
  const {
    state: { isAuthenticated, isLoading },
  } = useAuth()

	const location = useLocation();

  if (isLoading) {
    return <div>LOADING</div> // <LoadingScreen />
  } else if (!isAuthenticated && !UNPROTECTED_PAGE_PATHS.includes(location.pathname)) {
      return <Navigate to="/sign-in" replace />;
  } else if (isAuthenticated && UNPROTECTED_PAGE_PATHS.includes(location.pathname)) {
      return <Navigate to="/auth-user" replace />;
  }

  return children ? children : <Outlet />;
}

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};