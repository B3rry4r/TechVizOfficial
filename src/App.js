import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
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
import SignUp from './Pages/Sign-Up/SignUp';
import SignIn from './Pages/Sign-In/SignIn';


const App = () => {

  const currentUser = true;

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/sign-up' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/the-hub/embedded-systems',
          element: <ES />
        },
        {
          path: '/the-hub/website-development',
          element: <WD />
        },
        {
          path: '/the-hub',
          element: <TheHub />
        },
        {
          path: '*',
          element: <ErrorPage />
        },
      ]
    },
    {
      path: '/sign-up',
      element: <SignUp/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
  ])

  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

