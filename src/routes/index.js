import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './privateRoutes'
import { SpinnerToast } from '../components/spinnerToast'

const Home = lazy(() => import('../pages/home'))
const Transactions = lazy(() => import('../pages/transactions'))
const Profile = lazy(() => import('../pages/profile'))
const Auth = lazy(() => import('../pages/auth'))
const NotFound = lazy(() => import('../pages/404'))

export const Routes = () => {
  return (
    <>
      <Suspense
        fallback={<SpinnerToast isFetching />}
      >
        <Switch>
          <PrivateRoute path='/' PrivateComponent={Home} exact />
          <PrivateRoute path='/transactions' PrivateComponent={Transactions} />
          <PrivateRoute path='/profile' PrivateComponent={Profile} />
          <Route path='/login' component={Auth} />
          <Route path='/signup' component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
