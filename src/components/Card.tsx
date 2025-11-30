import { useState } from "react"
import type { TODO } from "./InputField"
import "../App.css"

const Card = ({ item }: { item: TODO }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const toggle = () => {
        setIsCompleted(!isCompleted)
    }

    const deleteTask = () => {
        // Adding a small delay for exit animation could be done here, 
        // but for now, we simply unmount.
        setIsDeleted(true)
    }

    if (isDeleted) return null;

    return (
        <div className={`task-card ${isCompleted ? 'completed' : ''}`}>
            
            {/* Aesthetic X Button */}
            <button 
                className="delete-btn" 
                onClick={deleteTask}
                title="Delete Task"
            >
                ✕
            </button>

            <div>
                <h3>{item.todo}</h3>
                <div className="timestamp">
                    {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
                    {' · '} 
                    {new Date(item.createdAt).toLocaleDateString()}
                </div>
            </div>
            
            <button className="status-btn" onClick={toggle}>
                {isCompleted ? "✓ Completed" : "Mark as Done"}
            </button>
        </div>
    )
}

export default Card;