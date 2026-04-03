import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import PropertySearch from './pages/User/PropertySearch';
import PropertyDetails from './pages/User/PropertyDetails'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/property-search" element={<PropertySearch />} />
          <Route path="/property-details" element={<PropertyDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
