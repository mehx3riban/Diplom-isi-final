import React from 'react'
const RecentPosts = ({recentPostImg,recentPostTitle,recentPostDate}) => {
  return (
    <div className='recent-post '>
        
        <div>
            <div className='row pb-md-2 '>
                <div className='col-12 col-lg-6 p-0 pb-lg-2'>
                    <img className='recent-posts__img' src={recentPostImg} alt="" />
                </div>
                <div className='col-12 col-lg-6'>
                    <h2 className='class-h2 recent-post__title'>{recentPostTitle}</h2>
                    <p className='recent-post__date'>{recentPostDate}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentPosts