import React from 'react'
import { useGetUsersQuery } from '../service/api'
import { Link } from 'react-router-dom'

const User = () => {

    const { data: users, isLoading, isError, isSuccess, error } = useGetUsersQuery()
    // console.log(users)

    return (
        <div className='my-10'>
            {isLoading && <h1>...loading</h1>}
            {isError && <h1>something wnet wrong</h1>}
            {
                isSuccess &&
                <table className="table-auto border-collapse mx-auto w-[70%] text-left mt-5">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">First Name</th>
                            <th className="border px-4 py-2">Last Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.lastname}</td>
                                <td className="border px-4 py-2">{user.age}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2 space-x-4">
                                    <Link to={`/edit/${user.id}`}>
                                        <button className='bg-green-600 text-white w-20 cursor-pointer'>Edit</button>
                                    </Link>
                                    <button className='bg-red-600 text-white w-20 cursor-pointer'>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            }

        </div>
    )
}

export default User