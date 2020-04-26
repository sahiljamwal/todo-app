import React from 'react';
import logo from './logo.svg';
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isCompleted: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ''
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => {
      return item.id !== id;
    })
    this.setState({
      list: updatedList
    })
  }

  updateInput(input) {
    this.setState({
      newItem: input
    })
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} width='100' className="logo" />
          <h1 className='app-title'>To Do List App</h1>
          <div className='container'>
            Add an Item...
            <br />
            <input
              type='text'
              placeholder='add todo item'
              className='input-text'
              required
              value={this.state.newItem}
              onChange={e => { this.updateInput(e.target.value) }}
              

            />
            <button
              className='add-btn'
              onClick={() => { this.addItem(this.state.newItem) }}
              disabled={!this.state.newItem.length}
            >Add Todo</button>
            <div className='list'>
              <ul>
                {
                  this.state.list.map((item) => {
                    return (
                      <li key={item.id}>
                        <input
                          type='checkbox'
                          name='toDoItem'
                          checked={item.isCompleted}
                          onChange={() => {  }} />
                        {item.value}
                        <button
                          className='btn'
                          onClick={() => this.deleteItem(item.id)}
                        >Delete</button>
                      </li>
                    );
                  })
                }

              </ul>
            </div>
          </div>
        </header>

      </div>
    );
  }



}


export default App;