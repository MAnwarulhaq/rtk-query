import React, { useEffect, useState } from 'react'
import { useGetUserQuery, useUpdateUserMutation } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    id,
    name: "",
    lastname: "",
    age: "",
    email: ""
  })

  const { data } = useGetUserQuery(id)
  const [updateUser] = useUpdateUserMutation()

  useEffect(() => {
    if (data) {
      setUser({
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        age: data.age,
        email: data.email
      })
    }
  }, [data])

  function changeHandle(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    updateUser(user)
    alert("User updated successfully!")
    navigate('/')
  }

  return (
    <div className="flex justify-center mt-10">
      <form 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col space-y-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Update User</h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-600">First Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={user.name} 
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
            value={user.lastname} 
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
            value={user.age} 
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
            value={user.email} 
            onChange={changeHandle} 
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button 
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Update
        </button>

      </form>
    </div>
  )
}

export default Edituser
