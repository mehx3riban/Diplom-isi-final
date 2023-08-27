import React,{useEffect} from 'react'
import './ShopCart.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ShopCartHeaderImg from '../../assets/images/headers-images/shop-title-area.jpg'
// import { UseSelector } from 'react-redux/es/hooks/useSelector'

const ShopCart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div >
         <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={ShopCartHeaderImg} headerText='Shop' strength='200' />

        <div className='shop-cart'>
            <div className='container shop-cart__content'>
                <div className='cart-desc'>
                    <div className='row '>
                        <div className='col-lg-1'>
                            <h3>Cart</h3>
                        </div>
                        <div className='col-lg-4'>
                            <h4>Product</h4>
                        </div>
                        <div className='col-lg-2'>
                            <h4>Price</h4>
                        </div>
                        <div className='col-lg-4'> 
                            <h4>Quantity</h4>
                        </div>
                        <div className='col-lg-1'>
                            <h4>Total</h4>
                        </div>
                    </div>
                </div>
                

                <div className='new-product '>
                    <div className='row  '>
                        <div className='col-lg-1'>
                            <h3>sfs</h3>
                        </div>
                        <div className='col-lg-4'>
                            <h4>Product</h4>
                        </div>
                        <div className='col-lg-2'>
                            <h4>Price</h4>
                        </div>
                        <div className='col-lg-4'> 
                            <h4>Quantity</h4>
                        </div>
                        <div className='col-lg-1'>
                            <h4>Total</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
         
    </div>
  )
}

export default ShopCart