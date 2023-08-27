import React, { useEffect, useState } from 'react'
import './ShopPage.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ShopHeaderImg from '../../assets/images/headers-images/shop-title-area.jpg'
import Products from '../../components/Products/Products'
import Tags from '../../components/Tags/Tags'
import SortingProduct from '../../components/Sorting/SortingProduct'


const ShopPage = () => {

    const [sort,setSort]= useState('')

  return (
    <div>
        
         <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={ShopHeaderImg} headerText='Shop' strength='200' />
        
        
        <div className='shop-page__content'>
            <div className='row'>
                <div className='col-9'>
                    <SortingProduct setSort={setSort}/>
                    <Products sort={sort} />
                </div>
                <div className='col-3'>
                    <Tags />
                </div>
            </div>

            

        </div>
 
    </div>
  )
}

export default ShopPage