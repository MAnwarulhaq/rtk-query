import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">

      <Link to="/" className="text-2xl font-bold hover:text-gray-200 duration-200">
        RTK Query
      </Link>

      <ul className="flex space-x-6 text-lg">
        <li>
          <Link
            to="/adduser"
            className="hover:text-gray-200 duration-200"
          >
            Add User
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
