import React from 'react'
import './App.css'
import Summary from './Components/Summary'
import AudioBook from './Components/AudioBook'
import Header from './Components/Header'
import Main from './Components/Main'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <Main/>
      <div className="App-Main">
        <Summary/>
        <AudioBook/>
      </div>
    </div>
  )
}

export default App