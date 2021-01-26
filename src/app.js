import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import { Navbar } from './components/navbar'
import { Routes } from './routes'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
