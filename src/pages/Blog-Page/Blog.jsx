import React from 'react'
import './Blog.scss'
import blogHeaderImg from '../../assets/images/headers-images/blog-titlle-image.jpg'
import MainBlogCard from './MainBlogCard'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import mainBlogImg1 from '../../assets/images/blog-img/blog-standard-img-1.jpg'
import mainBlogImg2 from '../../assets/images/blog-img/blog-standard-img-2.jpg'
import recentPost1 from '../../assets/images/blog-img/recent-post1.jpg'
import recentPost2 from '../../assets/images/blog-img/recent-post2.jpg'
import recentPost3 from '../../assets/images/blog-img/recent-post3.jpg'
import BlogAbout from './BlogAbout'
import RecentPosts from './RecentPosts'
const Blog = () => {
  return (
    <div>
        <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={blogHeaderImg} headerText=' Our Blog Journey ' strength='200' />

        <div className='blog-page'>
            <div className='row'>
            <div className='col-12 col-md-9'>
                <MainBlogCard
                mainBlogImg={mainBlogImg1}
                mainBlogTitle='EXPAND YOUR MIND, CHANGE EVERYTHING'
                mainBlogDesc='by Jane Doe / Enjoyment /30.01.2017'
                mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                mainBlogJob='Features'
                />

                <MainBlogCard
                mainBlogImg={mainBlogImg2}
                mainBlogTitle='PLACES TO GET LOST'
                mainBlogDesc='by Jane Doe / Enjoyment /30.01.2023'
                mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                mainBlogJob='Jobs'
                />

            </div>
            <div className='col-12 col-md-3 ps-lg-4'>

              <BlogAbout/>
              <div >
              <h2 className='class-h2 blog-about__h2 m-0 pt-5 mb-4 '>RECENT POSTS</h2>
              <RecentPosts
              recentPostImg={recentPost1}
              recentPostTitle='MAKE IT SIMPLE'
              recentPostDate='23.4.2023'
              />
              <RecentPosts
              recentPostImg={recentPost2}
              recentPostTitle='COFFEE SHOP'
              recentPostDate='13.2.2022'
              />
              <RecentPosts
              recentPostImg={recentPost3}
              recentPostTitle='COFFEE BAR'
              recentPostDate='1.6.2023'
              />
              </div>
             

            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Blog