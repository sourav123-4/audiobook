import React from 'react';
import '../Styles/main.css'

const Main = () => {
  return (
    <div className='main'>
      <img className='image' src='https://webservice.instaread.co/books/images?imageUrl=https://d1cm35kbp068hs.cloudfront.net/5yutl3wifu/cover.jpg&type=cover' alt="book-cover" style={{ width: "226px", height: "365px" }} />
      <div className='info'>
        <h1 className='title'>Rich Dad’s Increase Your Financial IQ Summary</h1>
        <h1 className='sub-title'>Key Insights & Analysis</h1>
        <h2 className='author'>Robert T. Kiyosaki</h2>
        <div className='note'>
          <div className='note-1'>
            <i class="fa fa-book"></i>
            <p className='addition'>13 min read</p>
          </div>
          <div className='note-1'>
            <i class="fa fa-headphones" aria-hidden="true"></i>
            <p className='addition'>21 min listen</p>
          </div>
          <div className='note-1'>
            <i class="fa fa-bookmark" aria-hidden="true"></i>
            <p className='addition'>Add to Library</p>
          </div>
        </div>
        <div className='button'>
          <div className='btn-1'>
            <p>Business & Economics</p></div>
          <div className='btn-1'>
            <p> Finance</p>
          </div>
        </div>
        <div className='rating'>
          <div className='rating-no'>
            <div className='ratings'>
              <h3 className='ratingNo'>5.0</h3>  
              <div className='stars'>
                <i class='fa fa-star star1'></i>
                <i class='fa fa-star start2'></i>
                <i class='fa fa-star star3'></i>
                <i class='fa fa-star star4'></i>
                <i class='fa fa-star start5'></i>
              </div>              
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main