import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/userContext'
import { NotAuthLayout } from '../../styles/mainLayout'
import { FormWrapper, FormHeader, LinkP } from './styles'
import { UserForms } from '../../components/userForms'
import { ErrorToast } from '../../components/errorToast'
import { LoginIcon } from '../../assets/login'
import { SignUpIcon } from '../../assets/signup'

const AuthPage = ({ history, location }) => {
  const { isFetching, error, isAuth, authenticate, setError } = useContext(AuthContext)
  const isLogin = (location.pathname === '/login')

  useEffect(() => {
    if (isAuth) {
      history.replace('/')
    }
  }, [isAuth])

  return (
    <NotAuthLayout>
      <FormWrapper>
        <FormHeader>
          {
            isLogin
              ? (
                <>
                  <LoginIcon />
                  <h3>Sign In</h3>
                </>
                )
              : (
                <>
                  <SignUpIcon />
                  <h3>Sign Up</h3>
                </>
                )
          }
        </FormHeader>

        <UserForms
          isFetching={isFetching}
          onSubmit={authenticate}
          setError={setError}
          isLogin={isLogin}
        />

        <LinkP>
          {
            isLogin
              ? (
                <>
                  Don't have an account?
                  <Link to='/signup'>Sign up now!</Link>
                </>
                )
              : (
                <>
                  Already have an account?
                  <Link to='/login'>Sign in now!</Link>
                </>
                )
          }
        </LinkP>
      </FormWrapper>
      <ErrorToast errorMessage={error} />
    </NotAuthLayout>
  )
}

export default AuthPage
