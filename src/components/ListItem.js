import React from 'react'
import { Link } from 'react-router-dom'


const ListItem = ({index, note}) => {
  return (
    <Link to={`/note/${index + 1}`}>
      <div className='notes-list-item'>
        <h3>{note.body}</h3>
      </div>
      
    </Link>
  )
}

export default ListItem
