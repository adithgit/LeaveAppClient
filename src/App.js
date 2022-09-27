import './App.css'
import Navbar from './common/Navbar';
import UserLogin from './common/UserLogin';
import Login from './components/admin/Login'
import Home from './common/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLogin />,
    },
    {
      path: "/admin",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
