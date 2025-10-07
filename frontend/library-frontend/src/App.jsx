import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <h1>Library Management System</h1>
      <div className='library-timing'>
        Library timings :
        <ul>
          <li>Opening 9:00 am</li>
          <li>Closing 6:00 pm</li>
        </ul>
      </div>

      <Footer />

    </>
  )
}

export default App
