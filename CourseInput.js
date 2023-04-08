import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsValid]=useState(false)
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length===0){
      setIsValid(false);
    }else{
      setIsValid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
    }else{
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`button ${isValid?'':'invalid'}`}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
