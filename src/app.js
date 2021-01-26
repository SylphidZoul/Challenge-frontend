import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />

      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
