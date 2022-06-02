import React, {useState} from 'react'

function ActivityForm() {

  const [title, setTitle] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = {
      id: Math.floor(Math.random() * 1000),
      text: title
    }

    setTitle(' ');
  }

  const todoTitle = (event) => {
      setTitle(event.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Add todo" onChange={todoTitle} value={title}/>
          <button>Add Todo</button>
    </form>
  )
}

export default ActivityForm