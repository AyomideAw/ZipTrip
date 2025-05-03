import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';

const AuthButton = () => {
  const { user } = useAuth();
  
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(err => {
      console.error("Login error:", err);
    });
  };

  const handleLogout = () => {
    signOut(auth).catch(err => {
      console.error("Logout error:", err);
    });
  };

  return (
    <div className="mb-4">
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default AuthButton;
