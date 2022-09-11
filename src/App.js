import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
