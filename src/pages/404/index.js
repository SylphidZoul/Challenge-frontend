import React from 'react'
import { MainLayout, MessageWrapper, ErrorMessage } from './styles'
import { NotFoundIcon } from '../../assets/404'

const NotFound = () => {
  return (
    <MainLayout>
      <MessageWrapper>
        <NotFoundIcon />
        <ErrorMessage>The requested page doesn't exist.</ErrorMessage>
      </MessageWrapper>
    </MainLayout>
  )
}

export default NotFound
