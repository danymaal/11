import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import classes from './CourseInput.module.scss';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid && 'red'}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props => props.invalid ? '#ffd7d7' : 'white'};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Adding styles dynamically  */}
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        {/* <FormControl className={!isValid && 'invalid'}> */}
        <label>Course Goal</label>
        <input
          //   style={{
          //     border: !isValid ? '1px solid red' : '1px solid black',
          //     backgroundColor: !isValid ? 'red' : 'white',
          //   }}
          type='text'
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
