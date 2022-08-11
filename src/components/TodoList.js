import React from "react";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const [toDos, setTodo] = useState([
    {
      id: 1,
      todo: "FAIRE LE MARCHER",
    },
    {
      id: 2,
      todo: "boire du lait ",
    },
    {
      id: 3,
      todo: "achete le pain",
    },
  ]);

  const myTodo=toDos.map(todo => {
    console.log(todo.id)
    console.log(todo.todo)
    return (
    <li  className="list-group-item" key={todo.id}> {todo.todo} </li>
    )
  });
 
  return (
    <div>
      <h1 className="text-center">{toDos.length} HELLO LE PROOO</h1>
      <ul className="list-group">
       {myTodo}
      </ul>
    <AddTodoForm/>
  
    </div>
  );
};

export default TodoList;
