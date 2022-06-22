import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './protectedRoute/Protected';
import Home from './components/rcc/Layouts.js/Home';
import Login from './pages/rcc/Login';
import Register from './pages/rcc/Register';
import Logout from './pages/rcc/Logout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/register" element={<Protected Component={Register} />} />
          <Route path="/login" element={<Protected Component={Login} />} />
          <Route path="/logout" element={<Protected Component={Logout} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
