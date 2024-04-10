import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div className='text-center content-center text-2xl h-screen'>
      <h1>404 Not Found</h1>
      <Link to="/"><div className=' underline text-blue-700'>Home</div></Link>
    </div>
  )
}

export default NoMatch