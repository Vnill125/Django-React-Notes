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
        if (noteId === 'new') return
        
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
      fetch('http://127.0.0.1:8000/api/notes/create/',{
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(note)
      })
  } 

    let updateNote = async () =>{
      fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(note)
      })
    }

    let deleteNote = async () => {
      fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      })
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to={'/'}><FaArrowLeft onClick={updateNote}/></Link>
        </h3>
        {noteId !== 'new' ? 
          <Link to={'/'}><button onClick={deleteNote}>Delete</button></Link>
        : <Link to={'/'}><button onClick={createNote}>Add Note</button></Link>}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value}) }} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
