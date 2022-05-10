import React from 'react'
import './App.css'
import Summary from './Components/Summary'
import AudioBook from './Components/AudioBook'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-Main">
        <Summary/>
        <AudioBook/>
      </div>
    </div>
  )
}

export default App