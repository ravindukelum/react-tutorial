import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import User from './User.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/hello-world">go to Hello World</Link>
            </li>
            <li>
              <Link to="/">Go home</Link>
            </li>
            <li>
              <Link to="/user/Ravi">Ravi</Link>
            </li>
            <li>
              <Link to="/user/Raju">use2</Link>
            </li>
            <li>
              <Link to="/user/Ramu">use3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/hello-world" element={<h1>Hello World route</h1>} />
          <Route path="/" element={<h1>I am on Homepage</h1>} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
