import React from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login'
import ProductList from './Pages/ProductList';


const App =()=> {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products/:pid' element={<ProductList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
