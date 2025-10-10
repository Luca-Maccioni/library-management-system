import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SignUp from './components/Auth/SignUp'

const HomePage = () => (
  <>
  <h1>Library Management System</h1>
    <div className='library-timing'>
        Library timings :
        <ul>
          <li>Opening 9:00 am</li>
          <li>Closing 6:00 pm</li>
      </ul>
    </div>
  </>
)

function App() {

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='*' element={<h2>404 - Page non trouvée</h2>}></Route>
        </Routes>
      </main>

      <Footer />

    </>
  )
}

export default App
