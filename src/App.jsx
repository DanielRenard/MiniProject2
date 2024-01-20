import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Content from './components/Content'

function App() {

  return (
    <div id="app">
      <Header/>
      <NavBar/>
      <Content/>
    </div>
  )
}

export default App
