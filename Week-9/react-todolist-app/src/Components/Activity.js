import React, { useState } from 'react';
import './todoPage.css'

function Activity(props) {
  const [tClass, settClass] = useState("not completed");

  const activityStatus = (e) => {
    settClass(e.type === "click" ? (tClass === "completed" ? "not completed" : "completed") : "not completed");
  }

  const removeActivity = () => {
    props.removeActivity(props.activity.key);
    settClass("not completed");
  }
  
  return (
    <div class="item">
    <div className='todo-list'  onClick={activityStatus} >
        <p className='activity'>{props.activity.text}</p>
        <span className='done'>{tClass}</span>
    </div>
    <div>
        <button className='remove' onClick={removeActivity}>x</button>
    </div>
    </div>
  )

}

export default Activity;
