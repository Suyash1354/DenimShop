import React, { useState } from 'react'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Shop from './pages/Shop'
import SmoothScroll from './componets/SmoothScroll'
import Loader from './componets/Loader' 
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <div className={`w-full ${isLoading ? 'h-screen overflow-hidden pointer-events-none' : 'min-h-screen'}`}>
        <SmoothScroll>
          <div className='w-full'>
            {/* FIX: Pass isLoading state to Home */}
            <Home isLoading={isLoading} />
            <Categories />
            <Shop />
          </div>
        </SmoothScroll>
      </div>
    </>
  )
}

export default App