import React, { useState } from 'react';
import './ToDoList.css';

export default function ToDoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (!newItem.trim()) 
        {
            return;
        }

        setItems([...items, newItem]);
        setNewItem('');
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
