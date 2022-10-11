import Login from "./component/login";
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
