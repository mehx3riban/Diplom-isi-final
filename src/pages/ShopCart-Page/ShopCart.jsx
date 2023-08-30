import React,{useEffect} from 'react'
import './ShopCart.scss'
import Lottie from 'lottie-react';
import animation from '../../json/animation_lltdr9br.json';
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ShopCartHeaderImg from '../../assets/images/headers-images/shop-title-area.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { UseSelector } from 'react-redux/es/hooks/useSelector'
import {RxCross2} from 'react-icons/rx'
import Button from '../../components/Button/Button';
import { clearCart, decreaseCart, getTotals, increaseCart, removeFromCart } from '../../Redux/cartSlice';


const ShopCart = () => {
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart )

    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart =(cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }

    const handleIncCart =(cartItem)=>{
        dispatch(increaseCart(cartItem))
    }

    const handleClearCart =()=>{
        dispatch(clearCart())
    }
    
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div >
         <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={ShopCartHeaderImg} headerText='Shop Cart' strength='200' />

        <div className='shop-cart__container'>
            {
                cart.cartItems.length === 0 ? (
                    <div className='cart-empty'>
                        <h2 className='cart-empty__title'>Your cart is currently empty.</h2>
                        <div className=' d-flex  '>
                            <div  className='start-shopping'>
                                <span onClick={()=>{navigate('/shop')}}>Return to shop</span>
                            </div>
                            <Lottie animationData={animation}
                             style={{ width: '100px', height: '100px'}}/>
                        </div>
                        
                    </div>
                ) : (
                <div>
                    <div className='cart-desc'>
                        <div className='row d-flex align-items-center '>
                            <div className='col-1'>
                                <h3 className='cart-desc__title'>Cart</h3>
                            </div>
                            <div className='col-4'>
                                <h4 className='cart-desc__colname'>Product</h4>
                            </div>
                            <div className='col-2'>
                                <h4 className='cart-desc__colname'>Price</h4>
                            </div>
                            <div className='col-lg-4 col-md-4 col-3'> 
                                <h4 className='cart-desc__colname'>Quantity</h4>
                            </div>
                            <div className='col-1'>
                                <h4 className='cart-desc__colname'>Total</h4>
                            </div>
                        </div>
                    </div>

                    <div className="cart-items  ">
                        {
                            cart.cartItems?.map((cartItem)=>(
                                <div className="cart-item d-flex align-items-center row" key={cartItem.id}>
                                    <div className='remove col-1'>
                                        <div className=' d-flex justify-content-center align-items-center h-100  '>
                                            <RxCross2 onClick={()=>handleRemoveFromCart(cartItem)} className='remove-icon' size={25}/>
                                        </div>
                                    </div>
                                    <div className='cart-product d-flex align-items-center js col-4' >
                                        <div className='cart-product__img-div'>
                                            <img className='cart-product__img' src={cartItem.productImg} alt="" />
                                        </div>
                                        
                                        <div>
                                        <h3 className='product-name'>{cartItem.productName}</h3>
                                        </div>
                                    </div>

                                    <div className="cart-product-price col-2">
                                        ${cartItem.productPrice}
                                    </div>
                                    
                                    <div className="cart-product-quantity d-flex align-items-center col-lg-4 col-md-4 col-3  ">
                                        <button onClick={()=>handleDecreaseCart(cartItem)} className='product-count_button'>-</button>
                                        <div className="produc-count d-flex align-items-center justify-content-center">{cartItem.cartQuantity}</div>
                                        <button onClick={()=> handleIncCart(cartItem)} className='product-count_button'>+</button>
                                    </div>

                                    <div className='cart-product-total-price col-1'>
                                        ${cartItem.productPrice * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="cart-summary d-flex justify-content-between mt-4">
                        <div>
                             <button onClick={()=> handleClearCart()} className=' clear-cart-btn summary-button'>Clear Cart</button>
                        </div>
                        
                        <div className="cart-checkout">
                            <div className="subtotal d-flex justify-content-between">
                                <span>SubTotal</span>
                                <span className='amount'>${cart.cartTotalAmount}</span>
                            </div>
                            <p className='class-p pb-2 pt-2'>Taxes and shipping calculated at checkout</p>
                            <button className='summary-button'>Check Out</button>
                            <div  className='continue-shopping'>
                            <p  onClick={()=>{navigate('/shop')}} >Continue Shopping</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        
       


         
    </div>
  )
}

export default ShopCart