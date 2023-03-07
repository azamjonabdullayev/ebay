import React from 'react'
import Navbar from './components/Navbar/NavbarHeader'
import Sea from './components/Navbar-footer/NavbarFooter'
import {Routes,Route}from 'react-router-dom'
import Home from './UI/home' 
import Shop from './Pages/Shop'
import News from './Pages/news'
import Register from './Pages/register'
import Login from './Pages/login'
import Category from './Pages/category'
import Product from './Pages/category/product'
import Footer from './components/footer/Footer'
import Page from './components/Page'
import Search from './Pages/Search'
import Dark from './components/Page/dark'

function App() {
  return location.pathname.includes('/auth')?(<></>): (
    <>
      <div className="container">
      <Navbar />
      <Sea />
      
      <main className="main">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop/:id' element={<Shop/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home/:id' element={<Page/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/category/product/:id' element={<Product/>}/>
        <Route path='/search/:title' element={<Search/>}/>
        <Route path='/search/:title' element={<Sea/>}/>
        <Route path='/dark/:id' element={<Dark/>}/>



        






      </Routes>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App