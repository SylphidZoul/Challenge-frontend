import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './privateRoutes'
import { SpinnerToast } from '../components/spinnerToast'

const Home = lazy(() => import('../pages/home'))
const Transactions = lazy(() => import('../pages/transactions'))
const Account = lazy(() => import('../pages/account'))
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
          <PrivateRoute path='/account' PrivateComponent={Account} />
          <Route path='/login' component={Auth} />
          <Route path='/signup' component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
