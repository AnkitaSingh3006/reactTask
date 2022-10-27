import Login from "./component/login";
import User from "./component/useParams";
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <br/>
          <Link to="/user/anil">
            <button className="btn">Buck</button>
          </Link>
          <br/>
          <Link to="/user/peter">
            <button className="btn">Peter</button>
          </Link>
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/user/:name" element={<User/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
