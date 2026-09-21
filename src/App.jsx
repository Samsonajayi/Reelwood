import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandindPage.jsx'
import BookingTicketPage from './pages/BookingTicketPage.jsx'
import Authentication from './Authentication/auth.jsx'
import Cardpayment from './components/CardPayment.jsx'
import MyDashboard from './pages/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookTicket" element={<BookingTicketPage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/cardpayment" element={<Cardpayment />} />
        <Route path="/myDashboard" element={<MyDashboard />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
