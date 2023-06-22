import { useNavigate, useLocation } from 'react-router-dom'
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
]

export const isUnprotected = (path) => UNPROTECTED_PAGE_PATHS.includes(path)
export const isProtected = (path) => !isUnprotected(path)


export const ProtectRoute = ({ children }) => {
  const {
    state: { isAuthenticated, isLoading },
  } = useAuth()

	const history = useNavigate();
	const location = useLocation();

  if (typeof window) {
    if (isLoading) <div>LOADING</div>
		else if (!isAuthenticated && isProtected(location.pathname)) {
      history('/sign-in')
    }
  }

  return children
}

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};