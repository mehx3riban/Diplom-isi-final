import React,{useEffect} from 'react'
import './Reservation.scss'
import reservImgRigth from '../../assets/images/reserv-img/open-table-img-1.png'
import reservImg from '../../assets/images/headers-images/Team-title-area-parallax-img-2.jpg'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import Booking from '../../components/Booking.jsx/Booking'
const Reservation = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={reservImg} headerText='RESERVATION' strength='200' />

        <div className='reserv-content'>
            <div className='row d-flex align-items-center'>
                
                <div className='reserv-text col-12 col-lg-6 ' >
                    <h2 className='class-h2 reserv-h2 ' data-aos="fade-right"  >RESERVE YOUR TABLE HERE</h2>
                    <div className='reserv-divider'  data-aos="fade-right" ></div>
                    <p className='class-p reserv-p' data-aos="fade-right" >Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                </div>
                
                <div className='col-lg-6 col-12 reserv-img-div'  >
                    <img className='reserv-img' src={reservImgRigth} alt=""  />
                </div>
            </div>
        </div>

        <div className='reserv-booking'>
         <Booking/>

        </div>
        

    </div>
  )
}

export default Reservation