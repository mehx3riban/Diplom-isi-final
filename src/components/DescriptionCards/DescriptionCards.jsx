import React,{useEffect,useState} from 'react'
import './DescriptionCard.scss'
import Card from '../Card/Card'
import axios from 'axios'
import SectionHeading from '../SectionHeading/SectionHeading'
const DescriptionCards = () => {

const [desCard , setDesCard] = useState(null)
useEffect(()=>{
     axios.get('/src/json/DescriptionCard.json')
    .then (melumat => setDesCard(melumat.data))
})

  return (
    

    <div className='description-cards-section' >
        
        <SectionHeading classAdiHeader='bg-white' classAdih2='dark' classAdih4='light' sectionHeadingh2='READ OUR LATEST NEWS' sectionHeadingh4='What Happens Here' classAdiDivider='divider-dark' />

        <div className='description-cards'>
            <div className='row'>
                {desCard &&
                desCard.map((birCart) => (
                    <Card
                
                    cardImg={birCart.CardImg}
                    cardDescription={birCart.CardDescripton}
                    cardTitle={birCart.CardTitle}
                    cardText={birCart.CardText}
                    to='/blog'
                    h3classi='desc-title'
                    />
                ))}
            </div>
         
        </div>

       
    </div>
  )
}

export default DescriptionCards