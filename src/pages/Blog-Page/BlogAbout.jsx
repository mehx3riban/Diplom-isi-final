import React from 'react'
import './Blog.scss'
import blogAboutImg from '../../assets/images/blog-img/blog-about-img.png'
const BlogAbout = () => {
  return (
    <div className='blog-about '>
        <h2 className='class-h2 blog-about__h2'>ABOUT</h2>
        <div className='blog-about__img-div ' >
            <img className='blog-about__img' src={blogAboutImg} alt="" />
            
        </div>
        <p className='class-p blog-about__text'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.</p>
    </div>
  )
}

export default BlogAbout