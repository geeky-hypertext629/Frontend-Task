import React, {FC} from 'react'

const Heading : FC = () => {
  return (
    <header className="border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="logo">
          <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">My Tests</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">My Sessions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Career Library</a>
          <a href="#" className="font-medium text-gray-900">Your Report</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Heading;
