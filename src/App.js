import './App.css'
import Navbar from './common/Navbar';
import UserLogin from './common/UserLogin';
import Login from './components/admin/Login'
import Home from './common/Home';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home  />
    </div>
  );
}

export default App;
