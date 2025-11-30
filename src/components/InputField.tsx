import { useState } from "react";
import Card from "./Card";
import "../App.css"; // Import CSS

export interface TODO {
    status: boolean,
    todo: string,
    createdAt: number
}

const InputField = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState<TODO[]>([])

    const AddTask = () => {
        if (!todo.trim()) return; // Prevent empty tasks

        const insert: TODO = {
            status: false,
            todo: todo,
            createdAt: Date.now(),
        }

        setTodos([...todos, insert])
        setTodo("")
    }

    return (
        <div>
            <h1>My Creative Tasks</h1>
            
            <div className="input-group">
                <input
                    type="text"
                    value={todo}
                    placeholder="What's on your mind?"
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && AddTask()} // Allow Enter key
                />

                <button
                    className="add-btn"
                    disabled={todo.length === 0}
                    onClick={AddTask}
                >
                    Add Task +
                </button>
            </div>

            {/* THE GRID CONTAINER */}
            <div className="tasks-container">
                {todos.map((t) => (
                    <Card key={t.createdAt} item={t} />
                ))}
            </div>
        </div>
    )
}

export default InputField