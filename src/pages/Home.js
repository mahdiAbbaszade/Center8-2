import React from 'react'
import FirstSlide from '../Component/FirstSlide/FirstSlie'
import Footer from '../Component/Footer/Footer'
import MapAction from '../Component/MapAction/MapAction'
import SecendAction from '../Component/SecendAction/SecendAction'
import ServiceDesk from '../Component/ServiceDesk/ServiceDesk'
import Slide from '../Component/Slide'
import ThirdAction from '../Component/ThirdAction/ThirdAction'
import SlideBar from '../Component/SideBar'
import LayoutUser from '../Component/layout/LayoutUser'



const Home = () => {
  return (
    <LayoutUser>
    <div>
      <FirstSlide />
      <SecendAction/>
      <Slide/>
      <ThirdAction/>
      <ServiceDesk/>
      <MapAction/>
      <Footer/>
    </div>
    <SlideBar/>
    </LayoutUser>
  )
}


export default Home