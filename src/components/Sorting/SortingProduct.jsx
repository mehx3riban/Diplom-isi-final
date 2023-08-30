import React from 'react'
import './Sorting.scss'
// import Select from 'react-select'

const SortingProduct = ({setSort,filerlenenProductSayi}) => {

    // const customStyles = {
    //     control: (provided, state) => ({
    //       ...provided,
    //       fontFamily: state.isSelected ? 'var(--main-font)' : 'var(--main-font)' ,
    //       margin:0,
    //       padding:0,
    //       borderRadius:'none',
    //       border: state.isFocused ? 'none' : 'none',
    //       boxShadow: 'none',
    //       '&:hover': {
    //         border: state.isFocused ? 'none' : 'none',
    //       },
    //     }),

    //     option: (provided, state) => ({
    //         ...provided,
    //         fontFamily: state.isSelected ? 'var(--main-font)' : 'var(--main-font)' ,
    //         // backgroundColor: state.isSelected ? '#c7a17a' : 'white',
    //         // padding:'6px 5px',
    //         fontSize:'14px',
    //         backgroundColor: state.isSelected ? '#c7a17a' : '#f0f0f0',
    //         color: state.isSelected ? 'white' : 'black',
    //         padding:'7px 5px',
    //         '&:hover': {
    //                 cursor:'pointer'
    //         }, 
    //         '&:active':{
    //             backgroundColor : "#f0f0f0",
    //             color: 'black'
    //         }   
    //       }),
        
    //   };
    //   const options = [
    //     { value: "dec", label: "sort by price: high to low" },
    //     { value: "inc", label: "sort by price: low to high" },
    //   ];
  

    return (
    <div className='mb-4 sort-section d-flex justify-content-between'>
        <div className='filterlenmis-say'>
            show all {filerlenenProductSayi} products
        </div>
        <div>


            <select onChange={e=> setSort(e.target.value)} className='sort-select' name="" id="">
                <option className='sort-option' disabled>sort by</option>
                <option className='sort-option' value='inc'>sort by price: low to high </option>
                <option className='sort-option' value='dec'>sort by price : high to low</option>
            </select>
        </div>
    </div>
  )
}

export default SortingProduct