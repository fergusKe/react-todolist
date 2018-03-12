import React, { Component } from 'react';

class TodoItem extends Component {
  onClick = () => {
    this.props.toggleItem(this.props.id);
  }

  render() {
    let className;
    if (this.props.done) {
      className = 'todo-item done';
    } else {
      className = 'todo-item';
    }

    return (
      <li key={className} className={className} onClick={this.onClick}>
        {this.props.text}
      </li>
    );
  }
}

export default TodoItem;
