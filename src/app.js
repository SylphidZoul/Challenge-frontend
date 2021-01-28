import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
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
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
