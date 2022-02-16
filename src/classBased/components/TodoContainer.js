import React from "react"
import Header from './Header'
import TodosList from './TodosList'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
     state = {
          todos: []
     };

     handleChange = (id) => {
          this.setState(prevState => ({ // schedule a UI update with prevState
               todos: prevState.todos.map( todo => { // loop thru todos array object
                    // check if any items 'id' matches the checked 'id'
                    if (todo.id === id) {
                         return {
                              ...todo, // grab the item, spread its props and then toggle the completed value
                              completed: !todo.completed,
                         }
                    }
                    return todo;
               })
          }));
     };

     deleteTodo = id => {
          this.setState({
               todos: [ // grab the current todos item(...), then for each of the todos data that we loop thru,
                    // retain/filter for the id which is not equal to the id passed in
                    ...this.state.todos.filter( todo => {
                         return todo.id !== id;
                    })
               ]
          })
     };

     addTodoItem = title => {
          const newTodo = { // define object for new item
               id: uuidv4(),
               title: title,
               completed: false
          };
          this.setState({ // re-render state, add new item to current todos list (grabbed with spread operator (...))
               todos: [...this.state.todos, newTodo]
          });
     };

     setUpdate = (updatedTitle, id) => { // event for editing(updating) todo items
          this.setState({ // update the state todos title whose id matches that of the edit text input
               todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                         todo.title = updatedTitle // title gets updated value of the text field
                    }
                    return todo
               }),
          })
     }

     // no longer needed (delete componentDidMount below)

     // componentDidMount(){ // get list of todos displayed in the console
     //      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10") // make req to specified URL
     //           .then(response => response.json()) // return a promise
     //           .then(data => this.setState({ todos: data })); // update the state with this data
     // }

     // saving and retrieving data from the browser storage when React detects an update
     componentDidUpdate(prevProps, prevState){ // using these args to skip applying an effect if certain values haven't changed between re-renders
          if(prevState.todos !== this.state.todos){
               const temp = JSON.stringify(this.state.todos) // get the present todos and store in local storage
               localStorage.setItem("todos", temp)
          }
     }

     componentDidMount(){
          const temp = localStorage.getItem("todos") // get data from storage
          const loadedTodos = JSON.parse(temp)
          if (loadedTodos) {
               this.setState({ // update the state
                    todos: loadedTodos
               })
          }
     }

     render() {
          return (
               <div className="container">
                     <div className="inner">
                      <Header />
                      <InputTodo addTodoProps={this.addTodoItem} />
                      <TodosList
                         todos={this.state.todos}
                         handleChangeProps={this.handleChange}
                         deleteTodoProps={this.deleteTodo}
                         setUpdate={this.setUpdate}
                      />
                    </div>
               </div>
          )
     }
}

export default TodoContainer
