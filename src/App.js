import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import OutputArea from './components/OutputArea/OutputArea.component';
import TransitionsModal from "./components/Modal/Modal.component.jsx";

class App extends React.Component {
  state = {
    todoList: [
      {
        dueDate: new Date(),
        name: "test",
        priority: 1,
        id: "testkey"
      },
    ],
    modalOpen: false,
    editModalOpen: false,
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

  editTodo = (todo, id) => {
    if (!todo.name || !todo.dueDate || !todo.priority) {
      alert("Please fill in all fields!!");
    } else {
      // let todoList = this.state.todoList;
      // todoList.push(todoInput);
      let newTodoList = this.state.todoList;
      let index = newTodoList.findIndex(
        todo => todo.id === id);
      // let index = newTodoList.indexOf(
      //   todo => console.log("testlog", todo));

        console.log("TodoList", this.state.todoList);

        console.log("newTodoList", newTodoList);

        console.log("index", index);

      newTodoList[index] = todo;
      this.setState({ todoList: newTodoList });
      this.handleEditClose();
    }
  }

  deleteTodo = (index) => {
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleEditOpen = () => {
    this.setState({ editModalOpen: true });
  };

  handleEditClose = () => {
    this.setState({ editModalOpen: false });
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
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
          editModalOpen={this.state.editModalOpen}
          handleEditOpen={this.handleEditOpen}
          handleEditClose={this.handleEditClose}
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

