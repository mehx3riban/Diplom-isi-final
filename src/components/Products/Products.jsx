import React, { useEffect } from 'react';
import './Products.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/productsSlice';
import Loading from '../../components/Loading';
// import ShopCard from '../ShopCard/ShopCard';
import StarRating from '../StarRating/StarRating'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import { addToCart } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';


const Products = ({sort}) => {
  const dispatch = useDispatch();
  const { products, productsStatus, selectedTag } = useSelector(
    (state) => state.products
  );

  const navigate =useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filterlenmisProduct = selectedTag
    ? products.filter((product) => product.tag === selectedTag)
    : products;

    const sortingProducts =
    sort === 'inc'
      ? [...filterlenmisProduct].sort((a, b) => a.productPrice - b.productPrice)
      : sort === 'dec'
      ? [...filterlenmisProduct].sort((a, b) => b.productPrice - a.productPrice)
      : filterlenmisProduct;

  const handleAddToCart =(product)=>{
    dispatch(addToCart(product));
    navigate('/shopcart');
  }
    
  return (
    <div>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <div className="row">
          {
            sortingProducts.map((product, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>

              <div>
              <div className='shop-card'>
                <div className='shop-card__img'>
                   <img src={product.productImg} alt="" />

                    <div className='shop-card__overlay d-flex align-items-center justify-content-center' onClick={()=> handleAddToCart(product)} >
                    <LiaShoppingBagSolid className='shop-card__icon'/>
                    <h3 className='shop-card__overlay-h3'>add to cart</h3>
                </div>
                </div>
        
                <div className='shop-card__content'>
                    <h2 className='class-h2 shop-card__name'>
                        {product.productName}
                    </h2>
                    <StarRating rating={product.review} />
                    <p className='shop-card__price'>
                        ${product.productPrice}
                    </p>
                </div>
            </div>
              </div>
              {/* <ShopCard
                cardImg={product.productImg}
                cardName={product.productName}
                propstar={product.review}
                cardPrice={product.productPrice}
              /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
