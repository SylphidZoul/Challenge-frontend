import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import { Routes } from './routes'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
