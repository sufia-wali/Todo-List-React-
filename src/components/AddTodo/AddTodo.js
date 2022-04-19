import {React, useState} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './AddTodo.module.css';

const AddTodo = (props) =>{
  const[input, setInput] = useState('');

  const todoChangeHandler = (event) =>{
    setInput(event.target.value);
  }

  const todoSubmitHandler = (event) =>{
    event.preventDefault();
    props.onTodoSubmit(input);
    setInput('');

  }

  return(
    <Card className={classes.login}>
      <form className={classes.control} onSubmit ={todoSubmitHandler}>
        <input type="text" onChange={todoChangeHandler} value={input} />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  )

}

export default AddTodo;