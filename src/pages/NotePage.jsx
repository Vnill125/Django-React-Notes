import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'


const NotePage = () => {
   
    let {noteId} = useParams()
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [])

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to={'/'}><FaArrowLeft/></Link>
        </h3>
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value}) }} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
