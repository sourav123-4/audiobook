import React from 'react'
import '../Styles/Audiobook.css'
import ReactAudioPlayer from 'react-audio-player';
import {audioUrl, IMG_BOOK, IMG_PAUSE} from '../constant'
function AudioBook() {
  const [audioUrl,setAudioUrl]=React.useState("f01.mp3")
  return (
    <div className='audiobook-div'>
      <h4>Audiobook</h4>
      <div className='player-div'>
        <span className='overview'>Overview</span>
        <ReactAudioPlayer
          src={audioUrl}
          autoPlay
          controls
        />
        <img className='audio-image' src={IMG_BOOK}
          alt='Rich Dad"s Increase your financial IQ'
        />
      </div>
      <div className='tablecontents'>
        <h4>Table of Contents</h4>
        <ol>
          <a onClick={()=>setAudioUrl("fables_01_02_aesop.mp3")}><span>1</span><p>Introduction by GK Chesterton</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_03_aesop.mp3")}><span>2</span><p>The Fox And The Grapes story</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_04_aesop.mp3")}><span>3</span><p>The Goose That Laid The Golden Eggs</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_06_aesop.mp3")}><span>4</span><p>The Mischievious Dog behaviour story</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_07_aesop.mp3")}><span>5</span><p>The Charcoal and The Fuller story</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_08_aesop.mp3")}><span>6</span><p>The Mice And The big Council</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_09_aesop.mp3")}><span>7</span><p>The Bat And The Weasels story</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_10_aesop.mp3")}><span>8</span><p>The Dog and The Sow,The Fox And The Crow </p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
          <a onClick={()=>setAudioUrl("fables_01_11_aesop.mp3")}><span>9</span><p>The Fox And The Crow story</p>
          <img src={IMG_PAUSE} width="20px"/>
          </a>
        </ol>
      </div>
    </div>
  )
}

export default AudioBook