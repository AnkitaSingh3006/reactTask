import * as React from "react";
import Login from "./component/login";
import User from "./component/useParams";
import Profile from "./component/nestedRoute";
import Follower from "./component/follower";
import Following from "./component/following";
import Detail from "./component/detail";
import SearchUser from "./component/queryString";
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Errorpage from "./component/errorPage";

function App() {

  const About = React.lazy(() => import('./component/About'))

  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <br />
          <Link to="/user">
            <button className="btn">URL Parameter</button>
          </Link>
          <br />
          <Link to="/profile">
            <button className="btn">Nested Route</button>
          </Link>
          <br />
          <Link to="/searchUser">
            <button className="btn">Query String</button>
          </Link>
          <br />
          <Link to="/about">
            <button className="btn">Lazy Load</button>
          </Link>
        </div>
        <React.Suspense fallback={<Login />}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
            <Route path="/user/:name" element={<User />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/detail" element={<Detail />} />
              <Route path="/profile/follower" element={<Follower />} />
              <Route path="/profile/following" element={<Following />} />
            </Route>
            <Route path="/searchUser" element={<SearchUser />} />
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Errorpage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
