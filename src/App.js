import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const deleteItems=(id)=>{
    console.log("del");
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !== id;
      })
    })
    }
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add Task"
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval,index) => {
              return <ToDoList 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
