import React ,{ useState } from 'react'
import {BiSolidRightArrow} from 'react-icons/bi'


const BlogCategory = ({accordionTitle,content}) => {

    const [isActive,setIsActive] = useState(false)

  return (
    <div>
        <div className='accordion'>
            <div className='accordion__item pb-3'>
                <div >
                    <div className=' d-flex align-items-center ' 
                        onClick={()=>setIsActive(!isActive)}
                    >
                        <BiSolidRightArrow className={`accordion-icon ${isActive ? 'active-icon' : '' }`} 
                        size={12} />
                        <h4
                         className='accordion__title ps-2'
                         >{accordionTitle}
                         </h4>
                    </div>
                    <div  className={`accordion-content ${ isActive ? 'show' : ''}`}>
                    
                        <p>{content}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCategory