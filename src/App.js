import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Tabs from './Components/Tabs/Tabs';
import Products from './Pages/Products/Products';
import ES from './Pages/Services-List/ES/ES';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import TheHub from './Pages/The-Hub/TheHub';
import ErrorPage from './Components/404/ErrorPage';
import WD from './Pages/Services-List/WD/WD';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/tab' element={<Tabs />} />
          <Route path='/the-hub' element={<TheHub />} />
          <Route path='/the-hub/embedded-systems' element={<ES />} />
          <Route path='/the-hub/website-development' element={<WD />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

