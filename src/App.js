import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import OutputArea from './components/OutputArea/OutputArea.component';
import TransitionsModal from "./components/Modal/Modal.component.jsx";

class App extends React.Component {
  state = {
    todoList: [
      // {
      //   dueDate: "",
      //   name: "test",
      //   priority: "",
      // },
    ],
    modalOpen: false,
  };

  addTodo = (todo) => {
    let todoInput = { ...todo, id: new Date().getTime() };

    if (!todo.name || !todo.dueDate || !todo.priority) {
      alert("Please fill in all fields!!");
    } else {
      let todoList = this.state.todoList;
      todoList.push(todoInput);
      this.setState({ todoList: todoList });
      this.handleClose();
    }
  };

  deleteTodo = (index) => {
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  };

  handleOpen = () => {
    this.setState({modalOpen:true});
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  componentDidUpdate() {
    console.log("state update");
    console.log(...this.state.todoList);
  }

  render() {
    return (
      <div className="App">
        <Header
          // addTodo={this.addTodo}
          // modalOpen={this.state.modalOpen}
          // handleOpen={this.handleOpen}
          // handleClose={this.handleClose}
        />
        <OutputArea
          todoList={this.state.todoList}
          deleteTodo={this.deleteTodo}
        />
        <TransitionsModal
          addTodo={this.addTodo}
          modalOpen={this.state.modalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;

        // <InputArea addTodo={this.addTodo} />;

