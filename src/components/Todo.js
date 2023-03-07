import React, { useState, useRef } from 'react'
import './App.css';

const Todo = () => {

  const [newItems, setNewItems] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef(null); // Declare a ref for the input field

  //Helper function addItem
  function addItem() {
    if (!newItems) {
      alert("Enter A New Item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItems
    }
    setItems(oldList => [...oldList, item]);
    setNewItems("");
    inputRef.current.focus(); // Focus on the input field after adding a new item
  }

  function deletItems(id) {
    const newArray = items.filter(items => items.id !== id);
    setItems(newArray);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  }

  return (
    <div className='app-addItems'>
      <input
        type="text"
        placeholder='Add ToDos Here !'
        className='app-input'
        value={newItems}
        onChange={e => setNewItems(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={inputRef} // Assign the ref to the input field
      />
      <button
        id='btn-Add'
        onClick={() => addItem()}
        type="submit" >  Add</button>

      <ul>
        {items.map(items => {
          return (
            <li key={items.id}>{items.value} <button onClick={() => deletItems(items.id)}>❌</button></li>
          )
        })}
      </ul>

    </div>
  )
}

export default Todo;
