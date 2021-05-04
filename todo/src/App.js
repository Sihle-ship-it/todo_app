import React from "react";
import "./App.css";
import Item from "./components/ItemsList/ItemsList";
class App extends React.Component {
  constructor(){
    super();
    this.state = { todo: '' } 
  }

  handleChange = ({target}) => {
    this.setState({todo: target.value});
  }

  addTodo= () => {
    console.log(this.state.todo);
    //  items.push(this.state.todo)
  }
  
  render() {
    return (
      <div className="p-6 max-w-sm mx-auto  items-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-2">TODO APP</h1>

        <div className="mb-3 flex pt-0">
          <input
            type="search"
            placeholder="Enter todo"
            onChange={ this.handleChange }
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
          />
          <button
            className="bg-blue-500 text-white rounded font-bold py-2 px-4"
            onClick={ this.addTodo }
          >
            Add
          </button>
        </div>
        
      </div>
    );
  }
}

export default App;
