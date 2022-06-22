import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './protectedRoute/Protected';
import Home from './components/rcc/Layouts.js/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
