import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/userContext'

export const PrivateRoute = ({ PrivateComponent, ...rest }) => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={() => (
        isAuth
          ? <PrivateComponent />
          : <Redirect to='/login' />
      )}
    />
  )
}
