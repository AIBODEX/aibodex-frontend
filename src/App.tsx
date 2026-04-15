import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import PropertySearch from './pages/User/PropertySearch';
import PropertyDetails from './pages/User/PropertyDetails'
import UserDashboard from './pages/User/UserDashboard';
import SavedProperties from './pages/User/SavedProperties';
import Messages from './pages/User/Messages';
import Chat from './pages/User/Chat';
import Profile from './pages/User/Profile';
import AgentDashboard from './pages/Agent/AgentDashboard';
import AgentMyListings from './pages/Agent/AgentMyListings';
import AgentLeads from './pages/Agent/AgentLeads';
import AgentVerification from './pages/Agent/AgentVerification';
import AgentVerificationWizard from './pages/Agent/AgentVerificationWizard';

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
          {/* User Profile */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/saved-properties" element={<SavedProperties />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/agent-dashboard" element={<AgentDashboard />} />
          <Route path="/agent-dashboard/listings" element={<AgentMyListings />} />
          <Route path="/agent-dashboard/leads" element={<AgentLeads />} />
          <Route path="/agent-dashboard/verification" element={<AgentVerification />} />
          <Route path="/agent-dashboard/verification/new" element={<AgentVerificationWizard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
