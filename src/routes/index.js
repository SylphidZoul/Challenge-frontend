import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { SpinnerToast } from '../components/spinnerToast'

const Home = lazy(() => import('../pages/home'))
const Transactions = lazy(() => import('../pages/transactions'))
const Profile = lazy(() => import('../pages/profile'))
const Login = lazy(() => import('../pages/login'))
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
          <Route path='/login' component={Login} />
          <Route path='*' exact component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
