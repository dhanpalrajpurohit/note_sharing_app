"use client";
import { useState } from 'react';

import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';

import './globals.css';


import TodoView from '../components/todoView';
import NoteView from '../components/NoteView';

const NOTES_DETAILS_DATA: { "title": string, "content": string }[] = [
  { "title": "Node JS", "content": "Leaning node js" },
  { "title": "Python Notes", "content": "Notes about the oops concepts in python" },
  { "title": "GYM", "content": "description about the diet and excerise" },
  { "title": "Water Intake", "content": "Measure mentent about the wwater intake" },
  { "title": "Pschology of Money", "content": "reading book about the financial knowledge" },
  { "title": "Mobile Screen", "content": "How to reduce the mobile screen time" },
  { "title": "Learn machine learning", "content": "Notes about the machine leaning notes and theory" },
]

const DashboardPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
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

      <div className="grid grid-cols-5 gap-3 p-20">
        {
          NOTES_DETAILS_DATA.map((note, index) =>
            <NoteView
              key={index}
              title={note.title}
              content={note.content}
            />
          )
        }
      </div>

    </div>
  );

};

export default DashboardPage;
