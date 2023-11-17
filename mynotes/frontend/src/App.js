import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import './App.css'

import  {HashRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='container dark'>
        <div className='app'>
        <Header/>

          <Routes>
            <Route path='/' exact element={<NotesListPage/>}/>
            <Route path='/note/:noteId' element={<NotePage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
