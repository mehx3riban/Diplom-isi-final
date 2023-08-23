import React from 'react'
import './ShopPage.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ShopHeaderImg from '../../assets/images/headers-images/shop-title-area.jpg'
// import Products from '../../components/Products/Products'
import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
import { fetchTodos } from '../../Redux/todoSlice'


const ShopPage = () => {

const dispatch = useDispatch ()

const todos = useSelector((state)=> state.todos )


  return (
    <div >
        
         <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={ShopHeaderImg} headerText='Shop' strength='200' />
        
        <div className='shop-page'>
            <p>flsfj</p>
            <button onClick={()=>dispatch(fetchTodos())}>fet data</button>
            {todos.loading && 'fetc data'}
            {todos.error && todos.error}
        </div>
        <div className='container'>
            {
                todos.data.length > 0 &&
                todos.data.map((todo)=>(
                    <div className='todo'>
                        <h3 >{todo.MemberPosition}</h3>
                    </div>
                ))
            }
        </div>

        
    </div>
  )
}

export default ShopPage