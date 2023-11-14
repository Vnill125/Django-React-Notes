
import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const AddButtons = () => {
  return (
    <Link to={'note/new/'} className='floating-button'>
      <IoAddSharp/>
    </Link>
  )
}

export default AddButtons
