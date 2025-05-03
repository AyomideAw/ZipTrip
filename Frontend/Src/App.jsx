import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButton from './components/AuthButton';
import CreateTrip from './pages/CreateTrip';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">ZipTrip</h1>
        <AuthButton />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateTrip />} />
        </Routes>
      </div>
    </Router>
  );
}
