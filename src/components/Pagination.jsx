import React from 'react'

const Pagination = ({usersperPage,totalUsers,setStartIndex,startIndex}) => {
    // console.log("usersperpage",usersperPage)
    // console.log("totalusers",totalUsers)
    const pages = []

    for( let i=1; i <= Math.ceil(totalUsers.length/usersperPage); i++)
    {
        pages.push(i)
    }

    // console.log("pages",pages)

  return (
    <div className='flex justify-center items-center gap-5 my-10'>
        {pages.map((page,index)=>{
            return <button key={index} onClick={()=>setStartIndex(page)} className={`size-8 border ${page === startIndex ?"bg-indigo-500 text-white ":""} `}>{page}</button>
        })}
    </div>
  )
}

export default Pagination