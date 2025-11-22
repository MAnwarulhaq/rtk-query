import React, { useState } from 'react'

const Adduser = () => {
    const [user ,setUser] = useState()

    function  hanldeSubmit(e) {
        setUser({...user,[e.target.name]: e.target.value})
    }
  return (
    <form className='flex flex-col justify-center  items-center text-left space-y-4'>
        <h1>Add User</h1>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fanme"  className='border p-3' onChange={hanldeSubmit}/>
         <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastanme" className='border p-3'  onChange={hanldeSubmit} />
         <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" className='border p-3'  onChange={hanldeSubmit}/>
         <label htmlFor="email">Email</label>
        <input type="email" name="email" id="emil"  className='border p-3'  onChange={hanldeSubmit}/>

        <input type="submit" name="Sumbit" id="s" className='border p-3' />
        

    </form>
  )
}

export default Adduser