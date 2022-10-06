import './App.css'
import Navbar from './common/Navbar';
import {
  Outlet,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
