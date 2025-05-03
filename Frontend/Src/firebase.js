import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcOGpWKVQCdNx-Nzz_DNMAskp682vV8Mg",
  authDomain: "ziptrip-fe67f.firebaseapp.com",
  projectId: "ziptrip-fe67f",
  storageBucket: "ziptrip-fe67f.firebasestorage.app",
  messagingSenderId: "112944567819",
  appId: "1:112944567819:web:f9a66aed746d8ecf48990e",
  measurementId: "G-TRPFRWR49Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// ✅ Export everything you need
export { auth, provider, db };