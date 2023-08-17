import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './NumberCards.scss'

const NumberCards = () => {

  const [cartMelumatlari , setCartMelumatlari] = useState(null)

  useEffect(()=>{
    axios.get ('/src/json/NumberCard.json')
    .then (gelenMelumat=>setCartMelumatlari(gelenMelumat.data))
  },[])

  return (


    <div className='number-cards'>
        <div className='row'>

        {cartMelumatlari &&
          cartMelumatlari.map((cartMelumati) => (
      <Card
        
        cardImg={cartMelumati.CardImg}
        cardNumber={cartMelumati.CardNumber}
        cardTitle={cartMelumati.CardTitle}
        cardText={cartMelumati.CardText}
      />
    ))}
        </div>
    </div>
  )
}

export default NumberCards