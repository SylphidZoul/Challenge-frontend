import React from 'react'
import { createPortal } from 'react-dom'
import { SpinnerWrapper, Spinner } from './styles'

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
