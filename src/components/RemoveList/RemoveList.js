import React from 'react';
import classes from './RemoveList.module.css';

const RemoveList = (props) =>{
  return(
  <button className={classes.remove}  onClick={props.onClick}><i className='fa fa-remove'></i></button>
  )
}

export default RemoveList;