import React, {Component} from 'react';

export default class ButtonCount extends Componemt {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }


  // handleClick = () => {
  //   let newCount = this.state.count + 1
  //   this.setState({
  //     count: newCount
  //   })
  // }

  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState + 1
      }
    })
  }


  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }

}


import React from 'react'

export default class LightSwitch extends React.Component {
  constructor() {
    super()
    this.state = {
      toggled: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: previousState.toggled
      }
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "NO" : "OFF"}</button>
      </div>
    )
  }
}