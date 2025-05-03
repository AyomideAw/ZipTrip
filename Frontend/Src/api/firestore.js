import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

// 1. Add new trip
export const addTrip = async (tripData) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Not logged in");

  const docRef = await addDoc(collection(db, 'trips'), {
    userId: user.uid,
    ...tripData,            // destination, purpose, date, etc.
    checklist: []           // empty for now
  });

  return docRef.id;
};

// 2. Get all trips for the logged-in user
export const getUserTrips = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("Not logged in");

  const q = query(collection(db, 'trips'), where('userId', '==', user.uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 3. Update checklist for a trip
export const updateChecklist = async (tripId, checklist) => {
  const tripRef = doc(db, 'trips', tripId);
  await updateDoc(tripRef, {
    checklist: checklist
  });
};
