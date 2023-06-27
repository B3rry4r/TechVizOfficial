import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Tabs from './Components/Tabs/Tabs';
import FullPageCarousel from './Pages/FullPageCarousel/FullPageCarousel';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';


const App

  = () => {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/tab' element={<Tabs/>} />
          <Route path='/test' element={<CountdownTimer/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      )
  }

export default App

