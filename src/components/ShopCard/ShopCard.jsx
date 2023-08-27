import React from 'react'
import './ShopCard.scss'
import StarRating from '../StarRating/StarRating'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice'


const ShopCard = ({cardImg,cardName,propstar,cardPrice,clickprops}) => {
    const dispatch =useDispatch()

    // const handleAddToCart = ({clickprops}) => {
    //     dispatch(addToCart({clickprops}))
    // };

    const handleAddToCart = () => {
        // Dispatch the addToCart action with the product details as payload
        dispatch(addToCart({
          id: Math.random(), // You can use a unique ID here
          name: cardName,
          price: cardPrice,
          quantity: 1, // You can set the quantity as needed
          // ...other product details
        }));
      };

      

  return (
    <div className='shop-card'>
        <div className='shop-card__img'>
            <img src={cardImg} alt="" />

            <div className='shop-card__overlay d-flex align-items-center justify-content-center' onClick={handleAddToCart}>
                <LiaShoppingBagSolid className='shop-card__icon'/>
                <h3 className='shop-card__overlay-h3'>add to cart</h3>
        </div>
        </div>
        
        <div className='shop-card__content'>
            <h2 className='class-h2 shop-card__name'>
                {cardName}
            </h2>
            <StarRating rating={propstar} />
            <p className='shop-card__price'>
                ${cardPrice}
            </p>
        </div>
    </div>
  )
}

export default ShopCard