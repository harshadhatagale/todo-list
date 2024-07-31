"use client"
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // Load todos from local storage when the component mounts
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);

    // Save todos to local storage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className='w-full lg:w-[35%] mx-auto flex justify-center items-center my-3 space-x-4'>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    name="todo"
                    id="todo"
                    placeholder='Add a new Todo'
                    className='w-3/5 px-2 border-2 border-gray-800 h-10 outline-cyan-400 rounded-lg'
                />
                <button onClick={addTodo} className='bg-green-600 px-5 py-2 rounded-lg text-white'>Add</button>
            </div>
            <div className='overflow-y-scroll w-[90%] lg:w-[45%] min-h-[330px] border-2 border-gray-400 mx-auto rounded-lg'>
                <ul className='space-y-2 py-2 text-black flex-col w-full justify-center items-center flex'>
                    {todos.map((todo, index) => (
                        <li key={index} className='text-md rounded-sm text-black w-[95%] p-3 bg-slate-200 flex justify-between items-center'>
                            <span className='font-semibold'>{todo}</span>
                            <MdDelete onClick={() => deleteTodo(index)} />
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
}
