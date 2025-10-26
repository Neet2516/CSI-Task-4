import React from 'react'
import Dashboard from '../pages/Dashboard/Dashboard'
import FlightDetails from '../pages/FlightDetails/FlightDetails'
import { BrowserRouter ,Routes, Route } from 'react-router'
import Random from '../pages/Random/Random'
import BookingReviewPage from '../pages/Booking/BookingReviewPage'

const Hero = () => {
  return (
    <BrowserRouter> 
      <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/flight" element={<FlightDetails/>} />
          <Route path="/booking" element={<BookingReviewPage/>} />
          <Route path ="*" element={<Random/>} />
      </Routes>  
    </BrowserRouter>
  )
}

export default Hero
