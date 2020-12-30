import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './layout/Nav'
import Main from './layout/Main'
import Footer from './layout/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <Nav />
          <Main />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div >
    </Router >
  );
}

export default App;
