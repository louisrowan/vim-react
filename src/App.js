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
'hi',
'more',
'content',
'hellooo',
'another',
'the',
'quick',
'brown',
'fox',
'jumped',
'over',
'the',
'LAZY DOG'
]


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
  	page: 0,
	backwards: false,
	forwards: true,
	perPage: 5
     }
   }


  handleBack() {
    if (this.state.page <= 1) this.setState({ backwards: false })
    this.setState({ page: this.state.page - 1, forwards: true})
  }

  handleForward() {
    if ((this.state.page + 2)*this.state.perPage >= things.length) {
    	this.setState({ forwards: false })
    }
    this.setState({ page: this.state.page + 1, backwards: true})
  }

  handleNewPerPage(e) {
  	e.preventDefault()
	this.setState({ perPage: +this.inputVal.value, page: 0, backwards: false })
	if (+this.inputVal.value >= things.length) {
    		this.setState({ forwards: false })
    	} else { this.setState({ forwards: true }) }
	this.inputVal.value = ''

  }


  render() {

  var content = things.map((t, i) => {
  	return <p key={i}>{i+1}: {t}</p>
  }).filter((t, i) => {
  	return (i >= this.state.page*this.state.perPage && i <= this.state.page*this.state.perPage + this.state.perPage - 1)
  })


    return (
    	<div>
		<h2>Page {this.state.page + 1} </h2>
		<input type='submit' value='Back' disabled={!this.state.backwards} onClick={this.handleBack.bind(this)}/>
		<input type='submit' value='Next' disabled={!this.state.forwards} onClick={this.handleForward.bind(this)}/>
		{content}
		<br />
		<p>per page: {this.state.perPage}</p>
		<form onSubmit={this.handleNewPerPage.bind(this)}>
			<label>Customize:
			<input type='number'
			max={things.length}
			min={1}
			ref ={ (input) => {this.inputVal = input} }
			/>
			</label>
			<input type='submit' value='Update' />
		</form>
      	</div>
    );
  }
}

export default App;
