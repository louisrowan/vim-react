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
  	page: 0,
	backwards: false,
	forwards: true
     }
   }


  handleBack() {
    if (this.state.page <= 1) this.setState({ backwards: false })
    this.setState({ page: this.state.page - 1, forwards: true})
  }

  handleForward() {
    console.log(things.length, this.state.page)
    if ((this.state.page + 2)*5 >= things.length) {
    	this.setState({ forwards: false })
    }
    this.setState({ page: this.state.page + 1, backwards: true})
  }


  render() {

  var content = things.map((t, i) => {
  	return <p key={i}>{i+1}: {t}</p>
  }).filter((t, i) => {
  	return (i >= this.state.page*5 && i <= this.state.page*5 + 4)
  })


    return (
    	<div>
		<h2>Page {this.state.page + 1} </h2>
		<input type='submit' value='Back' disabled={!this.state.backwards} onClick={this.handleBack.bind(this)}/>
		<input type='submit' value='Next' disabled={!this.state.forwards} onClick={this.handleForward.bind(this)}/>
		{content}
      	</div>
    );
  }
}

export default App;
