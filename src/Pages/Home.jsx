import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import ProductBox from '../Components/ProductBox'
import Footer from '../Components/Footer'
import TrendingProducts from '../Components/TrendingProducts'
import Sale from '../Components/Sale'
import NewArrivals from '../Components/NewArrivals'
import Vibe from '../Components/Vibe'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Category/>
      <TrendingProducts/>
      <Sale/>
      <NewArrivals/>
      <Vibe/>
      <Footer/>
    </div>
  )
}

export default Home
