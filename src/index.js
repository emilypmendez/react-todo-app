// functionBased react app
// ====================================
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
// import { BrowserRouter as Router } from "react-router-dom"

// component file
import TodoContainer from './functionBased/components/TodoContainer'

// stylesheet
import './functionBased/App.css'

// strict mode activate checks and logs a warning message at runtime
ReactDOM.render(
     <React.StrictMode>

          <TodoContainer />

     </React.StrictMode>,
     document.getElementById("root")
);




// classBased react app
// ====================================
// import React from "react"
// import ReactDOM from "react-dom"
// import reportWebVitals from './reportWebVitals';
//
// // component file
// import TodoContainer from './classBased/components/TodoContainer'
//
// // stylesheet
// import "./classBased/App.css"
//
// // strict mode activate checks and logs a warning message at runtime
// ReactDOM.render(
//      <React.StrictMode>
//      <TodoContainer/>
//      </React.StrictMode>,
//      document.getElementById("root")
// );





// create react app
// ====================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
