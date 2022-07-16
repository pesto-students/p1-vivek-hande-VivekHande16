import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addStep, clearStep } from "./actions/index"

function App() {
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h3>You've walked {myState} Steps today!</h3>

          <button className='step step__add' title='Add step' onClick={() => dispatch(addStep())}>Add a step</button>
          <button className='step step__clear' title="Clear step" onClick={() => dispatch(clearStep())}>Reset steps</button>
        
      </div>
    </>
  )
}

export default App


// state = {
//   isLightOn: true
// };

// flipLight = () => {
//   this.setState({
//     isLightOn: !this.state.isLightOn
//   });
// };