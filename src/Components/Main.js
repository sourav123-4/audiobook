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
            <p>Business & Finance</p></div>
          <div className='btn-1'>
            <p>Business & Finance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main