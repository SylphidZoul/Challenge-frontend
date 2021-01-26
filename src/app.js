import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import { Navbar } from './components/navbar'
import { Routes } from './routes'
import { AuthContextProvider } from './context/userContext'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <GlobalStyle />
          <Navbar />
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
