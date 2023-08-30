import React,{useEffect} from 'react'
import Introduction from '../../components/intoduction/Introduction'
import BookingSection from '../../components/BookingSection/BookingSection'
import NumberCards from '../../components/NumberCards/NumberCards'
import Application from '../../components/Application/Application'
import CoffeMachines from '../../components/CoffeeMachines/CoffeeMachines'
import VerticalSwiper from '../../components/VerticalSwiper/VerticalSwiper'
import Menu from '../../components/MenuSection/Menu'
import Gallery from '../../components/Gallery-section/Gallery'
import DescriptionCards from '../../components/DescriptionCards/DescriptionCards'
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Introduction/>
        
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