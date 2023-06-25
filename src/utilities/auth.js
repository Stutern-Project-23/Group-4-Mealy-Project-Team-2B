import rest from './rest'

export const getCurrentUser = async (email) => rest().get(`/${email}`)

export default getCurrentUser;