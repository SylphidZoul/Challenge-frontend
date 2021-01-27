import React from 'react'
import { SignUpForm } from './signUp'
import { SignInForm } from './signIn'
import PropTypes from 'prop-types'

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

UserForms.propTypes = {
  props: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired
  })
}
