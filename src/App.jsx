import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Edit from './pages/Edit'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/pro' element={<Products/>}/>
       <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>      
    </>
  )
}

export default App
