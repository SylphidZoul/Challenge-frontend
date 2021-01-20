import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>
        Hello
      </h1>
    </BrowserRouter>
  )
}

export default App
