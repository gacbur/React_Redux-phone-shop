import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './layout/Nav'
import Main from './layout/Main'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Main />
      </div >
    </Router >
  );
}

export default App;
