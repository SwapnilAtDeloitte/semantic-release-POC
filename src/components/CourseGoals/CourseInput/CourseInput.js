import React, { useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from './CourseInput.module.css';

// import styled from "styled-components";
// const FormControl = styled.div`
// margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props => props.invalid ? 'rosybrown' : 'transparent'}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const goalTitleRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = goalTitleRef.current.value;
    if (!enteredValue.trim().length) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    goalTitleRef.current.value = '';
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" ref={goalTitleRef}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
