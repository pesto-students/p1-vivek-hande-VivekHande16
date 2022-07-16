import React, { useState } from 'react';
import Activity from './Activity';

function ActivityList(props) {
  const [text, setText] = useState("");
  const [activities, setActivities] = useState([]);
  
  const activityText = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      key: Math.floor(Math.random() * 100),
      text: text,
    }

    if(!text) return;
 
    setActivities([newActivity, ...activities]);
    setText('');
  }

  function removeActivity(val) {
    setActivities([...activities.filter(act => act.key !== val)]);
  }

  return (
    <div className='todo'>
      <form class="todo-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Add new activity" onChange={activityText}  value={text}/>
          <button class="button">Add</button>
      </form>

    {
      activities.map((activity, index) => (
          <Activity 
            activity = {activity}
            index={index}
            key={index}
            removeActivity = {removeActivity}
         />
        )
    )}  
      
    </div>
  )
   
}

export default ActivityList