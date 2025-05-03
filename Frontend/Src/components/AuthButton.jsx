import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthButton = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="mb-4">
      {!user ? (
        <button
          onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Log In
        </button>
      ) : (
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default AuthButton;