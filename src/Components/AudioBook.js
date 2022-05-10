import React from 'react'
import '../Styles/Audiobook.css'
import ReactAudioPlayer from 'react-audio-player';
import {audioUrl} from '../constant'
function AudioBook() {
  const [audioUrl,setAudioUrl]=React.useState("f01.mp3")
  return (
    <div className='audiobook-div'>
      <h3>Audiobook</h3>
      <div className='player-div'>
        <ReactAudioPlayer
          src={audioUrl}
          autoPlay
          controls
        />
      </div>
      <h4>Table of Contents</h4>
      <ol>
        <a onClick={()=>setAudioUrl("fables_01_02_aesop.mp3")}><li>Introduction by GK Chesterton</li></a>
        <a onClick={()=>setAudioUrl("fables_01_03_aesop.mp3")}><li>The Fox and The Grapes</li></a>
        <a onClick={()=>setAudioUrl("fables_01_04_aesop.mp3")}><li>The Goose That Laid The Golden Eggs</li></a>
        <a onClick={()=>setAudioUrl("fables_01_05_aesop.mp3")}><li>The Cat and the Mice</li></a>
        <a onClick={()=>setAudioUrl("fables_01_06_aesop.mp3")}><li>The Mischievious Dog</li></a>
        <a onClick={()=>setAudioUrl("fables_01_07_aesop.mp3")}><li>The Charcoal-Burner and The Fuller</li></a>
        <a onClick={()=>setAudioUrl("fables_01_08_aesop.mp3")}><li>The Mice in Council</li></a>
        <a onClick={()=>setAudioUrl("fables_01_09_aesop.mp3")}><li>The Bat And The Weasels</li></a>
        <a onClick={()=>setAudioUrl("fables_01_10_aesop.mp3")}><li>The Dog and The Sow </li></a>
        <a onClick={()=>setAudioUrl("fables_01_11_aesop.mp3")}><li>The Fox And The Crow </li></a>
        <a onClick={()=>setAudioUrl("fables_01_12_aesop.mp3")}><li>The Horse and the Groom </li></a>
        <a onClick={()=>setAudioUrl("fables_01_13_aesop.mp3")}><li>The Wolf and the Lamb </li></a>
        <a onClick={()=>setAudioUrl("fables_01_14_aesop.mp3")}><li>The Peacock And The Crane </li></a>
      </ol>
    </div>
  )
}

export default AudioBook