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
        name: "Sample data 1",
        priority: 1,
        id: "testkey",
      },
      {
        dueDate: new Date(),
        name: "Sample data 2",
        priority: 2,
        id: "afraer",
      },
    ],
    modalOpen: false,
    editModalOpen: false,
    editTodoId: "",
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
      let newTodoList = this.state.todoList;
      let index = newTodoList.findIndex((todo) => todo.id == id);

      console.log("index", index, id);

      let newTodo = { ...todo, id: id };

      newTodoList[index] = newTodo;
      this.setState({ todoList: newTodoList });
      this.handleEditClose();
    }
  };

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

  handleEditOpen = (event) => {
    let todoId = event.target.closest(".storeTodoId").dataset.todoid;
    console.log(todoId);
    this.setState({
      editModalOpen: true,
      editTodoId: todoId,
    });
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
          editTodoId={this.state.editTodoId}
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

