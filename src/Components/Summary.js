import React from 'react'
import '../Styles/summary.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {SUMMARY_TEXT} from '../constant'
function Summary() {
  return (
    <div className='summary-div'>  
        <div className='overview-div'>
            <Tabs>
                <TabList>   
                    <Tab>Summary</Tab>
                    <Tab>Insights</Tab>
                    <Tab>Quotes</Tab>
                    <Tab>Community</Tab>
                </TabList>
                <TabPanel>
                    <h2>Overview</h2>
                    <p>{SUMMARY_TEXT}</p>   
                </TabPanel>
                <TabPanel>
                    <h2>overview</h2>
                    <p><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    </p>   
                </TabPanel>
                <TabPanel>
                    <h2>overview</h2>
                    <p><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    </p>   
                </TabPanel>
                <TabPanel>
                    <h2>overview</h2>
                    <p><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    </p>   
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default Summary