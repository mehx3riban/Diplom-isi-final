import React from 'react'
import './BookingSection.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Booking from '../Booking.jsx/Booking'
const BookingSection = () => {
  return (
    <div className='booking-section'>
        <SectionHeading  classAdih2='dark' classAdih4='light' sectionHeadingh2='COFFEE BUILD YOUR BASE.' sectionHeadingh4='What Happens Here' classAdiDivider='divider-dark'  />
       

        <Booking/>
    </div>
  )
}

export default BookingSection