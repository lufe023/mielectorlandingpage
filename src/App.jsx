import './App.css'

import './components/utils/reset.css'
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import { Politica } from './components/Politica';
  const TRACKING_ID = "G-GFM00FG9CE"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  
function App() {

  return (
    <>

  
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/privacity' element={<Politica/>}/>
      
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>
    </>
  )
}

export default App
