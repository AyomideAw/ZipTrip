import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTrip from './pages/CreateTrip';
import Dashboard from './pages/Dashboard';
import AuthButton from './components/AuthButton';

const App = () => (
  <Router>
    <div className="p-4">
      <h1 className="text-2xl font-bold">ZipTrip</h1>
      <AuthButton />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTrip />} />
      </Routes>
    </div>
  </Router>
);

export default App;
