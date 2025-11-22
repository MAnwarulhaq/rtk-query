import React, { useState } from 'react'
import { useAddUserMutation } from '../service/api'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Edituser = () => {
    const {id} = useParams()
    console.log(id)
    const [user ,setUser] = useState({})
    const navigate = useNavigate()

    function  chandeHandle(e) {
    
        setUser({...user,[e.target.name]: e.target.value})
    }
    const [addUser] = useAddUserMutation()
    function hanldeSubmit (e){
        e.preventDefault()
        addUser(user)
        navigate('/')

        alert("user add successfully!")
        // console.log( "user",user)
    }
    

    
  return (
    <form className='flex flex-col justify-center  items-center text-left space-y-4' onSubmit={hanldeSubmit}>
        <h1>Add User</h1>
        <label htmlFor="name">First Name</label>
        <input type="text" name="name" id="name"  className='border p-3' onChange={chandeHandle} required/>
         <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastanme" className='border p-3'  onChange={chandeHandle} required/>
         <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" className='border p-3'  onChange={chandeHandle} required/>
         <label htmlFor="email">Email</label>
        <input type="email" name="email" id="emil"  className='border p-3'  onChange={chandeHandle} required/>

        <button>Update</button>
        

    </form>
  )
}

export default Edituser