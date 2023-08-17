import React from 'react'

const CoffeeMachine = ({machineImg,machineName,machineText}) => {
  return (
    <div className=' col-12 col-md-6 col-lg-3 '  >
        <div className=' coffee-machine ' >
            <div className='machines-img'>
                <img src={machineImg} alt="" />
            </div>
            <h3 className='machines-name'>{machineName}</h3> 
            <p className='machines-text'>{machineText}</p>
        </div>
            
    </div>
  )
}

export default CoffeeMachine