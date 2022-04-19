// import Users from './components/Users';
import { useState } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import AddTodoList from "./components/AddTodoList/AddTodoList";

function App() {

  const [todo, setTodo] = useState([]);
  const todoHandler = (todoList)=>{
    setTodo ((prev) =>{
      return [...prev, {list:todoList, id:Math.random().toString()}]
    })
  }

  const handleFilter = (id) =>{
    let filtered = todo.filter((task) =>
     task.id !==id);
    setTodo(filtered);
    console.log(filtered);

  }
  return (
    <div>
      <Header />
      <AddTodo onTodoSubmit ={todoHandler} />
      <AddTodoList data={todo} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
