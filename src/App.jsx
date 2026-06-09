import React from 'react'
import Home from './pages/Home'
import Categories from './pages/Categories'
import SmoothScroll from './componets/SmoothScroll'
import Shop from './pages/Shop'

const App = () => {
  return (

    <SmoothScroll>
    <div className='w-full h-screen '>
      <Home/>
      <Categories/>
      <Shop/>
    </div>
    </SmoothScroll>
  )
}

export default App