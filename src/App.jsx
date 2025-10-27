import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from './pages/Login/AuthPage'
import Nav from './section/Nav';
import Footer from './section/Footer';
import Dashboard from './pages/Dashboard/Dashboard'
import FlightDetails from './pages/FlightDetails/FlightDetails'
import BookingReviewPage from './pages/Booking/BookingReviewPage'
import Random from './pages/Random/Random'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet /> {/* renders child routes here */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className='w-full'>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />

          <Route path="/MainPage" element={<Layout />}>
            <Route index element={<Dashboard />} /> {/* default route */}
            <Route path="/MainPage/flight" element={<FlightDetails />} />
            <Route path="/MainPage/booking" element={<BookingReviewPage />} />
            <Route path="*" element={<Random />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
