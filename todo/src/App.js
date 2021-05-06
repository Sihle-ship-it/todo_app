import React from "react";
import "./App.css";
import Item from "./components/ItemsList/ItemsList";
class App extends React.Component {
  constructor(){
    super();    
    this.state = { todos: [] } 
  }

  handleChange = (e) => {
    e.preventDefault();
    let newTodo = this.newTodo.value;
    this.setState({todos: [...this.state.todos, newTodo]});
    console.log(this.state.todos);
    this.addForm.reset();
  }
  
  render() {
    return (
      <div className="p-6 max-w-sm mx-auto  items-center">
        <h1 className="text-3xl text-center md:text-4xl font-medium mb-2">TODO APP</h1>

        <div className="mb-3 flex flex-row justify-between mt-10 pt-0">
        <form ref = {input => this.addForm = input} onSubmit={this.handleChange}>
            <input
            type="search"
            placeholder="Enter todo"
            ref = {input => this.newTodo = input}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:ring"
          />
        <button
        className="bg-blue-500 text-white rounded font-bold py-3 px-4">
        Add
      </button>
    </form>
        </div>
        <Item items={ this.state.todos }/>
      </div>
    );
  }
}

export default App;
