import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';

import './globals.css';

const DashboardPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);


  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const todo = {
      id: uuidv4(),
      text: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleToggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Navigation Bar */}
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-10 px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://media.zeemly.com/zeemly/product/tailwind-css.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-semibold">Todo App</span>
        </div>
        {/* User Profile */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center text-gray-600 focus:outline-none"
            onClick={handleToggleDropdown}
          >
            <FaUserCircle className="h-6 w-6 mr-1" />
            <span>John Doe</span>
          </button>
          {/* Dropdown */}
          {showDropdown && (
            <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">View Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
    {/* Todo List */}
    <div className="max-w-[50%] mx-auto px-4 py-20 content-center">
    {/* <div className="p-6 max-w-lg w-full"> */}
        <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
        <div className="mb-4 flex">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-sm font-semibold hover:bg-indigo-600 transition-colors"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between px-4 py-2 border border-gray-300 rounded-sm bg-white`}
            >
              <span
                className={`flex-grow ml-2 cursor-pointer ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    {/* </div> */}
  </div>
);

};

export default DashboardPage;
