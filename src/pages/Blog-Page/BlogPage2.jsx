import React,{useEffect} from 'react'
import './Blog.scss'
import blogHeaderImg from '../../assets/images/headers-images/blog-titlle-image.jpg'
import MainBlogCard from './MainBlogCard'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import mainBlog2Img1 from '../../assets/images/blog-img/blog-page-mainImg1.jpg'
import mainBlog2Img2 from '../../assets/images/blog-img/blog-page2-mainImg2.jpg'
import mainBlog2Img3 from '../../assets/images/blog-img/blog-page2-mainImg3.jpg'
import coffeVideo from '../../assets/video/mixkit-cup-full-of-coffee-209-medium.mp4'
import recentPost1 from '../../assets/images/blog-img/recent-post1.jpg'
import recentPost2 from '../../assets/images/blog-img/recent-post2.jpg'
import recentPost3 from '../../assets/images/blog-img/recent-post3.jpg'
import { TiSocialInstagram } from "react-icons/ti";
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
// import {BsCaretRightFill} from "react-icons/bs"
import BlogAbout from './BlogAbout'
import RecentPosts from './RecentPosts'
import SecondBlogCard from './SecondBlogCard'
import BlogCategory from './BlogCategory'
import lastBlogImg from '../../assets/images/blog-img/side-bar-img-1 (1).jpg'
import { NavLink } from 'react-router-dom'

const BlogPage2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <div>
        <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={blogHeaderImg} headerText=' Our Blog Journey ' strength='200' />

        <div className='blog-page'>
            <div className='row'>

              <div className='col-12 col-md-9 pb-5'>
                  <MainBlogCard
                  mediaSource={mainBlog2Img1}
                  mainBlogTitle='THE BENEFITS OF PLAY'
                  mainBlogDesc='by Jane Doe / Enjoyment /30.01.2017'
                  mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                  mainBlogJob='Artists, Exhibitions'
                  />

            
                     <MainBlogCard
                  mediaSource={coffeVideo}
                  mainBlogTitle='THE CONCEPT THAT TOOK THE WORLD BY STORM'
                  mainBlogDesc='by Jane Doe / Enjoyment /30.01.2023'
                  mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                  mainBlogJob='Artists, Exhibitions'
                  />

                  <MainBlogCard
                  mediaSource={mainBlog2Img2}
                  mainBlogTitle='THE BENEFITS OF PLAY'
                  mainBlogDesc='by Jane Doe / Enjoyment /30.01.2023'
                  mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                  mainBlogJob='Artists, Exhibitions'
                  />

                  <SecondBlogCard 
                  cardDesc="by Jane Doe / Enjoyment / 30.01.2023"
                  cardTitle='THE KEY TO VICTORY WAS CREATING THE RIGHT ROUTINES.'
                  pplName='CHARLES DUHIGG'
                  cardJob='Artists, Lectures'
                  />

                  <MainBlogCard
                    mediaSource={mainBlog2Img3}
                    mainBlogTitle='COFFEE BAR'
                    mainBlogDesc='by Jane Doe / Enjoyment /30.01.2023'
                    mainBlogText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...'
                    mainBlogJob='Features'
                    />

                  {/* <SecondBlogCard 
                  cardDesc="by Jane Doe / Enjoyment / 30.01.2023"
                  cardTitle='LEARN, DO, ACHIEVE'
                  pplName='LEWIS HOWES'
                  cardJob='Features, Jobs'
                  /> */}
                
              </div>


              <div className='col-12 col-md-3 ps-lg-4'>

                <BlogAbout/>

                {/* ----Recent--- */}
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

                {/* ------category---- */}
                <div className=' pt-5 '>
                  <h2 className='accordion__h2 class-h2 '> CATEGORIES</h2>
                  <BlogCategory
                    accordionTitle='Sweets and Desserts'
                    content='Indulge in delectable desserts and treats that add a sweet touch to your dining experience.'
                  />
                  <BlogCategory
                    accordionTitle='Our Coffee Selection'
                    content='Discover our wide range of handcrafted coffee drinks, from espresso classics to unique blends that will delight your taste buds. We source our coffee beans from the finest coffee-growing regions around the world.'
                  />
                  <BlogCategory
                    accordionTitle='Cozy Ambiance'
                    content='Step into our coffee shop and experience the cozy ambiance that makes us a perfect spot to unwind. Our warm and inviting atmosphere, combined with the aroma of freshly brewed coffee, will make you feel right at home.'
                  />
                  <BlogCategory
                    accordionTitle='Brewing Guides'
                    content=' From French presses to espresso machines, explore step-by-step brewing guides that cater to every method. Elevate your brewing game and learn the secrets to extracting maximum flavor.'
                  />
                  <BlogCategory
                    accordionTitle='Café Culture'
                    content='Immerse yourself in the vibrant world of cafes. Explore different coffee cultures, interior designs, and recipes that define the cozy havens we all adore.'
                  />

                  
                </div>

                {/* ------follow-us------ */}
                <div className='follow-us pt-5 pb-3'>
                    <h2 className='class-h2 blog-about__h2'>FOLLOW US</h2>
                    <div className='follow-us__social'>
                      <a  href="" ><span ><TiSocialInstagram/></span></a>

                      <a  href=""><span ><TiSocialTwitter/></span></a>

                      <a  href=""><span><TiSocialFacebook/></span></a>

                      <a  href=""><span><TiSocialTumbler/></span></a>
                      <a  href=""><span><TiSocialVimeo/></span></a>
                      <a  href=""><span><TiSocialLinkedin/></span></a>
                    </div>
                  </div>

                {/* ------tags------ */}
                <div className='pb-4' >
                  <h2 className='class-h2 blog-about__h2 pt-4'>TAGS</h2>
                  <div className='tag-names '>
                      <span>Artists</span>
                      <span>Exhibitions</span>
                        <span>Features</span>
                        <span>Jobs</span>
                        <span>Lectures</span>
                     
                      
                  </div>
                </div>

                {/* -----Blog-last-img---- */}
                <div className='pt-4 pb-5 blog-last-img'>
                  <img src={lastBlogImg} alt="" />
                </div>

              </div>
            </div>

        </div>
        
            <div className='blog-bottom'>
              <div className=' justify-content-between  d-flex'>
                  <div className='align-items-start '>
                    <NavLink to='/blog2'><FaArrowLeft className='blog-bottom__icons' size={20}/></NavLink>
                    
                  </div>


                  <div className='align-items-end'>
                    <NavLink to='/blog'>
                       <FaArrowRight className='blog-bottom__icons' size={20}/>

                    </NavLink>
                  </div>
              </div>
               
            </div>
        
    </div>
    </div>
  )
}

export default BlogPage2