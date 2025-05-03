import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex gap-4 mb-4">
    <Link to="/" className="text-blue-700 hover:underline">Dashboard</Link>
    <Link to="/create" className="text-blue-700 hover:underline">Create Trip</Link>
  </nav>
);

export default Navbar;
