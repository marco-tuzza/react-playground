import './ToDoList.css';

export default function ToDoList() {
    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <ul>
                <li>Buy milk</li>
                <li>Walk the dog</li>
                <li>Do the laundry</li>
            </ul>
        </div>
    );
}