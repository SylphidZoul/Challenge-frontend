import React from 'react'
import { createPortal } from 'react-dom'
import { SpinnerWrapper, Spinner } from './styles'
import PropTypes from 'prop-types'

export const SpinnerToast = ({ isFetching }) => {
  return (
    isFetching &&
      createPortal(
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>,
        document.getElementById('toast')
      )
  )
}

SpinnerToast.propTypes = {
  isFetching: PropTypes.bool.isRequired
}
