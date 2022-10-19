import React, { Component } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import Index from './Components/Index/Index'
import Navbar from './Components/Navbar/Navbar'



export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route  exact path="/" element={<Index />} />
    <Route path='/contact' element={<Contact />} />
      </Routes>
      
   
    

     </BrowserRouter></div>
    
    )
  }
}
