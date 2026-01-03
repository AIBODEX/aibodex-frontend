import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
