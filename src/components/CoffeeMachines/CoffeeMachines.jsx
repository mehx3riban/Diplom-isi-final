import React from 'react'
import './CoffeeMachine.css'
import machine1 from '../../assets/images/machines-img/home-1-icon-img-1.png'
import machine2 from '../../assets/images/machines-img/home-1-icon-img-2.png'
import machine3 from '../../assets/images/machines-img/home-1-icon-img-3.png'
import machine4 from '../../assets/images/machines-img/home-1-icon-img-4.png'

import CoffeeMachine from './CoffeeMachine'
const CoffeeMachines = () => {
  return (
    <div className='machines-section '>
        <div className='row '>
            <CoffeeMachine machineImg={machine1} machineName='COFFEEMAKER' machineText='Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'/>
            <CoffeeMachine machineImg={machine2} machineName='COFFEEMAKER' machineText='Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'/>
            <CoffeeMachine machineImg={machine3} machineName='COFFEEMAKER' machineText='Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'/>
            <CoffeeMachine machineImg={machine4} machineName='COFFEEMAKER' machineText='Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'/>
        </div>
       
    </div>
  )
}

export default CoffeeMachines