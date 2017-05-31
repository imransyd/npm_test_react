import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*

Task 13
Create a web application with the create-response app. Change in App.js to render the component
<H1> Hello </ h1> too. Type a smoke test for the App Component, which tests to allow the component to be cleaned without throwing any errors. Make sure you have done the right with the npm test.

Tasks 13.1

Change the application from task 13 to use the Enzyme API to test. (Slide 03:12)
You are going to
Add a CSS class and check that it is in the component
Add an HTML element and check that it is in the component
Add an event and check that event function is called (mock function, e.g., actclick)

*/


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Number from './Number.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Hello</h1>
	//	<Number value={256} />
      </div>
		
    );
  }
}

export default App;

