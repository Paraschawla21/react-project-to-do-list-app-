import { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText) {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
    }

    function deleteItem(id) {
        // console.log("delete item called");
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea onAdd={addItem} />
            <div>
                <ul>
                    {items.map((toDoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={toDoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
