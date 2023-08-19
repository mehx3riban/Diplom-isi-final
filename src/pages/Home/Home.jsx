import React from 'react'
import Introduction from '../../components/intoduction/Introduction'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import BookingSection from '../../components/Booking.jsx/BookingSection'
import NumberCards from '../../components/NumberCards/NumberCards'
import Application from '../../components/Application/Application'
import CoffeMachines from '../../components/CoffeeMachines/CoffeeMachines'
import VerticalSwiper from '../../components/VerticalSwiper/VerticalSwiper'
import Menu from '../../components/MenuSection/Menu'
import Gallery from '../../components/Gallery-section/Gallery'
import DescriptionCards from '../../components/DescriptionCards/DescriptionCards'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <div>
        <Introduction/>
        <SectionHeading  classAdih2='dark' classAdih4='light' sectionHeadingh2='COFFEE BUILD YOUR BASE.' sectionHeadingh4='What Happens Here' classAdiDivider='divider-dark'  />
        <BookingSection/>
        <NumberCards/>
        <Application/>
        <CoffeMachines/>
        <VerticalSwiper />
        <Menu/>
        <Gallery/>
        <DescriptionCards/>

    </div>
  )
}

export default Home