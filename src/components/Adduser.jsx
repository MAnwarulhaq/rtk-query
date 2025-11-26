import React, { useState } from 'react'
import { useAddUserMutation } from '../service/users'
import { useNavigate } from 'react-router-dom'

const Adduser = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [addUser] = useAddUserMutation()

  function changeHandle(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addUser(user)
    alert("User added successfully!")
    navigate('/')
  }

  return (
    <div className="flex justify-center mt-10 bg-gray-50">
      <form 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col space-y-5 my-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Add User</h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-600">First Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            onChange={changeHandle}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname" className="mb-1 font-medium text-gray-600">Last Name</label>
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            onChange={changeHandle}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="mb-1 font-medium text-gray-600">Age</label>
          <input 
            type="number" 
            name="age" 
            id="age" 
            onChange={changeHandle}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-600">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            onChange={changeHandle}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Adduser
