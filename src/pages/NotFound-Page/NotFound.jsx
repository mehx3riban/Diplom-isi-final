import React,{useEffect} from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div >
      
        <div className=" error-header ">
          <h2 className=' error-header__title '>404 - PAGE NOT FOUND</h2>
          <div className='error-header__span '>
            <span>
              <Link to='/' className='error-header__span' >Barista</Link> / Error 404
            </span>
          </div>
        </div>

      

      <div className='error-content'>
        <h1 className='class-h2 error-content__title'>404</h1>
        <div className='error-content-divider'></div>
        <h3 className='class-h2 error-content__title-small'>PAGE YOU ARE LOOKING IS NOT FOUND</h3>
        <p className='class-p error-content__text'>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return  back to the site's homepage and see if you can find what you are looking for.</p>
        <Button to='/' icindekiYazi='homepage' classAdi='btn-brown-dark' />

      </div>
    </div>
  )
}

export default NotFound