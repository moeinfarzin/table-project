import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import "./App.css"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';




function App() {
  return (
    <div className='app'>
      <HashRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dailyevent/:userId' element={<Home />} />
          <Route path='/signup/' element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
