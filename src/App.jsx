import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Feature from './Components/Feature/Feature'
import Aboutus from './Components/Aboutus/Aboutus'


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Aboutus/>
      <Feature/>

    </div>
  )
}

export default App