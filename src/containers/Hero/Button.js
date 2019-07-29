import React, { Component } from 'react'
import './Button.css'
export default class Button extends Component {
  render() {
    return (
        <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    )
  }
}
