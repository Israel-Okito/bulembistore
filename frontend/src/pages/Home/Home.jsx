
import React from 'react'
import Categories from '../../components/Categories/Categories'
import Slider from '../../components/Slider/Slider'
import Featured from '../../components/Featured/Featured'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <Featured type="Nouveautés livre"/>
        <Categories/>
        <Featured type="Meilleures ventes livre" /> 
     
       
    </div>
  )
}

export default Home
