import React from 'react'
import { useGetUsersQuery, useDelteUserMutation } from '../service/api'
import { Link } from 'react-router-dom'

const User = () => {

  const { data: users, isLoading, isError, isSuccess } = useGetUsersQuery()
  const [deleteUser] = useDelteUserMutation()

  return (
    <div className='my-10 px-4'>
      {isLoading && <h1 className="text-center text-lg font-medium">...Loading</h1>}
      {isError && <h1 className="text-center text-lg font-medium text-red-600">Something went wrong</h1>}

      {isSuccess &&
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse mx-auto mt-5 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Age</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 border">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className=" px-4 py-2">{user.lastname}</td>
                  <td className="border px-4 py-2">{user.age}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className=" px-4 py-2 space-x-2 flex flex-wrap gap-2">
                    <Link to={`/edit/${user.id}`}>
                      <button className='bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md transition duration-200'>Edit</button>
                    </Link>
                    <button 
                      className='bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md transition duration-200' 
                      onClick={() => deleteUser(user.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default User
