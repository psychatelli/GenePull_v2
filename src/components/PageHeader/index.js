import React, { Component } from 'react'

export default class Pageheader extends Component {
  render() {
    return (
      <div className="PageHeader">
        <p>   <i class="material-icons">{this.props.icon}</i> {this.props.text} </p>
      </div>
    )
  }
}
