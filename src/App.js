import logo from './logo.svg';
import './App.css';
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";
import { useState,useEffect } from "react";
function App() {
  let initTodo;
  if( localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I m on delete of todo", todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
      localStorage.setItem("todos",JSON.stringify(todos))
    }));
  }

  // let todos=[
  //   {
  //     sno:1,
  //     title:"go to the market",
  //     desc:"u need to go to the market to get this job1 done"
  //   },
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno=todos[todos.length-1].sno+1;
    }

    console.log("I m adding this todo",title,desc)
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo); 
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="todos list" searchbar={true} />
      <AddTodo addTodo= {addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );

}


export default App;
