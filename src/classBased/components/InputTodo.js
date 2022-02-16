/* Since we will be getting data through the user's interaction (ie. thru the input field),
this component will hold state. For that reason, it will be class-based component. */

import React, { Component } from "react"

class InputTodo extends Component {
     state = {
          title: ""
     };

     onChange = e => { // event.target => https://developer.mozilla.org/en-US/docs/Web/API/Event/target
          this.setState({
               [e.target.name]: e.target.value
          });
     };

     handleSubmit = e => {
          e.preventDefault(); // prevent native handling of submit button
          if (this.state.title.trim()) { // make sure input field is not empty(trim()). when condition is satisfied, update the UI
               this.props.addTodoProps(this.state.title); //clear the input field once we have submitted a todos item for subsequent entry
               this.setState({
                    title: ""
               });
          } else { // else alert users to input an item
               alert("Please write item in the list.");
          }

     };

     render() {
          return (
               <form onSubmit={this.handleSubmit} className="form-container">
                <input
                 type="text"
                 className="input-text"
                 placeholder="Add Todo..."
                 value={this.state.title}
                 name="title"
                 onChange={this.onChange}
                />

                <button className="input-submit">Submit</button>
               </form>
          )
     }
}

export default InputTodo
