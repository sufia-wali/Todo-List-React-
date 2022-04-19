import {React,useState} from "react";
import RemoveList from "../RemoveList/RemoveList";
import Card from "../UI/Card/Card";
import classes from './AddTodoList.module.css';


const AddTodoList = (props) => {

  const [hidden, setHidden] = useState(false);
  return (
    <Card classes={classes.users}>
      <ul>
         {!hidden && props.data.map((item) => (
          <li key={item.id}>{item.list}
          <RemoveList onClick={() => props.handleFilter(item.id)}/>
          </li>
        ))}
      </ul>
    </Card>
  )

}

export default AddTodoList;