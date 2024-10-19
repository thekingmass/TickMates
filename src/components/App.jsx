import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  /*
   Multiple ways of deleting the item from the array 
    you can uncomment any one of the below to see the effect
  */

  // function deleteItem(id) {
  //   setItems((prevItems) => {
  //     return prevItems.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  /* splice one is Not working */
  // function deleteItem(id) {
  //   setItems((prevItems) => {
  //     const index = prevItems.findIndex((item) => item.id === id);
  //     if (index !== -1) {
  //       return prevItems.splice(index, 1);
  //     }
  //     return prevItems;
  //   });
  // }

  function deleteItem(id) {
    setItems((prevItems) =>
      prevItems.reduce((acc, item, index) => {
        if (index !== id) {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  }

  function editListItem(id) {
    console.log("edit button clicked", id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TickMate</h1>
      </div>
      <InputArea onAddClicked={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              onEditClick={editListItem}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
