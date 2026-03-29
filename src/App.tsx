import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Navbar } from './layout/Navbar';
import { Landing } from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import PropertySearch from './pages/PropertySearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
          {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/property-search" element={<PropertySearch />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
