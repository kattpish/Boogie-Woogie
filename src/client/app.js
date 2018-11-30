import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import Hero from './pages/Hero'
import Board from './pages/Board'
import Footer from './pages/Footer'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900');

  body {
      height:100%;
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      background-color: #f9f9f9;
  }
`

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Hero></Hero>
            <Board></Board>
            <Footer></Footer>
        </div>
    )
}

export default hot(module)(App);