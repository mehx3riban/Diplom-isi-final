import './Booking.css'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {FaCalendarAlt} from 'react-icons/fa'
import {BsFillClockFill} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'

import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import Select from 'react-select'

import times from '../../json/time.json'
import people from '../../json/people.json'

// import Time from './Time'

const BookingSection = () => {
  const [startDate, setStartDate] = useState(new Date());

  const defaultOption = { value: "10:00 AM", label: "10:00 AM" };
  const defaultPeople = {value: "1 People", label: "1 People" }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily:'var(--main-font)',
      margin:0,
      padding:0,
      // width:'80%',
      borderRadius:'none',
      border: state.isFocused ? 'none' : 'none',
      boxShadow: 'none',
      '&:hover': {
        border: state.isFocused ? 'none' : 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      
      padding:'6px 5px',
      fontSize:'14px',
      fontFamily:'var(--main-font)',
      backgroundColor: state.isSelected ? '#c7a17a' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: state.isSelected ? '#c7a17a' : '#f0f0f0',
        cursor:'pointer'
      },
    }),
    // Add more custom styles as needed
  };
  

  return (
    <div  >
       
       <div className='booking-content row'>

       <div className='booking-people col-12 col-md-6 col-lg-3 d-flex  align-items-center'>
            <div>
            <Select options={people}
              className='custom-select'
              styles={customStyles}
              defaultValue={defaultPeople}
            />
            </div>
          
          <div  className='clock-icon'>
            <BsPeopleFill/>
          </div>
          
          
  
        </div>

        <div className='booking-calendar col-12 col-md-6 col-lg-3'>
          <div>
            <span>FOR</span>
          </div>
          <div>
            <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className='calendar-icon' >
            <FaCalendarAlt/>

          </div>

          
        </div>
        
        
       

        <div className='booking-time col-12 col-md-6 col-lg-3 d-flex  align-items-center'>

          <div>
            <span>AT</span>
          </div>

          <div>
          <Select options={times}
              className='custom-select'
              styles={customStyles}
              defaultValue={defaultOption}
            />
          </div>
        
          <div  className='clock-icon'>
            <BsFillClockFill/>
          </div>
          </div>

        <div className='booking-button col-12 col-md-6 col-lg-3'>
          <Button icindekiYazi='book a table' classAdi='btn-brown-dark' />
        </div>

       </div>

      
    </div>
  )
}

export default BookingSection