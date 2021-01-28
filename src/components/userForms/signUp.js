import React, { useRef } from 'react'
import { Label, Input, Button, ButtonText } from './styles'
import PropTypes from 'prop-types'

export const SignUpForm = ({ isFetching, onSubmit, setError }) => {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const password2Ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const usernameValue = usernameRef.current.value
    const emailValue = emailRef.current.value
    const passwordValue = passwordRef.current.value
    const password2Value = password2Ref.current.value

    if (!usernameValue || !emailValue || !passwordValue || !password2Value) {
      return setError('All fields are required!')
    }

    if (passwordValue !== password2Value) {
      return setError('The passwords entered do not match!')
    }

    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    onSubmit(user, 'signUp')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Username
      </Label>
      <Input
        type='text'
        autoComplete='off'
        ref={usernameRef}
      />
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
        autocomplete='new-password'
        ref={passwordRef}
      />
      <Label>
        Repeat Password
      </Label>
      <Input
        type='password'
        autocomplete='new-password'
        ref={password2Ref}
      />
      <Button
        type='submit'
        disabled={isFetching}
      >
        <ButtonText isFetching={isFetching}>
          {isFetching ? 'Loading' : 'Submit'}
        </ButtonText>
      </Button>
    </form>
  )
}

SignUpForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}
