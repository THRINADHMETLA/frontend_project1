import React, { useState } from 'react'

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.submitFunction(this.state.name, this.state.age);
  }
  render() {
    return (
      <>
        <form id='studentDetails' onSubmit={this.handleSubmit}>
          <label htmlFor='name'>
            Enter your name:
          </label>
          <input id='name' type="text" value={this.state.name} onChange={this.handleNameChange} />
          <label htmlFor='age'>
            Enter your age:
          </label>
          <input id='age' type="text" value={this.state.age} onChange={this.handleAgeChange} />
          <button type='submit'>
            Submit
          </button>
        </form>
        <span>
          {this.state.name}
        </span>
        <span>
          {this.state.age}
        </span>
        <div>
          {this.props.type}
        </div>
        <div>
          {this.props.movieList}
        </div>
      </>
    )
  }
}

export const Mybutton = "Button"

export const Mytable = "Table"

// export default MyForm