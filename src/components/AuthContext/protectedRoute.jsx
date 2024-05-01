import {Navigate} from 'react-router-dom'

//If user is not authenticated sends the user to the home page
//if the user is signed in/authenticated the user is sent to the protected page,which is represented as children
export const ProtectedRoute = ({children, user}) => {
  return user ? children : <Navigate to="/"></Navigate>
}
