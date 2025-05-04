import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList.jsx'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div>
        <Navbar/>
        <h1>Catalogo de productos:</h1>
        <ProductList/>
        
    </div>
  )
}

export default HomeScreen