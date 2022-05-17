import React from 'react'
import '../Styles/summary.css'
import 'react-tabs/style/react-tabs.css';
import {IMG_LOCK, SUMMARY_TEXT1, SUMMARY_TEXT2, SUMMARY_TEXT3} from '../constant'
function Summary() {
    const [toggleState,setToggleState]=React.useState(1);
    const toggleTab= (index)=>{
        setToggleState(index);
    }
  return (
    <div className='summary-div'>  
        <div className='overview-div'>
            <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
            >
                <h2 style={{fontSize:"20px"}}>Summary</h2>
                <img alt="i1" src={IMG_LOCK} width="20px"/>
            </button>
            <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            >
            Insights
            </button>
            <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            >
            Quotes
            </button>
        </div>
        <div className="content-tabs">
            <div
            className={toggleState === 1 ? "content  active-content" : "content"}
            >
                <h2>Overview</h2>
                <p>
                    {SUMMARY_TEXT1}
                </p>
                <p>
                    {SUMMARY_TEXT2}                    
                </p>
                <p>
                    {SUMMARY_TEXT3}
                </p>
            </div>

            <div
            className={toggleState === 2 ? "content  active-content" : "content"}
            >
                <h2>Overview</h2>
                <p>
                    {SUMMARY_TEXT1}
                </p>
                <p>
                    {SUMMARY_TEXT2}                    
                </p>
                <p>
                    {SUMMARY_TEXT3}
                </p>
            </div>

            <div
            className={toggleState === 3 ? "content  active-content" : "content"}
            >
                <h2>Overview</h2>
                <p>
                    {SUMMARY_TEXT1}
                </p>
                <p>
                    {SUMMARY_TEXT2}                    
                </p>
                <p>
                    {SUMMARY_TEXT3}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Summary