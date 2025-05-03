import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTrip from './pages/CreateTrip';
import Dashboard from './pages/Dashboard';
import AuthButton from './components/AuthButton';
import Navbar from './components/Navbar'; // <-- ADD THIS LINE

const App = () => (
  <Router>
    <div className="p-4">
      <h1 className="text-2xl font-bold">ZipTrip</h1>
      <AuthButton />
      <Navbar /> {/* <-- INSERT NAVBAR HERE */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTrip />} />
      </Routes>
    </div>
  </Router>
);

export default App;
