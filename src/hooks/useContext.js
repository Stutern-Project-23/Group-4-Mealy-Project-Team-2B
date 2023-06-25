import { createContext } from 'react';

const UserContext = createContext(null);
UserContext.displayName="user-context"

export default UserContext