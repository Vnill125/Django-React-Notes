import { BrowserRouter as Router, Route}from 'react-router-dom'

import Header from './components/Header.js'
import NotesListPage from './pages/NotesListPage.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path='/' exact component={NotesListPage}>
    </div>
    </Router>
  );
}

export default App;
