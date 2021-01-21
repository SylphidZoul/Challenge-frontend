import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import { MainLayout } from './styles/layout'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <MainLayout />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
