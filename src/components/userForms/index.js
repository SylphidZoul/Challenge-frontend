import React from 'react'
import { SignUpForm } from './signUp'
import { SignInForm } from './signIn'

export const UserForms = (props) => {
  return (
    <>
      {
        props.isLogin
          ? <SignInForm
              {...props}
            />
          : <SignUpForm
              {...props}
            />
      }
    </>
  )
}
