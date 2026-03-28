import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
          {/* <Navbar /> */}
        <Routes>
           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />


          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
