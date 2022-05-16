import React from 'react'
import '../Styles/summary.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {SUMMARY_TEXT} from '../constant'
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
            Summary
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAZlBMVEX///8lJSUAAAD4+PhNTU0gICANDQ2kpKQbGxsSEhJpaWm9vb24uLh/f38VFRUYGBji4uLc3NyamppUVFStra3Hx8fv7+/Ozs6KiopfX193d3eRkZHo6OgrKytxcXE9PT1EREQ0NDTjEaaLAAADGUlEQVR4nO2aa7eqIBBAE8SkEkPT1NLy///Ja51zRL2CPRi6j9kfW6zcjjCMI6sVgiAIgiAIgjwPpR8WyI9JVaYdZZQc8w85HDYhISJkHSEnJNwc3Jvso+7C3ohOKto7lcgLL/BmCLzCYUSO8xJfIkdXFgXRSdwgkZOVQ0ttKL4DUjrwoOmCReeRgntQf9Gi8/ChPTZ82cLzeANrcZjMTibIHcHGv5MDpIUcWwiSnrbyfJa7U0rE2EPCWdAyHkWikv0coLIaRSQGXC7bYTDENFEd6+G8IVswjXpwv6T57XZpM9BkLZTFdrBWZ3MljQIH4WjUzIiv80P8wRCgRZurkLP6PD/m7KnnRmA2253S0KeFQWIhOxCNqg84u2hvNL/04YgrCAvq9xcIEv2wpJ+lDGRn2dcq3JqZcR/WPxVWQ5SEUmVrYhqnJgeHSOhZ//9hahqX9pUyyQA0VCYXxrlX9VEDSWBKg0emcRFHDdRADdT4OzVgs6jaU9il2WhpVMEBsadsr6q8Y6GBwbCr7XCcm2mL6REYaQyVyfPkj7zHzxH4FutiehHLV5wnbu1VgtGLsbjHo7BlIR/qaeiwVgo272lYenvL6+VrGWC1nVmaxcvXMiHsZLHDGxP0RmCnAbV+V2ONGv+nBheMCWNicaDBeZFJmRXcIAKv0TfiaKX/uAGuwQfbVqH/0gOsEZaDUTTV1UXQGuO+uNQ9FmCNSW+Lpmx+HLBGPCloIs0WCKzBJ/3ARLNogTXEJBqFpmAF1hgtlI5Ss1TAV8qo77n/0Erx+KgjWOnyOXgWHdZV+hrNwZ6S/OwpyQf3FNU72Bk+27vQ2KEGaqAGaqAGaljS+N7qp2d+HGv8FIK6AtCRhhecbkNOxiFOGgtlkpSfbix0hEFg7upb0vhDOoHZW03i7rHZ6YueNa/Ij8IsfVPZvNUmFhs7Fquj8bTsEsTaqd7mjUnKbQWjexmqX/jQ9kVYWzxnJNsXp4dorZ7vkT55Yb0w4ts+7LRuCb8f9H+UkJPWTv4cQbOi9B8nLaMM6uQqfQIgBQRBEARBEOSf4RdXkTHPJthcdwAAAABJRU5ErkJggg==' width="20px"/>
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
            <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
            >
            Community
            </button>
        </div>

        <div className="content-tabs">
            <div
            className={toggleState === 1 ? "content  active-content" : "content"}
            >
            <h2>Overview</h2>
            <p>
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
            </p>
            </div>

            <div
            className={toggleState === 2 ? "content  active-content" : "content"}
            >
            <h2>Overview</h2>
            <p>
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
            </p>
            </div>

            <div
            className={toggleState === 3 ? "content  active-content" : "content"}
            >
            <h2>Overview</h2>
            <p>
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
            </p>
            </div>
            <div
            className={toggleState === 4 ? "content  active-content" : "content"}
            >
            <h2>Overview</h2>
            <p>
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
                If you think it takes money to make money, you're wrong.
                What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                you rich.
            </p>
            </div>
            {/* <Tabs>
                <TabList>   
                    <Tab >Summary</Tab>
                    <Tab >Insights</Tab>
                    <Tab >Quotes</Tab>
                    <Tab >Community</Tab>
                </TabList>
                <TabPanel>
                    <h2 style={{fontSize:"24px"}}>Overview</h2>
                    <p style={{fontSize:"20px"}}>{SUMMARY_TEXT}</p>   
                </TabPanel>
                <TabPanel>
                    <h2 style={{fontSize:"24px"}}>Overview</h2>
                    <p style={{fontSize:"20px"}}>If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                      If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                      If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                    </p>   
                </TabPanel>
                <TabPanel>
                    <h2 style={{fontSize:"24px"}}>Overview</h2>
                    <p style={{fontSize:"20px"}}><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                      If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                    </p>   
                </TabPanel>
                <TabPanel>
                    <h2 style={{fontSize:"24px"}}>Overview</h2>
                    <p style={{fontSize:"20px"}}><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                      If you think it takes money to make money, you're wrong.
                      What it takes is a high financial IQ. Robert T. Kiyosaki's Rich Dads Increase Your Financial IQ (2008)
                      defines financial intelligence, explains its five different forms, and dives deep into each. Kiyosaki 
                      exposes misconceptions about finance and provides valuable knowledge that can jumpstart your career as 
                      a savvy entrepreneur.In the end, it's not stocks, precious metals, property, money, or even hard work 
                      that makes you wealthy - it's what you know about these things. It's your financial IQ that really makes 
                      you rich.
                    </p>   
                </TabPanel>
            </Tabs> */}
        </div>
    </div>
  )
}

export default Summary