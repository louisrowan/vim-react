import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const things = [
'hello',
'bye',
'hi',
'hello',
'bye',
'hi',
'hello',
'bye',
'hi',
'hello',
'bye',
'hi',
'hello',
'bye',
'hi'
]


class App extends Component {
  render() {
  var content = things.map((t, i) => {
  	return <p key={i}>{i+1}: {t}</p>
	})
    return (
    	<div>
		{content}
      	</div>
    );
  }
}

export default App;
