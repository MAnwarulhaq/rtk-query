import React, { useEffect, useState } from 'react'
import { useGetUserQuery,useUpdateUserMutation} from '../service/api'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Edituser = () => {
    const {id} = useParams()
    
    const [user ,setUser] = useState({
        id,
        name:"",
        lastname:"",
        age:"",
        email:""
    })
    const navigate = useNavigate()

    function  chandeHandle(e) {
    
        setUser({...user,[e.target.name]: e.target.value})
    }
    const {data} = useGetUserQuery(id)
    const [updateUser] = useUpdateUserMutation()

    useEffect(()=>{
        if(data){
            setUser({...user,name:data.name, lastname: data.lastname, age:data.age ,email: data.email ,id: data.id})
        }
    },[data])
    // setUser(data)
    // console.log(data)
    function hanldeSubmit (e){
        e.preventDefault()
        updateUser(user)
        navigate('/')

        alert("user Update  successfully!")
        // console.log( "user",user)
    }
    
    // console.log(user)

    
  return (
    <form className='flex flex-col justify-center  items-center text-left space-y-4' onSubmit={hanldeSubmit}>
        <h1>Update Users</h1>
        <label htmlFor="name">First Name</label>
        <input type="text" name="name" id="name" value={user.name}  className='border p-3' onChange={chandeHandle} required/>
         <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastanme" value={user.lastname} className='border p-3'  onChange={chandeHandle} required/>
         <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" value={user.age} className='border p-3'  onChange={chandeHandle} required/>
         <label htmlFor="email">Email</label>
        <input type="email" name="email" id="emil" value={user.email} className='border p-3'  onChange={chandeHandle} required/>

        <button>Update</button>
        

    </form>
  )
}

export default Edituser