import React, { useState } from 'react'

function InputShortner({setInputValue}) {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

  return (
    <div className='baseLink'>
        <input type="text" 
            placeholder='Paste a link'
            value={value}
            onChange={(e)=> setValue(e.target.value)}
        />
        <button className='button'onClick={handleClick}>Shorten</button>
    </div>
  )
}

export default InputShortner