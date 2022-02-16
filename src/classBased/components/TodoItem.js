import React from "react"
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {

     state = {
          editing: false,
     }

     handleEditing = () => {
          this.setState({
               editing: true,
          })
     }

     handleUpdatedDone = event => {
          // console.log(event.key)
          if (event.key === "Enter"){ // update the editing state if keydown is Enter
               this.setState({ editing: false })
          }
     }

     componentWillUnmount(){
          console.log("Cleaning up...")
     }

     render() {

          const completedStyle = { // strike thru completed items
               fontStyle: "italic",
               color: "#595959",
               opacity: 0.4,
               textDecoration: "line-through",
          }

          const { completed, title, id } = this.props.todo

          // dynamically hides/display the todos text field
          let viewMode = {}
          let editMode = {}

          if (this.state.editing) {
               viewMode.display = "none"
          } else {
               editMode.display = "none"
          }

          return (

               <li className={styles.item}>
                 <div onDoubleClick={this.handleEditing} style={viewMode}>
                      <input
                       type="checkbox"
                       checked={completed}
                       onChange={() => this.props.handleChangeProps(id)}
                     />
                     <button onClick={() => this.props.deleteTodoProps(id)}>
                      Delete
                      </button>
                      <span style={completed ? completedStyle : null
                           /* dynamically change style if any todo items are completed
                           (condition) ? (true return value) : (false return value) */}>
                            {title}
                      </span>
                 </div>
                 <input
                    type="text"
                    className={styles.textInput}
                    style={editMode}
                    value={title /* value is not null or undefined */ }
                    onChange={e => {
                         this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdatedDone}
                 />
               </li>


          )
     }
}

export default TodoItem
