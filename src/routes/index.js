import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
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
          <Route path='/' component={Home} exact />
          <Route path='/transactions' component={Transactions} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Auth} />
          <Route path='/signup' component={Auth} />
          <Route path='*' component={NotFound} exact />
        </Switch>
      </Suspense>
    </>
  )
}
