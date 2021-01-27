import React, { useContext } from 'react'
import { AuthContext } from '../../context/userContext'
import { MainLayout, NotAuthLayout } from '../../styles/mainLayout'
import { MessageWrapper, ErrorMessage, Link } from './styles'
import { NotFoundIcon } from '../../assets/404'

const NotFound = () => {
  const { isAuth } = useContext(AuthContext)
  const Layout = isAuth ? MainLayout : NotAuthLayout

  return (
    <Layout>
      <MessageWrapper>
        <NotFoundIcon />
        <ErrorMessage>The requested page doesn't exist.</ErrorMessage>
        <Link to='/'>{'<- '}Back to home</Link>
      </MessageWrapper>
    </Layout>
  )
}

export default NotFound
