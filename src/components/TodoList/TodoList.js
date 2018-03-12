import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import './TodoList.css';

class TodoList extends Component {
  state = {
    list: [
      {id: 1, text: '11', done: true},
      {id: 2, text: '22', done: false},
      {id: 3, text: '33', done: false},
    ]
  }
  addItem = (text) => {
    const list = [
      ...this.state.list,
      {
        id: this.state.list.length + 1,
        text,
        done: false
      }
    ];

    this.setState({
      list
    });
  }
  toggleItem = (id) => {
    const list = this.state.list.map(item => (
      item.id !== id ? item : {
        id,
        text: item.text,
        done: !item.done
      }
    ));

    this.setState({
      list
    });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <div className="list-group">
          {list.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              toggleItem={this.toggleItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
