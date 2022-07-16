import React, { useState } from 'react'
import '../Css/HomeStyle.css'
import LinkResult from './LinkResult'
import InputShortner from './InputShortner'
import MainContent from './MainContent'

function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='home'>
      <MainContent />
      <div className='linkSection'>
          <InputShortner setInputValue={setInputValue}/>
          <LinkResult inputValue={inputValue}/>
      </div>
    </div>
  )
}

export default Home