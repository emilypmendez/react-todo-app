import React, { useState, useEffect } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { v4 as uuidv4 } from "uuid" // random id generator
// import { Route, Switch } from "react-router-dom"

// import About from "../pages/About"
// import NotMatch from "../pages/NotMatch"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = id => {
    setTodos(prevState => // this is useful if the new state is computed using the previous state
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  useEffect(() => {
       console.log("test run")

       // getting stored items
       const temp = localStorage.getItem("todos")
       const loadedTodos = JSON.parse(temp)

       if (loadedTodos) {
            setTodos(loadedTodos)
       }
 }, []); // setter function as the only dependency


 useEffect(() => {
      // storing todos items
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
 }, [todos]);

 function getInitialTodos(){
      // getting stored items
      const temp = localStorage.getItem("todos") // accessing local storage and getting the saved todos
      const savedTodos = JSON.parse(temp)
      return savedTodos || [] // or simply returning a fall back empty array
}

  return (
       <>


              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={addTodoItem} />
                  <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                  />
                </div>
              </div>


       </>
  )
}

export default TodoContainer
