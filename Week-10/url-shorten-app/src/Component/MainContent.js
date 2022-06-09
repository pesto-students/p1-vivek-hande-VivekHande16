import React from 'react'
import photo from '../Css/back.svg'

function MainContent() {
  return (
    <div className='mainSection'>
        <div className='contentBox'>
            <h1>More than just Shorter links</h1>
            <p>Build your brands recognition and get insights on how your links are performing</p>
        </div>
        <div className='mainImage'>
            <img src={photo} alt="home"/>
        </div>
    </div>
  )
}

export default MainContent