import React, { Component } from 'react';
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

  constructor(props){
    super(props)
    this.state = {
  	page: 0 
     }
   }


  handleBack() {
    console.log('go back')
  }

  handleForward() {
    console.log('go forward')
    console.log(this.state.page)
    this.setState({ page: this.state.page + 1})
  }


  render() {

  var content = things.map((t, i) => {
  	return <p key={i}>{i+1}: {t}</p>
  }).filter((t, i) => {
  	return (i >= this.state.page*5 && i <= this.state.page*5 + 5)
  })


    return (
    	<div>
		<button onClick={this.handleBack.bind(this)}>Back</button>
				<button onClick={this.handleForward.bind(this)}>Next</button>
		{content}
      	</div>
    );
  }
}

export default App;
