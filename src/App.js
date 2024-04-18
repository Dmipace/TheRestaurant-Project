import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/cart/Cart'
import Menu from './components/Menu'
import Content from './components/context/Content'
const App = () => {
  return (
    <>  
    <Content>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<><Home/><Menu/></>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
    </Content>
   
    </>  
  )
} 

export default App











