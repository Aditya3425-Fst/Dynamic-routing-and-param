import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
export default function App() {
  return (
    <>
      <Routes>
        {/* adding two path param /:user1 and /:id  */}
        <Route path='/:user1/:id' element={<Home/>} />
        <Route path='/signin' element={<Login/>} />
      </Routes>
    </>
  )
}
