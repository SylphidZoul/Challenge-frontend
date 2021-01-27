import React, { useRef } from 'react'
import { Label, Input, Button } from './styles'
import PropTypes from 'prop-types'

export const SignInForm = ({ isFetching, onSubmit, setError }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!emailRef.current.value || !passwordRef.current.value) {
      return setError('All fields are required!')
    }

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    onSubmit(user, 'login')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        E-mail
      </Label>
      <Input
        type='email'
        autoComplete='off'
        ref={emailRef}
      />
      <Label>
        Password
      </Label>
      <Input
        type='password'
        ref={passwordRef}
      />
      <Button
        type='submit'
        disabled={isFetching}
      >
        {isFetching ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  )
}

SignInForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}
