import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

export default function Layout() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Cinmatic</title>
            </Helmet>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
